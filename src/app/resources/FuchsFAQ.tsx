'use client';

import { useState } from 'react';

const fuchsFAQs = [
  {
    question: "What is Fuchs' Dystrophy?",
    answer: "Fuchs' Dystrophy is a progressive eye disease that affects the cornea — the clear, dome-shaped front surface of your eye. In Fuchs', the delicate cells lining the inner surface of the cornea (called endothelial cells) gradually deteriorate. These cells are responsible for pumping fluid out of the cornea to keep it clear. As they are lost, the cornea swells with excess fluid, leading to cloudy or blurry vision.",
  },
  {
    question: "What are the symptoms of Fuchs' Dystrophy?",
    answer: "Early symptoms often include blurry or hazy vision that is worse in the morning and improves as the day goes on. As the disease progresses, vision may remain blurry throughout the day. Other symptoms can include glare or halos around lights, difficulty seeing at night, a gritty or sandy sensation in the eyes, and sensitivity to light. In advanced stages, painful blisters (called bullae) can form on the corneal surface.",
  },
  {
    question: "How does Fuchs' Dystrophy affect my vision?",
    answer: "Fuchs' Dystrophy causes the cornea to swell, which scatters light entering the eye and makes vision cloudy or hazy — similar to looking through a foggy window. The swelling is often worst in the morning because your eyes don't evaporate moisture while you sleep. Over time, the swelling can become constant, leading to persistently blurred vision that affects daily activities like reading, driving, and recognizing faces.",
  },
  {
    question: "Is Fuchs' Dystrophy inherited?",
    answer: "Yes, Fuchs' Dystrophy has a strong genetic component. It often runs in families, and if one of your parents has it, you have roughly a 50% chance of developing the condition. However, the severity and age of onset can vary significantly even within the same family. Fuchs' is more common in women and typically becomes symptomatic after age 50, though it can be detected earlier on examination.",
  },
  {
    question: "How urgently do I need to treat Fuchs' Dystrophy?",
    answer: "Fuchs' Dystrophy is a slowly progressive condition, and not everyone who has it will need surgery. In the early stages, when symptoms are mild, treatment may simply involve monitoring and using hypertonic saline drops or ointment to help reduce corneal swelling. Surgery becomes necessary when vision loss significantly impacts your quality of life or daily activities. Dr. Sales will help you understand where you are in the progression and when intervention makes sense.",
  },
  {
    question: "I also have cataracts — how does that relate to Fuchs'?",
    answer: "It's very common to have both Fuchs' Dystrophy and cataracts, especially since both conditions become more prevalent with age. The good news is that both can be addressed in a single surgery — a combined procedure called a \"triple\" (DMEK + cataract surgery + lens implant). This combined approach means one surgery, one recovery period, and excellent visual outcomes. Dr. Sales has extensive experience with this combined procedure.",
  },
  {
    question: "What non-surgical treatments are available?",
    answer: "For mild Fuchs' Dystrophy, non-surgical treatments can help manage symptoms. These include hypertonic saline drops (such as Muro 128) used during the day and hypertonic saline ointment at night to draw excess fluid from the cornea. Using a hair dryer at arm's length pointed toward the eyes in the morning can help evaporate excess moisture. Soft contact lenses may also be used to reduce discomfort in some cases. These measures don't cure the disease but can provide meaningful relief in early stages.",
  },
  {
    question: "When is surgery recommended?",
    answer: "Surgery is recommended when Fuchs' Dystrophy causes vision loss that meaningfully affects your quality of life — difficulty reading, driving, working, or enjoying daily activities — and non-surgical treatments are no longer sufficient. Surgery may also be recommended if you need cataract surgery, since it provides an opportunity to address both problems at once. Dr. Sales believes in shared decision-making: if your vision is still functional and you're comfortable, it's reasonable to wait.",
  },
  {
    question: "What surgical options are available?",
    answer: "The gold standard surgical treatment for Fuchs' Dystrophy is DMEK (Descemet Membrane Endothelial Keratoplasty). DMEK is a partial-thickness corneal transplant that replaces only the thin, diseased inner layer of the cornea with healthy donor tissue. Compared to older full-thickness transplant techniques, DMEK offers faster visual recovery, better final vision, and lower rejection rates. Dr. Sales was among the first surgeons in New York City to perform DMEK and is an internationally recognized expert in the procedure.",
  },
  {
    question: "What is the outlook after DMEK surgery?",
    answer: "The outlook after DMEK surgery is excellent. Most patients experience significant visual improvement within the first few weeks, with continued improvement over several months. The vast majority of patients achieve driving-level vision or better. Rejection rates with DMEK are very low (around 1-2%), and the donor tissue can last for decades. Dr. Sales will follow you closely after surgery to ensure the best possible outcome.",
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
