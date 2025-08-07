export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-4 mt-10 animate-steam text-white">
      <img src="/logo.svg" alt="ShowerThoughtsFM Logo" className="w-48 h-48" />
      <h2 className="text-xl md:text-2xl font-light max-w-md">
        <span className="font-semibold">AI reads Reddit’s dumbest thoughts</span>
        &nbsp;like they’re sacred truths.
      </h2>
    </section>
  );
}