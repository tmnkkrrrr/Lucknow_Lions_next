export default function LineWaveLoading() {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-2 h-12 bg-indigo-600 rounded-full animate-wave"
              style={{
                animation: 'wave 1s ease-in-out infinite',
                animationDelay: `${index * 0.1}s`
              }}
            />
          ))}
        </div>
        <style jsx>{`
          @keyframes wave {
            0%, 100% {
              transform: scaleY(1);
            }
            10% {
              transform: scaleY(0.5);
            }
            50% {
              transform: scaleY(0.6);
            }
          }
          .animate-wave {
            animation: wave 1s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  };