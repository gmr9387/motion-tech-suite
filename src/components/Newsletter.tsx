import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.string().email("Please enter a valid email address").max(255);

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setIsLoading(true);
    
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: email.toLowerCase().trim() });
    
    setIsLoading(false);

    if (error) {
      if (error.code === '23505') {
        toast.info("You're already subscribed! Thanks for your enthusiasm.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      return;
    }
    
    setIsSubmitted(true);
    toast.success("Welcome to the RioShop family!");
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
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
            disabled={isSubmitted || isLoading}
          />
          <Button 
            type="submit" 
            size="lg" 
            className="h-12 px-8"
            disabled={isSubmitted || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : isSubmitted ? (
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
