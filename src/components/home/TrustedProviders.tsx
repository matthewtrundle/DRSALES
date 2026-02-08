import Section from '@/components/ui/Section';

const affiliations = [
  { name: 'Stanford University', abbr: 'STANFORD' },
  { name: 'Harvard Medical School', abbr: 'HARVARD' },
  { name: 'University of Iowa', abbr: 'IOWA' },
  { name: 'Brown University', abbr: 'BROWN' },
  { name: 'Tufts University', abbr: 'TUFTS' },
  { name: 'Weill Cornell', abbr: 'CORNELL' },
];

export default function TrustedProviders() {
  return (
    <Section background="light" className="py-12">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
          Training & Affiliations
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {affiliations.map((affiliation) => (
          <div
            key={affiliation.name}
            className="text-neutral-400 hover:text-primary transition-colors"
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
