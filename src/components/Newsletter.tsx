import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubmitted(true);
      toast.success("Welcome to the RioShop family!");
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-2xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold">
          Stay in the Loop
        </h2>
        <p className="text-muted-foreground text-lg">
          Get exclusive deals, new product drops, and insider tech tips delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12"
            disabled={isSubmitted}
          />
          <Button 
            type="submit" 
            size="lg" 
            className="h-12 px-8"
            disabled={isSubmitted}
          >
            {isSubmitted ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Subscribed!
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};
