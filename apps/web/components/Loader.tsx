'use client';

export function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray/90">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
        <p className="text-white text-xl font-medium">로딩 중</p>
      </div>
    </div>
  );
}
