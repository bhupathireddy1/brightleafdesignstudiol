import { useEffect, useState, useRef } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';

const Stats = () => {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { value: 950, suffix: '+', label: 'Projects Completed' },
    { value: 180, suffix: '+', label: 'Happy Clients' },
    { value: 12, suffix: '+', label: 'Years Experience' },
    { value: 15, suffix: '', label: 'Design Awards' },
  ];

  useEffect(() => {
    if (isRevealed && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isRevealed, hasAnimated]);

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                  animate={hasAnimated}
                />
              </div>
              <p className="text-primary-foreground/80 font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface AnimatedNumberProps {
  target: number;
  suffix: string;
  animate: boolean;
}

const AnimatedNumber = ({ target, suffix, animate }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const frameRate = 30;
  const frames = duration / (1000 / frameRate);
  const increment = target / frames;

  useEffect(() => {
    if (!animate) {
      setCount(0);
      return;
    }

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [animate, target, increment]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default Stats;
