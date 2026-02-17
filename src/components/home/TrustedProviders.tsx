import Section from '@/components/ui/Section';

const affiliations = [
  { name: 'Stanford University', abbr: 'Stanford' },
  { name: 'Harvard Medical School', abbr: 'Harvard' },
  { name: 'University of Iowa', abbr: 'Iowa' },
  { name: 'Brown University', abbr: 'Brown' },
  { name: 'Tufts University', abbr: 'Tufts' },
  { name: 'Weill Cornell', abbr: 'Cornell' },
];

export default function TrustedProviders() {
  return (
    <Section background="light" className="py-12">
      <div className="text-center mb-8">
        <p className="font-display text-sm font-semibold text-charcoal tracking-wide">
          Training &amp; Affiliations
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {affiliations.map((affiliation) => (
          <div
            key={affiliation.name}
            className="text-neutral-400 hover:text-gold transition-colors duration-300"
            title={affiliation.name}
          >
            <span className="text-lg md:text-xl font-display font-semibold tracking-wider">
              {affiliation.abbr}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
