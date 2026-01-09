import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = false, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-2xl border border-border/30 p-6",
          "bg-gradient-to-br from-muted/40 to-muted/20",
          "backdrop-blur-xl",
          "shadow-lg",
          hover && "transition-all duration-500 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1",
          glow && "shadow-accent/20",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
