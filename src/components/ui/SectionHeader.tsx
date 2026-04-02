type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
        {description}
      </p>
    </div>
  );
}
