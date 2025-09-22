type Preference = 1 | 2 | 3 | null;

interface ResultStepProps {
  guess: string;
  preference: Preference;
  onRestart: () => void;
}

export default function ResultStep({ preference }: ResultStepProps) {
  const getResultMessage = () => {
    switch (preference) {
      case 1:
        return "당신은... 초콜릿을 좋아하는 달콤한 사람이군요! 🍫";
      case 2:
        return "당신은... 커피를 사랑하는 활기찬 사람이네요! ☕";
      case 3:
        return "당신은... 초콜릿과 커피 둘 다 좋아하는 욕심쟁이(?)네요! 🍫☕";
    }
  };

  const getImages = () => {
    switch (preference) {
      case 1:
        return ["/Chocolate.jpg"];
      case 2:
        return ["/Coffee.jpg"];
      case 3:
        return ["/Chocolate.jpg", "/Coffee.jpg"]; // 둘 다 선택한 경우 두 이미지 모두
    }
  };

  const handleDownload = (imageSrc: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const images = getImages();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        <div className="space-y-8">
          {/* 결과 메시지 섹션 */}
          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              {getResultMessage()}
            </p>
          </div>
          
          {/* 기프티콘 섹션 */}
          <div className={`grid gap-6 ${images?.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
            {images?.map((imageSrc, index) => (
              <div key={index} className="group relative">
                <img 
                  src={imageSrc} 
                  alt={`Gift Card ${index + 1}`} 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <button
                    onClick={() => handleDownload(imageSrc, `giftcard_${preference === 1 ? 'chocolate' : preference === 2 ? 'coffee' : index === 0 ? 'chocolate' : 'coffee'}.jpg`)}
                    className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 py-3 px-6 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition-all duration-300"
                  >
                    다운로드
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
