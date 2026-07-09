// Real five-star Google reviews from Dr. Sales' Google Business Profile.
// Reviews are displayed anonymously on the site (no reviewer names rendered).
// The `ref` field identifies the source review for maintenance only — never render it.

export interface Review {
  /** Internal reference to the source review — do not render */
  ref: string;
  quote: string;
  /** Shown under the quote, e.g. "Cataract Surgery · Connecticut" */
  context: string;
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
      'I saw Dr. Sales for scratched cornea. He was very thorough in explaining exactly what had happened and how to correct the problem. He followed up later to make sure I was clear on the treatment plan and was super patient with my irrational fear of people touching my eyes. 10/10 experience.',
    context: 'Corneal Care',
  },
  {
    ref: 'Zaphira Azoulay',
    quote:
      'Dr. Sales is an excellent doctor in many respects—vast knowledge and surgical experience in his field, warm and friendly attitude towards his patients. He gives complete explanations to all questions and is always accessible.',
    context: 'Comprehensive Eye Care',
  },
  {
    ref: 'Carol Rosenberg',
    quote:
      "Dr. Sales is by far the best doctor I have ever been privileged to be treated by. He is absolutely brilliant, compassionate & patient. He explains everything fully and makes sure you understand. I have 100% trust in his opinion. I don't say that about many doctors.",
    context: 'Patient Experience',
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
      "I struggled with Fuchs' disease for 20 years and have had the good fortune of meeting and having Dr. Sales perform DMEK on my right eye. It has been a painless procedure that has resulted in perfect crystal clear vision within 8 days.",
    context: 'DMEK · Fuchs’ Dystrophy',
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
      'Dr. Sales is an incredible person in general! By far the most thorough eye doctor we have ever seen. Dr. Sales is an outstanding doctor, who would be great for any eye care, especially the difficult ones like my fiancé has. He explains things very well and always allows time for questions or concerns.',
    context: 'Dry Eye Treatment',
  },
];
