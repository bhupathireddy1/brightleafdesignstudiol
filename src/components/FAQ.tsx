import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import useScrollReveal from '@/hooks/useScrollReveal';

const FAQ = () => {
  const { ref, isRevealed } = useScrollReveal();

  const faqs = [
    {
      question: 'How long does a typical interior design project take?',
      answer:
        'The timeline varies based on project scope. A single room makeover typically takes 4-6 weeks, while a complete home renovation may take 3-6 months. We provide detailed timelines during our initial consultation.',
    },
    {
      question: 'What is your design process?',
      answer:
        'Our process includes: Initial consultation, concept development, 3D visualization, material selection, project execution, and final styling. We keep you involved at every stage to ensure your vision comes to life.',
    },
    {
      question: 'Do you offer free consultations?',
      answer:
        'Yes! We offer a complimentary 30-minute consultation where we discuss your project requirements, style preferences, and budget. This helps us understand your needs before providing a detailed proposal.',
    },
    {
      question: 'What areas in Hyderabad do you serve?',
      answer:
        'We serve all areas of Hyderabad including Jubilee Hills, Banjara Hills, Gachibowli, Kondapur, Madhapur, Hitech City, and surrounding regions in Telangana.',
    },
    {
      question: 'How do you handle project budgets?',
      answer:
        'We work with a wide range of budgets. During our consultation, we discuss your budget openly and design solutions that maximize value while achieving your aesthetic goals. We provide transparent pricing with no hidden costs.',
    },
    {
      question: 'Can you work with existing furniture and decor?',
      answer:
        'Absolutely! We can incorporate your existing pieces into the new design. Our team excels at blending old favorites with new elements to create a cohesive, personalized space.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">
              FAQ
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our interior design services.
            </p>
          </div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
