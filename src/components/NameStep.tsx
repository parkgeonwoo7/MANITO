import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NameStepProps {
  name: string;
  setName: (name: string) => void;
  nameError: string;
  setNameError: (error: string) => void;
  onNext: () => void;
}

export default function NameStep({ name, setName, nameError, setNameError, onNext }: NameStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    
    if (trimmedName === '권서연' || trimmedName === '서연') {
      setNameError('');
      onNext();
    } else {
      setNameError('올바른 이름을 입력해주세요.');
      setName('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
          당신의 이름이 무엇인가요? 🤔
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError('');
            }}
            placeholder="이름을 입력해주세요"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            autoFocus
          />
          
          {nameError && (
            <p className="text-red-500 text-sm animate-shake text-center">{nameError}</p>
          )}
          
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
