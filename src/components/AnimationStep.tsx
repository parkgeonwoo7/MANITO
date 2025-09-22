import { useEffect } from 'react';

interface AnimationStepProps {
  onComplete: () => void;
}

export default function AnimationStep({ onComplete }: AnimationStepProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl text-center">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 animate-pulse leading-tight">
            흠... 과연? 🤨
          </h1>
        </div>
        
        <div className="flex justify-center items-center space-x-2 sm:space-x-3">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}
