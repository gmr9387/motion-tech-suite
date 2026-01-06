import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secured with SSL encryption."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 business days) is available for an additional fee. Free shipping on orders over $50."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unused items in original packaging. Simply contact our support team to initiate a return."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship to the United States and Canada. International shipping to other countries is coming soon."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive an email with a tracking number. You can use this to track your package on our website or the carrier's site."
  },
  {
    question: "Are your products covered by warranty?",
    answer: "Yes, all RioShop products come with a 1-year manufacturer warranty covering defects in materials and workmanship."
  },
  {
    question: "Can I cancel or modify my order?",
    answer: "Orders can be cancelled or modified within 1 hour of placing them. After that, please contact support and we'll do our best to help."
  },
  {
    question: "Do you offer bulk or wholesale pricing?",
    answer: "Yes! For bulk orders of 10+ items, please contact us at support@rioshop.com for special pricing."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="FAQ - Frequently Asked Questions"
        description="Find answers to common questions about shipping, returns, payments, and more at RioShop."
      />
      <Header
        onCategorySelect={() => {}}
        selectedCategory="All"
        searchQuery=""
        onSearchChange={() => {}}
      />

      <main className="flex-1 py-12 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-6 bg-muted rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
            <p className="text-muted-foreground mb-4">
              Our support team is here to help.
            </p>
            <Link to="/contact">
              <Button>Contact Support</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
