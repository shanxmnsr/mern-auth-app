function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        w-full
        bg-white/50
        backdrop-blur-xl
        sm:backdrop-blur-2xl

        border
        border-white/40

        shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        sm:shadow-[0_20px_50px_rgba(0,0,0,0.08)]

        rounded-2xl
        sm:rounded-3xl

        p-5
        sm:p-6
        lg:p-8

        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default GlassCard;