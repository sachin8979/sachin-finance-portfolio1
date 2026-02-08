export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#0A0F1F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-10">
          {children}
        </div>
      </div>
    </div>
  );
}
