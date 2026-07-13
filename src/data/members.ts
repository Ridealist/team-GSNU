export interface Member {
  slug: string;
  displayName: string;
  image: string;
  imageAlt: string;
  role: string;
  affiliation: string;
  biography: string[];
  researchInterests: string[];
  profileUrl: string;
  profileLabel: string;
  scholarUrl: string;
}

export const members: Member[] = [
  {
    slug: "youjin-kim",
    displayName: "YouJin Kim",
    image: "youjin-kim.jpg",
    imageAlt: "Portrait of Professor YouJin Kim",
    role: "Principal Investigator",
    affiliation: "Professor & Director of Graduate Studies · Applied Linguistics & ESL · Georgia State University",
    biography: [
      "Dr. YouJin Kim specializes in second language acquisition, second language pedagogy, and task-based language teaching and assessment. Her interactionist and psycholinguistic research examines how interactional feedback, language-related episodes, and alignment during oral interaction contribute to L2 development.",
      "In TBLT-Agent, she leads the project’s theoretical grounding and research design at the intersection of task-based interaction, language learning, and assessment.",
    ],
    researchInterests: ["Second Language Acquisition", "Task-Based Language Teaching", "Language Assessment", "Oral Interaction"],
    profileUrl: "https://cas.gsu.edu/profile/youjin-kim/",
    profileLabel: "GSU Profile",
    scholarUrl: "https://scholar.google.com/citations?user=EFYIE8QAAAAJ&hl=en",
  },
  {
    slug: "sak-lee",
    displayName: "Sak Lee",
    image: "sak-lee.jpg",
    imageAlt: "Portrait of Sak Lee",
    role: "Researcher",
    affiliation: "Ph.D. Student · Applied Linguistics & ESL · Georgia State University",
    biography: [
      "Sak Lee is a Ph.D. student in Applied Linguistics at Georgia State University. His work connects instructed second language acquisition and task-based language teaching with emerging technologies for language learning.",
      "His research interests span generative AI in language teaching and learning, second language writing, corpus linguistics, discourse analysis, phraseology, and natural language processing.",
    ],
    researchInterests: ["Instructed SLA", "TBLT", "Generative AI", "Corpus Linguistics"],
    profileUrl: "https://www.linkedin.com/in/sak-lee-2ba338165/",
    profileLabel: "LinkedIn",
    scholarUrl: "https://scholar.google.com/citations?user=BTeIkBQAAAAJ&hl=ko",
  },
  {
    slug: "junbo-koh",
    displayName: "Junbo Koh",
    image: "junbo-koh.jpg",
    imageAlt: "Portrait of Junbo Koh",
    role: "Researcher",
    affiliation: "Elementary School Teacher · M.A. in Educational Technology & Integrated Major in Applied Data Science · Seoul National University",
    biography: [
      "Junbo Koh's research interests focus on “Human-Centered AI in Education (AIED)” with a theory-driven approach to addressing real-world educational challenges.",
      "He is particularly interested in how AI systems can foster learner agency so that students can make their own learning paths and take ownership of their lives, engaging AI as a collaborative partner rather than depending on it.",
    ],
    researchInterests: ["Human-Centered AIED", "Human-AI Interaction", "Learning Sciences", "Educational Technology"],
    profileUrl: "https://www.linkedin.com/in/junbokoh92/",
    profileLabel: "LinkedIn",
    scholarUrl: "https://scholar.google.com/citations?user=2hDR1lgAAAAJ&hl=en&oi=ao",
  },
];
