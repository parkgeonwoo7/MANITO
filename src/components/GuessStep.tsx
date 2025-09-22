import { ChevronRight } from 'lucide-react';

interface GuessStepProps {
  guess: string;
  setGuess: (guess: string) => void;
  onSubmit: () => void;
}

export default function GuessStep({ guess, setGuess, onSubmit }: GuessStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          과연 당신의 마니또는 누구일까요? 🎭
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="마니또의 이름을 추측해보세요"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            autoFocus
          />
          
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center justify-center gap-2"
          >
            다음 <ChevronRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
