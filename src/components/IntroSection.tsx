
'use client';

import { resumeData } from '@/data/resume';

const IntroSection = () => {
  const { personalInfo } = resumeData;

  return (
    <section className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <h1 className="text-[2.5rem] font-semibold leading-[1.05] tracking-normal text-[var(--foreground)] sm:text-5xl">
          {personalInfo.name}
        </h1>
        <p className="max-w-[620px] text-base leading-7 text-[var(--muted)] sm:text-lg">
          Building production-ready TypeScript apps and shipping open-source work across real projects.
        </p>
      </div>

      <nav aria-label="Profile links" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--foreground)] underline decoration-[var(--line)] transition-colors hover:text-[var(--accent)]"
        >
          GitHub
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--foreground)] underline decoration-[var(--line)] transition-colors hover:text-[var(--accent)]"
        >
          LinkedIn
        </a>
        <a
          href={personalInfo.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--foreground)] underline decoration-[var(--line)] transition-colors hover:text-[var(--accent)]"
        >
          X
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="font-medium text-[var(--foreground)] underline decoration-[var(--line)] transition-colors hover:text-[var(--accent)]"
        >
          Email
        </a>
      </nav>
    </section>
  );
}

export default IntroSection;
