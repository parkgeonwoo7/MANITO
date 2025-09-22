import { useState } from 'react';
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