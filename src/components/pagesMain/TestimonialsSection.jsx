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

  // Autoplay
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 px-6 bg-[#f8f5f0] text-[var(--second)]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
        <div className="w-20 h-1 bg-[var(--second)] mx-auto mb-12 rounded-full"></div>

        <Carousel className="w-full" setApi={setApi} opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-3 sm:-ml-4">
            {testimonials.map((t, index) => (
              <CarouselItem
                key={index}
                className="pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="p-5 sm:p-6 flex flex-col h-full text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={t.image}
                        alt={t.role}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base">{t.role}</h4>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base italic text-[var(--second)] leading-relaxed">
                      “{t.text}”
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
            <CarouselPrevious className="relative scale-90 sm:scale-100" />
            <CarouselNext className="relative scale-90 sm:scale-100" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;