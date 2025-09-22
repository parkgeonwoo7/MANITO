import { Heart, Coffee, Zap } from 'lucide-react';

type Preference = 1 | 2 | 3 | null;

interface PreferenceStepProps {
  onSelect: (preference: Preference) => void;
}

export default function PreferenceStep({ onSelect }: PreferenceStepProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          당신의 취향은 어떻게 되나요? ✨
        </h2>
        
        <div className="space-y-3">
          <button
            onClick={() => onSelect(1)}
            className="w-full p-4 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors text-left flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-pink-200 rounded-lg flex items-center justify-center group-hover:bg-pink-300 transition-colors">
              <Heart className="w-5 h-5 text-pink-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-800">초콜릿</div>
              <div className="text-sm text-gray-600">달콤함의 정수</div>
            </div>
          </button>
          
          <button
            onClick={() => onSelect(2)}
            className="w-full p-4 bg-amber-50 hover:bg-amber-100 rounded-xl transition-colors text-left flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-amber-200 rounded-lg flex items-center justify-center group-hover:bg-amber-300 transition-colors">
              <Coffee className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-800">커피</div>
              <div className="text-sm text-gray-600">활력의 원천</div>
            </div>
          </button>
          
          <button
            onClick={() => onSelect(3)}
            className="w-full p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors text-left flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center group-hover:bg-purple-300 transition-colors">
              <Zap className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-800">둘 다</div>
              <div className="text-sm text-gray-600">완벽한 조합</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
