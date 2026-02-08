export const siteConfig = {
  name: "Christopher S. Sales, MD, MPH",
  title: "Dr. Christopher S. Sales - Ophthalmologist",
  description: "Board-certified ophthalmologist specializing in corneal transplantation, DMEK surgery, vision correction, and innovative eye care. Starling Physicians, Connecticut.",
  phone: "(914) 629-2946",
  location: "Starling Physicians, Wethersfield, CT",
  address: "Wethersfield, CT",
  tagline: "The Art of Vision Innovation",
};

export const doctorBio = {
  shortBio: `Dr. Christopher S. Sales is a board-certified, fellowship-trained cornea and refractive surgeon with extensive expertise in Descemet Membrane Endothelial Keratoplasty (DMEK), LASIK, and advanced corneal procedures. He is recognized internationally as a leader in surgical innovation, having trained over 13 cornea fellows and 39 ophthalmology residents throughout his career.`,

  fullBio: `Dr. Christopher S. Sales is a tenured Associate Professor of Ophthalmology and a board-certified, fellowship-trained cornea and refractive surgeon. He completed his medical education at Tufts University School of Medicine, where he earned both his MD and MPH degrees with Research Honors. His training continued with an internship at Harvard's Beth Israel Deaconess Medical Center, residency at Stanford University's Byers Eye Institute, and a clinical fellowship in Cornea, External Diseases, and Refractive Surgery at the prestigious Devers Eye Institute and Joint Warfighter Refractive Surgery Center.

Dr. Sales is the Founding Director of the Iowa Eye Device Lab, where he develops and studies needs-based, impactful innovations in ophthalmic surgery. He has authored 49+ peer-reviewed publications and holds multiple patents for surgical devices. His expertise in DMEK surgery has made him a sought-after educator, and he has led skills transfer courses at major conferences including the American Academy of Ophthalmology, ASCRS, and the Cornea Society.

His commitment to advancing the field is reflected in his roles as Associate Medical Director of the Iowa Lions Eye Bank, Medical Advisory Board Member of the Eye Bank Association of America, and his 2023 induction into the National Academy of Inventors. Dr. Sales has received numerous awards, including the AAO Achievement Award and the Gold Medal for Notable Contributions to Endothelial Keratoplasty from the Indian Intraocular Implant & Refractive Surgery Convention.`,

  philosophy: `My approach to patient care is rooted in the belief that every individual deserves access to the most advanced, evidence-based treatments available. I combine cutting-edge surgical techniques with compassionate, personalized care to help each patient achieve their best possible vision. Innovation in surgery should ultimately serve one purpose: improving outcomes for patients.`,
};

export const education = [
  {
    year: "2003",
    degree: "B.A. International Relations",
    institution: "Brown University",
    location: "Providence, RI",
  },
  {
    year: "2010",
    degree: "M.D. (Research Honors) & M.P.H.",
    institution: "Tufts University School of Medicine",
    location: "Boston, MA",
  },
  {
    year: "2010-2011",
    degree: "Internal Medicine Internship",
    institution: "Harvard Beth Israel Deaconess Medical Center",
    location: "Boston, MA",
  },
  {
    year: "2011-2014",
    degree: "Ophthalmology Residency",
    institution: "Stanford University - Byers Eye Institute",
    location: "Palo Alto, CA",
  },
  {
    year: "2014-2015",
    degree: "Cornea, External Disease & Refractive Surgery Fellowship",
    institution: "Devers Eye Institute & Joint Warfighter Refractive Surgery Center",
    location: "Portland, OR & San Antonio, TX",
  },
  {
    year: "2024",
    degree: "Global Faculty Training Program in MedTech Entrepreneurship",
    institution: "Stanford Byers Center for BioDesign",
    location: "Palo Alto, CA",
  },
];

export const awards = [
  {
    year: "2024",
    title: "Gold Medal for Notable Contributions to Endothelial Keratoplasty",
    organization: "Indian Intraocular Implant & Refractive Surgery Convention",
  },
  {
    year: "2023",
    title: "National Academy of Inventors Inductee",
    organization: "University of Iowa Chapter",
  },
  {
    year: "2023",
    title: "First Place ($20,000) Innovation Challenge Award",
    organization: "John Pappajohn Entrepreneurial Center, University of Iowa",
  },
  {
    year: "2017",
    title: "Achievement Award",
    organization: "American Academy of Ophthalmology",
  },
  {
    year: "2017",
    title: "Corneal Dystrophy Foundation Recommended Specialist",
    organization: "Corneal Dystrophy Foundation",
  },
  {
    year: "2013-2014",
    title: "Best Poster Award (2 years)",
    organization: "American Academy of Ophthalmology Annual Meeting",
  },
];

export const affiliations = [
  { name: "Stanford University", logo: "/images/logos/stanford.png" },
  { name: "University of Iowa", logo: "/images/logos/iowa.png" },
  { name: "Harvard Medical School", logo: "/images/logos/harvard.png" },
  { name: "Brown University", logo: "/images/logos/brown.png" },
  { name: "Tufts University", logo: "/images/logos/tufts.png" },
];

export const stats = [
  { value: 49, label: "Peer-Reviewed Publications", suffix: "+" },
  { value: 13, label: "Cornea Fellows Trained", suffix: "+" },
  { value: 39, label: "Residents Trained", suffix: "+" },
  { value: 20, label: "Years of Experience", suffix: "+" },
];

export const services = [
  {
    id: "corneal-transplant",
    title: "Corneal Transplantation",
    shortDescription: "Advanced partial and full-thickness corneal transplant procedures including DMEK, DSAEK, DALK, and PK.",
    description: "Dr. Sales is internationally recognized for his expertise in Descemet Membrane Endothelial Keratoplasty (DMEK), the most advanced form of corneal transplantation. He has performed thousands of these procedures and has trained surgeons worldwide in his techniques.",
    procedures: [
      { name: "DMEK", description: "Descemet Membrane Endothelial Keratoplasty - the gold standard for treating Fuchs' Dystrophy" },
      { name: "DSAEK", description: "Descemet Stripping Automated Endothelial Keratoplasty" },
      { name: "DALK", description: "Deep Anterior Lamellar Keratoplasty for stromal disease" },
      { name: "PK", description: "Penetrating Keratoplasty - full-thickness corneal transplant" },
      { name: "Corneal Crosslinking", description: "Treatment to strengthen the cornea in keratoconus" },
    ],
    icon: "eye",
    href: "/services/corneal-transplant",
  },
  {
    id: "vision-correction",
    title: "Vision Correction",
    shortDescription: "LASIK, PRK, and implantable contact lens (ICL) procedures for freedom from glasses and contacts.",
    description: "Using the latest laser technology and implantable lens options, Dr. Sales helps patients achieve visual freedom. His research contributions have advanced the safety and efficacy of refractive surgery.",
    procedures: [
      { name: "LASIK", description: "Laser-assisted in situ keratomileusis for myopia, hyperopia, and astigmatism" },
      { name: "PRK", description: "Photorefractive keratectomy - surface laser vision correction" },
      { name: "ICL", description: "Implantable Collamer Lens for high prescriptions" },
      { name: "Laser Cataract Surgery", description: "Femtosecond laser-assisted cataract removal" },
    ],
    icon: "glasses",
    href: "/services/vision-correction",
  },
  {
    id: "iris-reconstruction",
    title: "Iris Reconstruction",
    shortDescription: "Prosthetic iris implantation and surgical repair for traumatic or congenital iris defects.",
    description: "Dr. Sales performs complex iris reconstruction procedures to restore both function and cosmesis for patients with iris damage from trauma, surgery, or congenital conditions.",
    procedures: [
      { name: "Iris Prosthesis", description: "Custom silicone iris implants for cosmetic and functional restoration" },
      { name: "Trauma Repair", description: "Surgical repair of iris damage from injury" },
      { name: "Congenital Defect Correction", description: "Treatment for aniridia and coloboma" },
    ],
    icon: "iris",
    href: "/services/iris-reconstruction",
  },
  {
    id: "ocular-surface",
    title: "Ocular Surface Disease",
    shortDescription: "Comprehensive treatment for Fuchs' Dystrophy, keratoconus, dry eye, and other corneal conditions.",
    description: "Dr. Sales specializes in the diagnosis and treatment of complex corneal and ocular surface diseases, using both medical and surgical approaches to restore comfort and vision.",
    procedures: [
      { name: "Fuchs' Dystrophy Management", description: "Medical and surgical treatment options" },
      { name: "Keratoconus Treatment", description: "Including crosslinking and specialty contact lenses" },
      { name: "Dry Eye Disease", description: "Advanced therapies for chronic dry eye" },
      { name: "Pterygium Surgery", description: "Surgical removal of conjunctival growths" },
    ],
    icon: "surface",
    href: "/services/ocular-surface",
  },
  {
    id: "cataract",
    title: "Cataract Surgery",
    shortDescription: "Premium cataract surgery with advanced lens implant options for optimal vision outcomes.",
    description: "Dr. Sales offers state-of-the-art cataract surgery, including laser-assisted techniques and premium intraocular lens options to reduce or eliminate dependence on glasses after surgery.",
    procedures: [
      { name: "Standard Cataract Surgery", description: "Phacoemulsification with IOL implantation" },
      { name: "Laser Cataract Surgery", description: "Femtosecond laser-assisted procedure" },
      { name: "Premium IOLs", description: "Multifocal, toric, and extended depth of focus lenses" },
      { name: "Complex Cataract Cases", description: "Management of complicated cataracts" },
    ],
    icon: "cataract",
    href: "/services/cataract",
  },
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Innovation", href: "/innovation" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
];

export const videoLinks = [
  {
    title: "DMEK Tutorial: Pearls for the DMEK Triple",
    platform: "YouTube",
    category: "Surgical Education",
  },
  {
    title: "DMEK Tutorial: Pseudophakic DMEK Technique",
    platform: "YouTube",
    category: "Surgical Education",
  },
  {
    title: "DMEK Tutorial: How and When to Rebubble",
    platform: "YouTube",
    category: "Surgical Education",
  },
  {
    title: "DMEK Tutorial: Manipulation Techniques",
    platform: "YouTube",
    category: "Surgical Education",
  },
];

export const faqs = [
  {
    question: "What is DMEK surgery?",
    answer: "DMEK (Descemet Membrane Endothelial Keratoplasty) is an advanced corneal transplant procedure that replaces only the innermost layer of the cornea. It offers faster visual recovery and lower rejection rates compared to traditional full-thickness transplants.",
  },
  {
    question: "Am I a candidate for LASIK?",
    answer: "LASIK candidacy depends on factors including your prescription, corneal thickness, eye health, and lifestyle. A comprehensive evaluation is needed to determine if LASIK or another vision correction procedure is right for you.",
  },
  {
    question: "What is Fuchs' Dystrophy?",
    answer: "Fuchs' Dystrophy is a progressive eye disease that affects the cornea's inner layer of cells. It can cause vision to become cloudy or blurry, particularly in the morning. DMEK surgery is often the most effective treatment for advanced cases.",
  },
  {
    question: "How long is recovery after corneal transplant?",
    answer: "Recovery time varies by procedure. DMEK patients often achieve good vision within weeks, while full-thickness transplants may take several months. Dr. Sales will provide specific recovery guidance based on your procedure.",
  },
  {
    question: "What makes Dr. Sales' approach unique?",
    answer: "Dr. Sales combines clinical excellence with surgical innovation. As the founder of the Iowa Eye Device Lab and an internationally recognized educator, he brings cutting-edge techniques and personalized care to every patient.",
  },
];
