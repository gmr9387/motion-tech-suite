 import { useState } from "react";
 import { Star } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Textarea } from "@/components/ui/textarea";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { useAuth } from "@/contexts/AuthContext";
 import { supabase } from "@/integrations/supabase/client";
 import { useToast } from "@/hooks/use-toast";
 import { cn } from "@/lib/utils";
 
 interface ReviewSubmissionFormProps {
   productHandle: string;
   onReviewSubmitted?: () => void;
 }
 
 export const ReviewSubmissionForm = ({ productHandle, onReviewSubmitted }: ReviewSubmissionFormProps) => {
   const { user } = useAuth();
   const { toast } = useToast();
   const [rating, setRating] = useState(0);
   const [hoverRating, setHoverRating] = useState(0);
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     
     if (!user) {
       toast({
         title: "Sign in required",
         description: "Please sign in to submit a review.",
         variant: "destructive",
       });
       return;
     }
 
     if (rating === 0) {
       toast({
         title: "Rating required",
         description: "Please select a star rating.",
         variant: "destructive",
       });
       return;
     }
 
     if (!title.trim() || !content.trim()) {
       toast({
         title: "Review incomplete",
         description: "Please provide both a title and review content.",
         variant: "destructive",
       });
       return;
     }
 
     setIsSubmitting(true);
 
     try {
       const { error } = await supabase.from("product_reviews").insert({
         user_id: user.id,
         product_handle: productHandle,
         rating,
         title: title.trim(),
         content: content.trim(),
       });
 
       if (error) throw error;
 
       toast({
         title: "Review submitted!",
         description: "Thank you for sharing your feedback.",
       });
 
       // Reset form
       setRating(0);
       setTitle("");
       setContent("");
       onReviewSubmitted?.();
     } catch (error) {
       console.error("Error submitting review:", error);
       toast({
         title: "Submission failed",
         description: "Could not submit your review. Please try again.",
         variant: "destructive",
       });
     } finally {
       setIsSubmitting(false);
     }
   };
 
   if (!user) {
     return (
       <div className="bg-muted/50 rounded-lg p-6 text-center">
         <p className="text-muted-foreground mb-3">Sign in to leave a review</p>
         <Button variant="outline" asChild>
           <a href="/auth">Sign In</a>
         </Button>
       </div>
     );
   }
 
   return (
     <form onSubmit={handleSubmit} className="space-y-4 bg-muted/30 rounded-lg p-6">
       <h4 className="font-semibold text-foreground">Write a Review</h4>
       
       {/* Star Rating */}
       <div>
         <Label className="text-sm text-muted-foreground mb-2 block">Your Rating</Label>
         <div className="flex gap-1">
           {[1, 2, 3, 4, 5].map((star) => (
             <button
               key={star}
               type="button"
               onClick={() => setRating(star)}
               onMouseEnter={() => setHoverRating(star)}
               onMouseLeave={() => setHoverRating(0)}
               className="p-1 transition-transform hover:scale-110"
             >
               <Star
                 className={cn(
                   "w-6 h-6 transition-colors",
                   (hoverRating || rating) >= star
                     ? "text-yellow-400 fill-yellow-400"
                     : "text-muted-foreground"
                 )}
               />
             </button>
           ))}
         </div>
       </div>
 
       {/* Review Title */}
       <div>
         <Label htmlFor="review-title" className="text-sm text-muted-foreground">
           Review Title
         </Label>
         <Input
           id="review-title"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           placeholder="Summarize your experience"
           maxLength={100}
           className="mt-1"
         />
       </div>
 
       {/* Review Content */}
       <div>
         <Label htmlFor="review-content" className="text-sm text-muted-foreground">
           Your Review
         </Label>
         <Textarea
           id="review-content"
           value={content}
           onChange={(e) => setContent(e.target.value)}
           placeholder="Share your thoughts about this product..."
           rows={4}
           maxLength={1000}
           className="mt-1"
         />
       </div>
 
       <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
         {isSubmitting ? "Submitting..." : "Submit Review"}
       </Button>
     </form>
   );
 };