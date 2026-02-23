import { MapPin } from "lucide-react";

export const OrbitCountdown = () => {
  const progress = 65;
  const radius = 47;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const dotRotation = (progress / 100) * 360;

  return (
    /* Container Sizes: XS: 220px | SM: 250px | MD: 300px | LG+: 320px */
    <div className="relative h-[220px] w-[220px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] lg:h-[320px] lg:w-[320px] flex items-center justify-center transition-all duration-500">
      
      {/* Background Outer Ring - Scale disesuaikan agar tidak terlalu jauh */}
      <div className="absolute inset-0 rounded-full border border-primary/10 scale-[1.05]"></div>

      {/* Progress SVG Ring */}
      <svg
        className="absolute h-full w-full -rotate-90 transform"
        viewBox="0 0 100 100"
      >
        {/* Track Circle */}
        <circle
          className="text-white/5"
          cx="50" cy="50" r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="0.5"
        />

        {/* Progress Circle (Garis Kuning) */}
        <circle
          className="text-primary transition-all duration-1000 ease-linear animate-pulse-gold"
          cx="50" cy="50" r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />

        {/* ORBIT DOT */}
        <g transform={`rotate(${dotRotation} 50 50)`} className="transition-transform duration-1000">
          <circle
            cx={50 + radius}
            cy="50"
            r="2.5"
            fill="#D4AF37"
            style={{ filter: "drop-shadow(0 0 6px rgba(212, 175, 55, 1))" }}
          />
          <circle cx={50 + radius} cy="50" r="1" fill="white" />
        </g>
      </svg>

      {/* Glass Inner Content */}
      <div className="absolute h-[85%] w-[85%] rounded-full flex flex-col items-center justify-center text-center border border-white/10 bg-white/[0.03] backdrop-blur-[12px] sm:backdrop-blur-[15px] p-2">
        
        {/* Label Atas - Ukuran dikecilkan */}
        <div className="mb-2 sm:mb-3 md:mb-4 flex flex-col items-center">
          <span className="inline-block px-2 py-0.5 sm:px-3 rounded-full bg-primary/10 border border-primary/20 text-[7px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-1 font-bold whitespace-nowrap">
            Time Until Iftar
          </span>
          <div className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        </div>

        {/* Timer Display - Ukuran Font di-adjust secara presisi */}
        <div className="flex items-baseline gap-1 sm:gap-1.5 md:gap-2 text-white">
          <div className="flex flex-col items-center font-serif gap-0.5">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">04</span>
            <span className="text-[6px] sm:text-[8px] uppercase tracking-widest text-slate-400 font-bold">Hrs</span>
          </div>
          
          <span className="font-serif text-lg sm:text-2xl md:text-3xl font-light text-primary/30">:</span>
          
          <div className="flex flex-col items-center font-serif gap-0.5">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">22</span>
            <span className="text-[6px] sm:text-[8px] uppercase tracking-widest text-slate-400 font-bold">Min</span>
          </div>
          
          <span className="font-serif text-lg sm:text-2xl md:text-3xl font-light text-primary/30">:</span>
          
          <div className="flex flex-col items-center font-serif gap-0.5">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary">15</span>
            <span className="text-[6px] sm:text-[8px] uppercase tracking-widest text-slate-400 font-bold">Sec</span>
          </div>
        </div>

        {/* Location Tag - Diposisikan lebih dekat agar muat */}
        <div className="mt-3 sm:mt-5 md:mt-6 flex flex-col items-center">
          <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/5">
            <MapPin size={8} className="text-primary sm:w-[12px] sm:h-[12px]" />
            <span className="text-[6px] sm:text-[8px] tracking-[0.1em] text-slate-300 uppercase font-semibold whitespace-nowrap">
              Dubai • UAE
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};