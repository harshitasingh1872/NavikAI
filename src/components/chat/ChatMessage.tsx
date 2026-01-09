import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  disclaimer?: string;
  legalAidContact?: string;
}

export const ChatMessage = ({ content, isBot, disclaimer, legalAidContact }: ChatMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex gap-3 mb-4",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
          <Bot className="h-5 w-5 text-accent" />
        </div>
      )}

      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3 break-words",
        isBot
          ? "bg-muted/50 text-foreground rounded-tl-none"
          : "bg-accent text-accent-foreground rounded-tr-none"
      )}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>

        {isBot && disclaimer && (
          <div className="mt-3 pt-3 border-t border-border/30">
            <p className="text-xs text-muted-foreground italic">{disclaimer}</p>
          </div>
        )}

        {isBot && legalAidContact && (
          <div className="mt-3 pt-3 border-t border-border/30">
            <p className="text-xs text-muted-foreground">
              Need further assistance? Contact:{" "}
              <a
                href={`mailto:${legalAidContact}`}
                className="text-accent hover:underline font-medium"
              >
                {legalAidContact}
              </a>
            </p>
          </div>
        )}
      </div>

      {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <User className="h-5 w-5 text-primary" />
        </div>
      )}
    </motion.div>
  );
};
