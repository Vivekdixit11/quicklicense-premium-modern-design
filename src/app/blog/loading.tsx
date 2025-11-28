export default function BlogLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1d1e22] via-[#393f4d] to-[#1d1e22]">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#feda6a] mb-4"></div>
        <p className="text-[#d4d4dc] text-lg">Loading blog articles...</p>
      </div>
    </div>
  );
}

