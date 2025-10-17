'use client';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title,
        url,
      }).catch((error) => {
        // User cancelled or error occurred
        console.log('Share cancelled or failed:', error);
      });
    }
  };

  return (
    <div className="border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">
          このエピソードをシェア
        </h3>
        <div className="flex justify-center space-x-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1DA1F2] text-white px-6 py-3 rounded-lg hover:bg-[#1a8cd8] transition-colors"
          >
            𝕏でシェア
          </a>
          <button
            onClick={handleShare}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            シェア
          </button>
        </div>
      </div>
    </div>
  );
}
