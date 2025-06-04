"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  conversation: {
    summary: string;
    created_at: string;
    full_conversation?: string;
  } | null;
}

export function ChatHistoryModal({
  isOpen,
  onClose,
  conversation,
}: ChatHistoryModalProps) {
  if (!conversation) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">
            Conversation from {format(new Date(conversation.created_at), "PPP")}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] mt-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Summary</h3>
              <p className="text-gray-600">{conversation.summary}</p>
            </div>
            {conversation.full_conversation && (
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Full Conversation</h3>
                <div className="whitespace-pre-wrap text-gray-600 bg-gray-50 p-4 rounded-lg">
                  {conversation.full_conversation}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
} 