import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/app/data";

const TestimonialsSection = () => {
  const [api, setApi] = useState(null);

  // Setup autoplay effect
  useEffect(() => {
    if (!api) return;

    // Autoplay setup
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 px-6 bg-[#f8f5f0] text-[var(--second)]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
        <div className="w-20 h-1 bg-[var(--second)] mx-auto mb-12 rounded-full"></div>

        {/* Carousel */}
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-lg italic mb-6 text-[var(--second)]">
                      "{testimonial.text}"
                    </p>
                    <h4 className="font-bold text-xl mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-[var(--third)]">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-4">
            <CarouselPrevious className="mr-2" />
            <CarouselNext className="ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;