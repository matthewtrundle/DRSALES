'use client';

import { useState } from 'react';

const fuchsFAQs = [
  {
    question: "What is Fuchs' dystrophy?",
    answer: "Fuchs' dystrophy is a slowly progressive disease of the cornea — the clear window at the front of the eye. It affects the corneal endothelium, the inner layer of cells that pumps excess fluid out of the cornea to keep it clear. When these cells stop working properly, light-scattering bumps develop on the endothelium and fluid builds up in the cornea, causing swelling and blurry vision.",
  },
  {
    question: "What symptoms does Fuchs' dystrophy cause?",
    answer: "Early in the disease, patients may notice glare, halos, or starbursts around lights; reduced contrast or washed-out colors; and blurry or hazy vision. As the disease progresses and swelling develops, vision may be blurrier in the morning and clearer later in the day. Only in very advanced stages does corneal swelling cause painful blisters on the surface of the eye.",
  },
  {
    question: "Why does Fuchs' dystrophy affect vision?",
    answer: "In Fuchs', abnormal bumps called guttata form on the inner surface of the cornea. These irregularities scatter light — similar to frosted glass — which reduces visual clarity. In addition to these guttata, the loss of endothelial cells leads to fluid buildup and corneal swelling, which further blurs vision.",
  },
  {
    question: "Is Fuchs' dystrophy inherited?",
    answer: "Sometimes. Fuchs' dystrophy can run in families, but not everyone with the disease has an affected relative. Because genetics can play a role, some patients choose to have close family members examined for early signs of the condition.",
  },
  {
    question: "Is Fuchs' dystrophy an emergency?",
    answer: "No. Although the diagnosis can be concerning, Fuchs' dystrophy typically progresses very slowly over many years. Most people first notice symptoms in their 50s, and there is usually plenty of time to monitor the condition and decide when treatment is appropriate.",
  },
  {
    question: "How is Fuchs' different from cataracts?",
    answer: "Fuchs' affects the cornea, while cataracts affect the lens inside the eye. Both conditions can cause similar symptoms such as glare, washed-out colors, and blurred vision. Because they often occur together — especially after age 50 — your eye doctor may need to determine which condition is contributing most to your symptoms.",
  },
  {
    question: "Are there non-surgical treatments for Fuchs' dystrophy?",
    answer: "Eye drops containing salt (hypertonic saline) can sometimes reduce corneal swelling and improve vision in the early stages. However, these treatments do not cure the disease or restore damaged endothelial cells.",
  },
  {
    question: "When is surgery recommended?",
    answer: "Surgery is usually considered when vision problems from Fuchs' begin to interfere with daily activities or quality of life. The decision varies from person to person and depends on how much the disease affects your vision and lifestyle.",
  },
  {
    question: "What surgical treatments are available?",
    answer: "Modern surgery focuses on replacing the damaged endothelial layer of the cornea. Options include: DMEK (Descemet Membrane Endothelial Keratoplasty) — the most advanced technique, replacing only the diseased endothelial cells, delivering superb outcomes and today's surgical standard of care; DSAEK — replaces the endothelium along with a thin layer of donor tissue, delivering good outcomes but yesterday's standard of care; and PK (full corneal transplant) — rarely used today for Fuchs'. These procedures remove corneal guttata and restore the cornea's ability to pump fluid and become clear again.",
  },
  {
    question: "What is the outlook after surgery?",
    answer: "Most patients experience significant improvement in vision after modern endothelial transplant procedures. Vision typically improves over several weeks, and the risk of rejection is relatively low — especially with newer techniques like DMEK.",
  },
];

export default function FuchsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-8">
      <h3 className="text-2xl font-display font-semibold text-charcoal mb-2">
        Fuchs&apos; Dystrophy FAQ
      </h3>
      <p className="text-neutral-500 text-sm mb-6">
        Common questions about Fuchs&apos; Dystrophy, symptoms, and treatment options
      </p>
      <div className="divide-y divide-neutral-100">
        {fuchsFAQs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between py-4 text-left group"
            >
              <span className="text-sm font-medium text-charcoal group-hover:text-gold transition-colors pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="pb-4 pr-8">
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
