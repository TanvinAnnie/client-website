interface SectionTitleProps {
  subtitle: string;
  title: string;
  description: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {/* Subtitle */}

      <div className="mb-6 flex items-center justify-center gap-4">
        <span className="h-[2px] w-12 bg-[#D96C2C]" />

        <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D96C2C]">
          {subtitle}
        </p>

        <span className="h-[2px] w-12 bg-[#D96C2C]" />
      </div>

      {/* Title */}

      <h2 className="mb-6 text-4xl font-bold uppercase leading-tight text-white md:text-5xl">
        {title}
      </h2>

      {/* Description */}

      <p className="mx-auto max-w-2xl text-base leading-8 text-gray-300">
        {description}
      </p>
    </div>
  );
}