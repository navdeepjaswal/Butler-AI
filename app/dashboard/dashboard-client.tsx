"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Send, StopCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/components/ui/use-toast";

// Web Speech API types
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionError extends Event {
  error: string;
}

interface DashboardClientProps {
  initialName: string;
}

// Define a type for messages
interface Message {
  id: string;
  text: string;
  sender: "user" | "butler";
  isLoading?: boolean;
}

// Helper function to format conversation for storage
const formatConversationForStorage = (messages: Message[]) => {
  return messages
    .filter((msg) => !msg.isLoading)
    .map((msg) => `${msg.sender.toUpperCase()}: ${msg.text}`)
    .join("\n\n");
};

// Helper function to generate a summary
const generateSummary = async (conversation: string) => {
  try {
    const res = await fetch("/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `Please summarize this conversation in a concise way:\n\n${conversation}`,
        isSummary: true,
      }),
    });

    if (!res.ok) throw new Error("Failed to generate summary");
    const data = await res.json();
    return data.response;
  } catch (error) {
    console.error("Error generating summary:", error);
    return "Conversation with Butler";
  }
};

export function DashboardClient({ initialName }: DashboardClientProps) {
  const [isListening, setIsListening] = useState(false);
  const [inputText, setInputText] = useState("");
  const [greeting, setGreeting] = useState("Good morning");
  const [isSpeechSupported, setIsSpeechSupported] = useState(true);
  const [platformMessage, setPlatformMessage] = useState("");
  const [cueCards, setCueCards] = useState([
    "What can I use to remember my passwords?",
    "What are the steps to get and use Whatsapp?",
    "How do I video call my daughter?",
  ]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [animateMic, setAnimateMic] = useState(true);
  const [micPermissionChecked, setMicPermissionChecked] = useState(false);
  const [micPermissionDenied, setMicPermissionDenied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDashboardReady, setIsDashboardReady] = useState(false);
  const [isSavingConversation, setIsSavingConversation] = useState(false);
  const supabase = createClient();
  const { toast } = useToast();
  const [remainingRequests, setRemainingRequests] = useState<number | null>(
    null,
  );

  // Speech recognition setup
  const recognition = useRef<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");

    // Always show first Butler message
    setMessages([
      {
        id: "butler-welcome",
        text: "Hello! Your Butler awaits — how can I serve your tech needs?",
        sender: "butler",
      },
    ]);

    // Check platform support for speech recognition
    const checkSpeechSupport = async () => {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent,
      );
      const isFirefox =
        navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

      if (
        isIOS ||
        isSafari ||
        isFirefox ||
        !("webkitSpeechRecognition" in window)
      ) {
        setIsSpeechSupported(false);
        setPlatformMessage(
          "Voice input is not supported in your browser. Please use Chrome or Edge for voice features, or continue with text input.",
        );
        setMicPermissionChecked(true);
      } else {
        setIsSpeechSupported(true);
        setMicPermissionChecked(true);
      }

      // Mark dashboard as ready after all checks
      setIsDashboardReady(true);
    };

    checkSpeechSupport();

    // Initialize speech recognition if supported
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;

      recognition.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        setInputText(transcript);
      };

      recognition.current.onerror = (event: SpeechRecognitionError) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
        if (event.error === "not-allowed") {
          setIsSpeechSupported(false);
          setPlatformMessage(
            "Microphone access was not enabled. Please enable microphone access so you can use speak to me.",
          );
        }
      };

      recognition.current.onend = () => {
        setIsListening(false);
      };
    }

    // Trigger mic animation
    const timer = setTimeout(() => setAnimateMic(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Adjust textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputText]);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleListening = async () => {
    if (!isSpeechSupported) {
      alert(platformMessage);
      return;
    }

    if (!recognition.current) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    try {
      if (!isListening) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        stream.getTracks().forEach((track) => track.stop());
        setMicPermissionDenied(false);
        recognition.current.start();
        setInputText("");
      } else {
        recognition.current.stop();
      }
      setIsListening(!isListening);
    } catch (error) {
      setMicPermissionDenied(true);
      setIsSpeechSupported(false);
      setPlatformMessage("Enable mic permissions to use this feature.");
    }
  };

  // Generate follow-up questions for cue cards
  const generateFollowUpQuestions = async (
    userMessage: string,
    aiResponse: string,
  ) => {
    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Based on this conversation:\nUser: ${userMessage}\nButler: ${aiResponse}\n\nGenerate 3 natural follow-up questions that the user might want to ask next. Make them specific to the context of the conversation. Return ONLY the questions, separated by ||| (three pipes).`,
          isFollowUp: true,
        }),
      });

      if (!res.ok) throw new Error("Failed to generate follow-up questions");

      const data = await res.json();
      const questions = data.response.split("|||").map((q: string) => q.trim());
      setCueCards(questions);
    } catch (error) {
      console.error("Error generating follow-up questions:", error);
      // Fallback to default cue cards
      setCueCards([
        "How do I stay safe online?",
        "Can you explain cloud storage?",
        "What's a good password strategy?",
      ]);
    }
  };

  // Function to save conversation
  const saveConversation = async () => {
    if (messages.length <= 1 || isSavingConversation) return; // Skip if only welcome message or already saving

    setIsSavingConversation(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const fullConversation = formatConversationForStorage(messages);
        const summary = await generateSummary(fullConversation);

        // console.log('Saving conversation:', {
        //   user_id: user.id,
        //   summary,
        //   full_conversation: fullConversation
        // });

        const { error } = await supabase.from("conversations").insert([
          {
            user_id: user.id,
            summary: summary,
            full_conversation: fullConversation,
            created_at: new Date().toISOString(),
          },
        ]);

        if (error) {
          console.error("Error saving conversation:", error);
          throw error;
        } else {
          // console.log('Conversation saved successfully');
        }
      }
    } catch (error) {
      console.error("Error saving conversation:", error);
    } finally {
      setIsSavingConversation(false);
    }
  };

  // Monitor session changes and save conversation when session ends
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_OUT" || (!session && messages.length > 1)) {
        // console.log('Session ended, saving conversation...');
        await saveConversation();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [messages]);

  // Save conversation periodically (every 5 minutes) as backup
  useEffect(() => {
    const saveInterval = setInterval(() => {
      if (messages.length > 1) {
        saveConversation();
      }
    }, 300000); // 5 minutes

    return () => clearInterval(saveInterval);
  }, [messages]);

  // Save conversation on component unmount
  useEffect(() => {
    return () => {
      if (messages.length > 1) {
        saveConversation();
      }
    };
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    // If currently listening, stop the microphone
    if (isListening) {
      recognition.current.stop();
      setIsListening(false);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
    };

    // Add loading message for Butler
    const loadingMessage: Message = {
      id: Date.now().toString() + "-loading",
      text: "...",
      sender: "butler",
      isLoading: true,
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
      loadingMessage,
    ]);
    setInputText("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputText }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("OpenAI API Error:", {
          status: res.status,
          statusText: res.statusText,
          error: data.error,
          details: data.details,
        });

        if (data.isLimitReached) {
          toast({
            variant: "destructive",
            title: "Request Limit Reached",
            description:
              "You have reached the maximum limit of 10 requests. Thank you for using Butler!",
          });
        }

        throw new Error(data.error || "Failed to get response");
      }

      // Update remaining requests
      if (typeof data.remainingRequests === "number") {
        setRemainingRequests(data.remainingRequests);

        // Show warning when getting low on requests
        if (data.remainingRequests <= 2) {
          toast({
            title: "Running Low on Requests",
            description: `You have ${data.remainingRequests} request${data.remainingRequests === 1 ? "" : "s"} remaining.`,
          });
        }
      }

      // Remove loading message and add Butler's response
      setMessages((prevMessages) => {
        const messages = prevMessages.filter((msg) => !msg.isLoading);
        return [
          ...messages,
          {
            id: Date.now().toString(),
            text: data.response,
            sender: "butler",
          },
        ];
      });

      // Generate follow-up questions
      await generateFollowUpQuestions(inputText, data.response);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => {
        const messages = prevMessages.filter((msg) => !msg.isLoading);
        return [
          ...messages,
          {
            id: Date.now().toString(),
            text: "I apologize, but I encountered an error. Please try again.",
            sender: "butler",
          },
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCueCardClick = (text: string) => {
    setInputText(text);
  };

  if (!isDashboardReady) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600"></div>
          <p className="text-lg text-gray-600">Loading your Butler...</p>
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div
        className={`mx-auto flex max-w-4xl flex-col p-4 md:p-8 ${messages.length === 1 ? "h-auto gap-4" : "h-[100vh]"}`}
      >
        {/* Welcome Header - only show when there's one message */}
        {messages.length === 1 && (
          <header className="mb-4 flex-none space-y-1">
            <h1 className="text-4xl font-bold text-gray-800">
              {greeting}, {initialName}
            </h1>
            <p className="text-2xl text-gray-600">
              What can I help with today?
            </p>
          </header>
        )}

        {/* Chat Messages Display - with ref for auto-scroll */}
        <div
          ref={chatContainerRef}
          className={`min-h-0 flex-1 space-y-3 overflow-y-auto pr-4 transition-colors scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 ${messages.length === 1 ? "max-h-[200px]" : ""}`}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#D1D5DB transparent",
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <Card
                className={`max-w-[70%] break-words p-3 ${
                  msg.sender === "user"
                    ? "rounded-br-none bg-blue-500 text-white"
                    : "rounded-bl-none bg-gray-200 text-gray-800"
                } rounded-xl`}
              >
                {msg.isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                ) : msg.sender === "butler" ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        // Override default element styling
                        p: ({ node, ...props }) => (
                          <p className="mb-2 last:mb-0" {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                          <ul className="mb-2 pl-4 last:mb-0" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol className="mb-2 pl-4 last:mb-0" {...props} />
                        ),
                        li: ({ node, ...props }) => (
                          <li className="mb-1 last:mb-0" {...props} />
                        ),
                        strong: ({ node, ...props }) => (
                          <strong className="font-semibold" {...props} />
                        ),
                        h1: ({ node, ...props }) => (
                          <h1 className="mb-2 text-lg font-bold" {...props} />
                        ),
                        h2: ({ node, ...props }) => (
                          <h2
                            className="mb-2 text-base font-semibold"
                            {...props}
                          />
                        ),
                        h3: ({ node, ...props }) => (
                          <h3
                            className="mb-2 text-sm font-semibold"
                            {...props}
                          />
                        ),
                        code: ({ node, ...props }) => (
                          <code
                            className="rounded bg-gray-100 px-1 py-0.5"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p>{msg.text}</p>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Section - reduced spacing */}
        <div className="mb-4 mt-4 flex-none space-y-4">
          {/* Cue Cards - reduced height */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {cueCards.map((cue, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto whitespace-normal px-4 py-3 text-left text-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                onClick={() => handleCueCardClick(cue)}
              >
                {cue}
              </Button>
            ))}
          </div>

          {/* Input Panel - reduced padding */}
          <Card className="bg-white p-4 shadow-lg">
            <div className="flex items-center space-x-4 w-full">
              <div className="flex flex-col  w-full">
                <div className="flex-1">
                  <Textarea
                    autoFocus={true}
                    ref={textareaRef}
                    value={inputText}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setInputText(e.target.value)
                    }
                    placeholder="Type here or press the microphone to speak..."
                    className="block max-h-[80px] min-h-[50px] w-full resize-none overflow-y-auto rounded-2xl border-none !bg-white p-3 text-base leading-4 focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:ring-0"
                    rows={1}
                    onKeyDown={(
                      e: React.KeyboardEvent<HTMLTextAreaElement>,
                    ) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                  />
                </div>
                <div className="flex flex-row">
                  <div className="group relative">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span>
                          <Button
                            onClick={toggleListening}
                            className={`rounded-full bg-transparent p-6 shadow-none ${animateMic ? "animate-bounce" : ""} ${
                              isListening
                                ? "text-red-500 hover:text-red-700"
                                : isSpeechSupported && !micPermissionDenied
                                  ? "text-gray-700 hover:bg-gray-700 hover:text-white"
                                  : "cursor-not-allowed text-gray-400 opacity-50"
                            }`}
                            disabled={!isSpeechSupported || micPermissionDenied}
                          >
                            {isListening ? (
                              <StopCircle className="!h-[1.8rem] !w-[1.8rem]" />
                            ) : (
                              <Mic className="!h-[1.8rem] !w-[1.8rem]" />
                            )}
                          </Button>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="text-black">
                        <p>
                          {!isSpeechSupported || micPermissionDenied
                            ? "Enable mic permissions to use this feature."
                            : isListening
                              ? "Stop"
                              : "Tell me what you need help with"}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="group relative">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span>
                          <Button
                            onClick={handleSend}
                            className={`rounded-full p-6 ${
                              inputText.trim()
                                ? "cursor-pointer text-gray-700 hover:bg-gray-700 hover:text-white"
                                : "cursor-not-allowed opacity-50"
                            }`}
                            disabled={!inputText.trim()}
                          >
                            <Send className="!h-[1.8rem] !w-[1.8rem]" />
                          </Button>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        {inputText.trim() ? (
                          <p>Send</p>
                        ) : (
                          <p>Please type a message to send</p>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Voice Feedback */}
        {isListening && (
          <div className="flex justify-center">
            <div className="flex animate-pulse items-center space-x-2 text-xl text-purple-600">
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex h-4 w-4 rounded-full bg-purple-500"></span>
              </span>
              <span>Listening... (Click stop to end message)</span>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}
