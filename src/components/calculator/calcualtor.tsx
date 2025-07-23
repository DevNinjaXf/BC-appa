"use client";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import Image from "next/image";

const Calculator = () => {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const counterData = useMemo(
    () => [
      {
        value: "1500+",
        title: "App visit's every months",
      },
      {
        value: "10k+",
        title: "Total download's",
      },
      {
        value: "4500+",
        title: "Active App Users",
      },
      {
        value: "4.5",
        title: "Reviews and Rating.",
      },
    ],
    []
  );

  const getNumericValue = (value: string) => {
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  const getSuffix = (value: string) => {
    return value.replace(/[0-9.]/g, "") || "";
  };

  const startCounters = useCallback(() => {
    const targetValues = counterData.map((item) => getNumericValue(item.value));
    const isDecimal = counterData.map((item) => item.value.includes("."));
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        const progress = currentStep / steps;
        setCounters(
          targetValues.map((target, i) => {
            const value = target * progress;
            return isDecimal[i]
              ? parseFloat(value.toFixed(1))
              : Math.floor(value);
          })
        );
      } else {
        setCounters(targetValues);
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }
    }, stepTime);
  }, [counterData]);

  useEffect(() => {
    const currentRef = statsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounters();
        } else {
          setCounters([0, 0, 0, 0]);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [counterData, startCounters]);

  return (
    <div className="relative w-full max-w-[1450px] mx-auto rounded-[30px] overflow-hidden shadow-xl font-[Urbanist]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/counter-image.png"
          alt="Background"
          fill
          className="rounded-[30px] object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4 py-10 lg:py-16">
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {counterData.map((item, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center justify-center p-4 sm:p-6"
            >
              <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight tracking-[0.2px] text-white mb-2">
                {counters[index]}
                {getSuffix(item.value)}
              </h1>
              <h5 className="font-medium text-xs xs:text-sm sm:text-base leading-5 sm:leading-6 tracking-[0.1px] text-white/90 whitespace-nowrap">
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
