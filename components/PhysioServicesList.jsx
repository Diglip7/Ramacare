import Link from 'next/link';

export default function PhysioServicesList({ content }) {
  if (!content?.items?.length) return null;
  return (
    <section id="more-physiotherapy-services" className="py-16 bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#111827] text-center mb-4">{content.title}</h2>
        <p className="text-[#4B5563] text-center max-w-3xl mx-auto mb-10">{content.intro}</p>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => (
            <li key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8E3D8]">
              <h3 className="text-lg font-semibold text-[#1E5A3C] mb-2">
                {item.href ? <Link href={item.href} className="hover:underline">{item.title}</Link> : item.title}
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}