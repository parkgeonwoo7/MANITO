import { useState, useEffect } from 'react';
import NameStep from './components/NameStep';
import PreferenceStep from './components/PreferenceStep';
import GuessStep from './components/GuessStep';
import AnimationStep from './components/AnimationStep';
import ResultStep from './components/ResultStep';

type Step = 'name' | 'preference' | 'guess' | 'animation' | 'result';
type Preference = 1 | 2 | 3 | null;

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('name');
  const [name, setName] = useState('');
  const [preference, setPreference] = useState<Preference>(null);
  const [guess, setGuess] = useState('');
  const [nameError, setNameError] = useState('');

  // 세션 스토리지에서 상태 복원
  useEffect(() => {
    const savedName = sessionStorage.getItem('name') || '';
    const savedPreference = sessionStorage.getItem('preference');
    const savedGuess = sessionStorage.getItem('guess') || '';

    // 저장된 데이터에 따라 다음 단계로 이동
    if (savedGuess) {
      setCurrentStep('result');
    } else if (savedPreference) {
      setCurrentStep('guess');
    } else if (savedName) {
      setCurrentStep('preference');
    }
    
    if (savedName) {
      setName(savedName);
    }
    if (savedPreference) {
      setPreference(parseInt(savedPreference) as Preference);
    }
    if (savedGuess) {
      setGuess(savedGuess);
    }
  }, []);

  // 상태 변경 시 세션 스토리지에 저장
  useEffect(() => {
    if (name) {
      sessionStorage.setItem('name', name);
    }
  }, [name]);

  useEffect(() => {
    if (preference !== null) {
      sessionStorage.setItem('preference', preference.toString());
    }
  }, [preference]);

  useEffect(() => {
    if (guess) {
      sessionStorage.setItem('guess', guess);
    }
  }, [guess]);

  const handlePreferenceSelect = (pref: Preference) => {
    setPreference(pref);
    setTimeout(() => {
      setCurrentStep('guess');
    }, 300);
  };

  const handleRestart = () => {
    setCurrentStep('name');
    setName('');
    setPreference(null);
    setGuess('');
    setNameError('');
    
    // 세션 스토리지 초기화
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('preference');
    sessionStorage.removeItem('guess');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'name':
        return (
          <NameStep
            name={name}
            setName={setName}
            nameError={nameError}
            setNameError={setNameError}
            onNext={() => setCurrentStep('preference')}
          />
        );

      case 'preference':
        return (
          <PreferenceStep
            onSelect={handlePreferenceSelect}
          />
        );

      case 'guess':
        return (
          <GuessStep
            guess={guess}
            setGuess={setGuess}
            onSubmit={() => setCurrentStep('animation')}
          />
        );

      case 'animation':
        return (
          <AnimationStep
            onComplete={() => setCurrentStep('result')}
          />
        );

      case 'result':
        return (
          <ResultStep
            guess={guess}
            preference={preference}
            onRestart={handleRestart}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderStep()}
    </div>
  );
}

export default App;