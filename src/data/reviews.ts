// Real five-star Google reviews from Dr. Sales' Google Business Profile.
// Reviews are displayed anonymously on the site (no reviewer names rendered).
// The `ref` field identifies the source review for maintenance only — never render it.
// Entries marked [PLACEHOLDER] could not be retrieved automatically; paste the
// review text from the Google Business Profile and remove the placeholder marker.

export interface Review {
  /** Internal reference to the source review — do not render */
  ref: string;
  quote: string;
  /** Shown under the quote, e.g. "Cataract Surgery · Connecticut" */
  context: string;
  placeholder?: boolean;
}

export const homepageReviews: Review[] = [
  {
    ref: 'Ed Mercadante',
    quote:
      'I had my cataract surgery with Dr. Sales in late May, and I am extremely pleased with the outcome. From my first consultation, he was exceptional at explaining the entire process.',
    context: 'Cataract Surgery · Connecticut',
  },
  {
    ref: 'Jon Sallade',
    quote:
      '[PLACEHOLDER — paste Jon Sallade’s Google review text here]',
    context: 'Google Review · New York',
    placeholder: true,
  },
  {
    ref: 'Zafira Azoulay',
    quote:
      '[PLACEHOLDER — paste Zafira Azoulay’s Google review text here]',
    context: 'Google Review · Iowa',
    placeholder: true,
  },
  {
    ref: 'Carol Rosenberg',
    quote:
      '[PLACEHOLDER — paste Carol Rosenberg’s Google review text here]',
    context: 'Google Review · Connecticut',
    placeholder: true,
  },
];

export const cataractReviews: Review[] = [
  {
    ref: 'Arthur Anderson',
    quote:
      "My experience with Dr. Sales was wonderful. His outstanding medical/surgical acumen is matched by his excellent interpersonal skills. Clearly, procedures involving one's eye(s) come with apprehension. Dr. Sales' skills and attention put those concerns to rest. I could not recommend anybody more highly.",
    context: 'Cataract Surgery',
  },
];

export const cornealTransplantReviews: Review[] = [
  {
    ref: 'Marji Watkins',
    quote:
      "Dr. Sales is the absolute BEST at what he does. He gave me two new corneas in flawless surgeries to repair Fuchs. I recommend him whole-heartedly for ANY eye problem. Like I said, he's the BEST!",
    context: 'DMEK · Fuchs’ Dystrophy',
  },
  {
    ref: 'Ronald Reader',
    quote:
      '[PLACEHOLDER — paste Ronald Reader’s Google review text here]',
    context: 'DMEK',
    placeholder: true,
  },
  {
    ref: 'Andrea (Andria)',
    quote:
      "I can't recommend Dr. Sales highly enough. He's obviously brilliant, but still down to earth and relatable. I can't say having a superficial keratectomy (SK) is a fun recovery, but he was empathetic and the recovery is fast.",
    context: 'Corneal Surgery',
  },
];

export const iclReviews: Review[] = [
  {
    ref: 'David Birr',
    quote:
      "I've worn glasses or contacts every day of my life since I was 5 years old and have been looking into correcting my vision for the past 15 years. I have started and stopped the process several times before I connected with Dr. Sales.",
    context: 'Vision Correction',
  },
];

export const dryEyeReviews: Review[] = [
  {
    ref: 'Heidi Paradysz',
    quote:
      '[PLACEHOLDER — paste Heidi Paradysz’s Google review text here]',
    context: 'Dry Eye Treatment',
    placeholder: true,
  },
];
