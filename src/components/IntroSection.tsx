
'use client';

import { resumeData } from '@/data/resume';

const IntroSection = () => {
  // Safe name splitting with fallbacks
  const nameParts = resumeData.personalInfo.name.split(' ');
  const firstName = nameParts[0] || 'Ashutosh';
  const lastName = nameParts[1] || 'Sao';

  return (
    <section className="w-full bg-slate-950 flex flex-col items-center justify-center py-12 md:py-32 p-6 relative selection:bg-[#a87cc3]/30">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#5a3e7a]/20 via-slate-950 to-slate-950" />

      <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center gap-8">
        
        {/* Top Label */}
        <h2 className="font-display text-[#a87cc3] tracking-[0.3em] text-xs lg:text-sm uppercase font-semibold h-6">
           Full Stack Engineer
        </h2>

        {/* Main Title - Massive Typography */}
        <h1 className="font-serif font-bold tracking-tight leading-none text-white break-words w-full">
          <span className="block text-6xl md:text-8xl lg:text-9xl mb-2">
            {firstName}
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-[#d9a9e6] via-[#a87cc3] to-[#7e5aa2]">
             {lastName}
          </span>
        </h1>

        {/* Divider */}
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#a87cc3]/50 to-transparent my-4" />

        {/* Catchy Tagline & Stats */}
        <div className="flex flex-col items-center gap-6">
            <p className="text-slate-300 text-lg md:text-xl font-light tracking-wide max-w-2xl px-4">
                Full-stack developer building <span className="text-white font-medium">production-ready applications</span> and contributing to <span className="text-[#a87cc3]">major open-source projects</span>.
            </p>

        </div>
      </div>
    </section>
  );
}

export default IntroSection;

