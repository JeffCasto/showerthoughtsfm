interface Props {
  mood: string;
  setMood: (m: string) => void;
}
const moods = [
  'Cosmic Dread',
  'Cozy Vibes',
  'Existential Spiral',
  'Slightly Baked',
  'Enlightenment Simulator',
];
export default function MoodSelector({ mood, setMood }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-xl">
      {moods.map((m) => (
        <button
          key={m}
          onClick={() => setMood(m)}
          className={`px-3 py-1 rounded-full border backdrop-blur-md ${
            mood === m ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'
          }`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}