"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Send, StopCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
}

export function DashboardClient({ initialName }: DashboardClientProps) {
  const [isListening, setIsListening] = useState(false);
  const [inputText, setInputText] = useState("");
  const [greeting, setGreeting] = useState("Good morning");
  const [isSpeechSupported, setIsSpeechSupported] = useState(true);
  const [platformMessage, setPlatformMessage] = useState("");
  const [cueCards, setCueCards] = useState([
    "What's on the news?",
    "I want to search for an email",
    "How do I video call my daughter?"
  ]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [animateMic, setAnimateMic] = useState(true);

  // Speech recognition setup
  const recognition = useRef<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");

    // Check platform support for speech recognition
    const checkSpeechSupport = () => {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      
      if (isIOS) {
        setIsSpeechSupported(false);
        setPlatformMessage("Voice input is not supported on iOS devices. iOS integration coming soon. Please use text input for now.");
      } else if (isSafari) {
        setIsSpeechSupported(false);
        setPlatformMessage("Voice input is not supported in Safari. Please use Chrome or Edge browser, or continue with text input.");
      } else if (isFirefox) {
        setIsSpeechSupported(false);
        setPlatformMessage("Voice input is not supported in Firefox. Please use Chrome or Edge browser, or continue with text input.");
      } else if (!('webkitSpeechRecognition' in window)) {
        setIsSpeechSupported(false);
        setPlatformMessage("Voice input is not supported in your browser. Please use Chrome or Edge for voice features, or continue with text input.");
      }
    };

    checkSpeechSupport();

    // Initialize speech recognition if supported
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;

      recognition.current.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        setInputText(transcript);
      };

      recognition.current.onerror = (event: SpeechRecognitionError) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setIsSpeechSupported(false);
          setPlatformMessage("Microphone access was not enabled. Please enable microphone access so you can use speak to me.");
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

  const toggleListening = () => {
    if (!isSpeechSupported) {
      alert(platformMessage);
      return;
    }

    if (!recognition.current) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    if (isListening) {
      recognition.current.stop();
    } else {
      recognition.current.start();
      setInputText("");
    }
    setIsListening(!isListening);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Simulate Butler response
    setTimeout(() => {
      const butlerResponse: Message = {
        id: Date.now().toString() + "-butler",
        text: `This is a sample response to: "${inputText}"`,
        sender: "butler",
      };
      setMessages((prevMessages) => [...prevMessages, butlerResponse]);
    }, 1000);
    
    // Update cue cards based on the input
    if (inputText.toLowerCase().includes("weather")) {
      setCueCards([
        "What about tomorrow?",
        "Should I carry an umbrella?",
        "What's the temperature like?"
      ]);
    }
    
    setInputText("");
  };

  const handleCueCardClick = (text: string) => {
    setInputText(text);
  };

  return (
    <TooltipProvider>
      <div className="max-w-4xl mx-auto space-y-12 pt-8 pb-16">
        {/* Welcome Header */}
        <header className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-800">
            {greeting}, {initialName} 
          </h1>
          <p className="text-2xl text-gray-600">What can I help with today?</p>
        </header>

        {/* Chat Messages Display */}
        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <Card
                className={`p-3 max-w-[70%] break-words ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                } rounded-xl`}
              >
                {msg.text}
              </Card>
            </div>
          ))}
        </div>

        {/* Central Input Panel */}
        <Card className="p-8 sticky bottom-0 bg-white shadow-lg">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <Textarea
                ref={textareaRef}
                value={inputText}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value)}
                placeholder="Ask here or press the microphone to speak..."
                className="text-xl p-6 rounded-2xl min-h-[68px] max-h-[200px] resize-none overflow-y-auto"
                style={{ fontSize: "1.25rem" }}
                rows={1}
                onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
            </div>
            <div className="relative group">
              <Button
                onClick={toggleListening}
                className={`p-6 text-black ${
                  animateMic ? 'animate-pulse' : ''
                } ${
                  isListening 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : isSpeechSupported 
                      ? 'hover:bg-gray-800 hover:text-white'  
                      : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={!isSpeechSupported}
              >
                {isListening ? (
                  <StopCircle className="!h-[1.8rem] !w-[1.8rem]" />
                ) : (
                  <Mic className="!h-[1.8rem] !w-[1.8rem]" />
                )}
              </Button>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="absolute inset-0"></span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {isSpeechSupported 
                      ? isListening 
                        ? "Stop" 
                        : "Tell me what you need help with"
                      : platformMessage
                    }
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="relative group">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleSend}
                    className="p-6 text-black hover:bg-gray-800 hover:text-white"
                    disabled={!inputText.trim()}
                  >
                    <Send className="!h-[1.8rem] !w-[1.8rem]" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {inputText.trim() ? <p>Send</p> : <p>Please type a message to send</p>}
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </Card>

        {/* Voice Feedback */}
        {isListening && (
          <div className="flex justify-center">
            <div className="animate-pulse flex items-center space-x-2 text-xl text-purple-600">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-500"></span>
              </span>
              <span>Listening... (Click stop to end message)</span>
            </div>
          </div>
        )}

        {/* Cue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cueCards.map((cue, index) => (
            <Button
              key={index}
              variant="outline"
              className="p-6 text-lg text-left h-auto whitespace-normal"
              onClick={() => handleCueCardClick(cue)}
            >
              {cue}
            </Button>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}