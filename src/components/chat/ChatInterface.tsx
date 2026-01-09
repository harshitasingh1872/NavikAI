import { useState, useRef, useEffect } from "react";
import { Send, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { toast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  disclaimer?: string;
  legalAidContact?: string;
}

interface ChatInterfaceProps {
  isFullPage?: boolean;
}

export const ChatInterface = ({ isFullPage = false }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm NyayikAI, your legal assistance companion. How can I help you today?",
      isBot: true,
      disclaimer: "This is general information only and not legal advice. Consult a qualified advocate for your specific situation.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_NYAYIKAI_API_URL;

      if (!apiUrl) {
        throw new Error("API URL not configured");
      }

      const history = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({
          role: m.isBot ? "assistant" : "user",
          content: m.content,
        }));

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          history,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.reply,
        isBot: true,
        disclaimer: data.disclaimer,
        legalAidContact: data.legalAidContact,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I encountered an error. Please try again.",
        isBot: true,
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "welcome",
        content: "Hello! I'm NyayikAI, your legal assistance companion. How can I help you today?",
        isBot: true,
        disclaimer: "This is general information only and not legal advice. Consult a qualified advocate for your specific situation.",
      },
    ]);
    toast({
      title: "Chat cleared",
      description: "Your conversation has been reset.",
    });
  };

  const handleDownloadChat = () => {
    const chatText = messages
      .map((msg) => {
        const prefix = msg.isBot ? "NyayikAI" : "You";
        let text = `${prefix}: ${msg.content}`;
        if (msg.disclaimer) {
          text += `\n[Disclaimer: ${msg.disclaimer}]`;
        }
        if (msg.legalAidContact) {
          text += `\n[Contact: ${msg.legalAidContact}]`;
        }
        return text;
      })
      .join("\n\n");

    const blob = new Blob([chatText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nyayikai-chat-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Chat downloaded",
      description: "Your conversation has been saved.",
    });
  };

  return (
    <div className={`flex flex-col ${isFullPage ? "h-full" : "h-[500px]"}`}>
      <div className="flex items-center justify-between p-4 border-b border-border/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-lg font-bold text-accent">N</span>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">NyayikAI</h3>
            <p className="text-xs text-muted-foreground">Legal Assistant</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDownloadChat}
            disabled={messages.length <= 1}
            title="Download chat"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClearChat}
            disabled={messages.length <= 1}
            title="Clear chat"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-2"
      >
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            isBot={message.isBot}
            disclaimer={message.disclaimer}
            legalAidContact={message.legalAidContact}
          />
        ))}

        {isLoading && <TypingIndicator />}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-border/30">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask your legal question..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
            variant="hero"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          This is not legal advice. Consult a qualified advocate for your specific situation.
        </p>
      </div>
    </div>
  );
};
