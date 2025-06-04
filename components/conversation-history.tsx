"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createClient } from "@/lib/supabase/client";
import { formatDistanceToNow } from "date-fns";
import { ChatHistoryModal } from "@/components/chat-history-modal";
import { Button } from "@/components/ui/button";

interface Conversation {
  id: string;
  user_id: string;
  summary: string;
  created_at: string;
  full_conversation?: string;
}

export function ConversationHistory() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  const fetchConversations = async () => {
    try {
      setError(null);
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        // console.log('No user found');
        setIsLoading(false);
        return;
      }

      // console.log('Fetching conversations for user:', user.id);
      const { data, error } = await supabase
        .from('conversations')
        .select('id, user_id, summary, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching conversations:', error);
        setError('Failed to load conversations');
        throw error;
      }

      // console.log('Fetched conversations:', data);
      setConversations(data || []);
    } catch (error) {
      console.error('Error in fetchConversations:', error);
      setError('Failed to load conversations');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchConversations();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        fetchConversations();
      }
    });

    // Subscribe to conversation changes
    const channel = supabase
      .channel('conversations_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'conversations'
        },
        (payload) => {
          // console.log('Conversation change detected:', payload);
          fetchConversations();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
      supabase.removeChannel(channel);
    };
  }, []);

  const handleConversationClick = async (conversation: Conversation) => {
    try {
      setError(null);
      // Fetch full conversation when needed
      const { data, error } = await supabase
        .from('conversations')
        .select('full_conversation')
        .eq('id', conversation.id)
        .single();

      if (error) throw error;
      
      setSelectedConversation({
        ...conversation,
        full_conversation: data?.full_conversation
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching conversation details:', error);
      setError('Failed to load conversation details');
    }
  };

  if (isLoading) {
    return (
      <div className="h-full w-full animate-pulse space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="bg-gray-100">
            <CardContent className="h-24" />
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-red-500">
          {error}
          <Button
            onClick={fetchConversations}
            variant="ghost"
            className="mt-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="space-y-4 pr-4">
          {conversations.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center text-gray-500">
                No conversations yet
              </CardContent>
            </Card>
          ) : (
            conversations.map((conversation) => (
              <Card
                key={conversation.id}
                className="cursor-pointer transition-colors hover:bg-gray-50"
                onClick={() => handleConversationClick(conversation)}
              >
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-800">
                      {conversation.summary}
                    </p>
                    <p className="text-xs text-gray-400">
                      {formatDistanceToNow(new Date(conversation.created_at), { addSuffix: true })}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </ScrollArea>

      <ChatHistoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        conversation={selectedConversation}
      />
    </>
  );
} 