'use client';

export default function BackgroundFx() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Soft gradient blobs */}
      <div className="absolute -top-40 -left-32 w-[42rem] h-[42rem] rounded-full bg-[#00a651]/10 dark:bg-[#00a651]/15 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] rounded-full bg-[#f36523]/10 dark:bg-[#f36523]/15 blur-3xl animate-blob"
        style={{ animationDelay: '-7s' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[32rem] h-[32rem] rounded-full bg-emerald-200/30 dark:bg-emerald-900/20 blur-3xl animate-blob"
        style={{ animationDelay: '-13s' }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-60 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    </div>
  );
}
