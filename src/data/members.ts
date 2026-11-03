import type { Locale } from "../i18n/config";
import type { GroupId } from "./teamGroups";

export interface Member {
  slug: string;
  displayName: string;
  image?: string;
  imageAlt?: string;
  role: Record<Locale, string>;
  groups: GroupId[];
  affiliation: string;
  position: string;
  department?: string;
  organization: string;
  lead?: boolean;
  biography: string[];
  researchInterests: string[];
  profileUrl?: string;
  profileLabel?: string;
  scholarUrl?: string;
}

export function initials(member: Member): string {
  return member.displayName.split(" ").map((part) => part[0]).join("");
}

export const members: Member[] = [
  {
    slug: "youjin-kim",
    displayName: "YouJin Kim",
    image: "youjin-kim.jpg",
    imageAlt: "Portrait of Professor YouJin Kim",
    role: { ko: "연구책임자", en: "Principal Investigator" },
    groups: ["sla"],
    affiliation: "Professor & Director of Graduate Studies · Applied Linguistics & ESL · Georgia State University",
    position: "Professor",
    department: "Applied Linguistics and ESL",
    organization: "Georgia State University",
    lead: true,
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
    role: { ko: "연구원", en: "Researcher" },
    groups: ["sla"],
    affiliation: "Ph.D. Student · Applied Linguistics & ESL · Georgia State University",
    position: "Ph.D. Student",
    organization: "Georgia State University",
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
    role: { ko: "연구원", en: "Researcher" },
    groups: ["sla", "nlp"],
    affiliation: "Researcher, Learning Sciences Research Institute · M.A. in Educational Technology & Integrated Major in Applied Data Science · Seoul National University",
    position: "Researcher",
    organization: "Learning Sciences Research Institute, SNU",
    biography: [
      "Junbo Koh's research interests focus on “Human-Centered AI in Education (AIED)” with a theory-driven approach to addressing real-world educational challenges.",
      "He is particularly interested in how AI systems can foster learner agency so that students can make their own learning paths and take ownership of their lives, engaging AI as a collaborative partner rather than depending on it.",
    ],
    researchInterests: ["Human-Centered AIED", "Human-AI Interaction", "Learning Sciences", "Educational Technology"],
    profileUrl: "https://www.linkedin.com/in/junbokoh92/",
    profileLabel: "LinkedIn",
    scholarUrl: "https://scholar.google.com/citations?user=2hDR1lgAAAAJ&hl=en&oi=ao",
  },
  {
    slug: "yohan-jo",
    displayName: "Yohan Jo",
    image: "yohan-jo.jpg",
    imageAlt: "Portrait of Professor Yohan Jo",
    role: { ko: "지도교수", en: "Faculty Advisor" },
    groups: ["nlp"],
    affiliation: "Assistant Professor · Graduate School of Data Science · Seoul National University",
    position: "Assistant Professor",
    department: "Graduate School of Data Science",
    organization: "Seoul National University",
    lead: true,
    biography: [
      "Dr. Yohan Jo leads the Human-Oriented Language Intelligence (HOLI) Lab at Seoul National University's Graduate School of Data Science.",
      "In TBLT-Agent, Dr. Jo advises the NLP group on the design and evaluation of the system's language technology.",
    ],
    researchInterests: ["Natural Language Processing"],
    profileUrl: "https://yohanjo.github.io/",
    profileLabel: "Homepage",
    scholarUrl: "https://scholar.google.com/citations?user=xp3LGRQAAAAJ&hl=en",
  },
  {
    slug: "seongyeub-chu",
    displayName: "Seongyeub Chu",
    image: "seongyeub-chu.jpg",
    imageAlt: "Portrait of Seongyeub Chu",
    role: { ko: "연구원", en: "Researcher" },
    groups: ["nlp"],
    affiliation: "Ph.D. in Data Science · KAIST · Incoming Researcher, NAIS",
    position: "Ph.D. in Data Science",
    organization: "KAIST",
    biography: [
      "Seongyeub Chu holds a B.A. and M.A. in English Education from Cheongju National University of Education and a Ph.D. from the Graduate School of Data Science at KAIST, and is set to join the National AI Research Center (NAIS) as a researcher.",
    ],
    researchInterests: ["Large Language Models", "Education", "Educational Data Mining"],
    scholarUrl: "https://scholar.google.com/citations?user=IQ99e9cAAAAJ&hl=en&oi=ao",
  },
  {
    slug: "minje-kim",
    displayName: "Minje Kim",
    role: { ko: "연구원", en: "Researcher" },
    groups: ["nlp"],
    affiliation: "Ph.D. Student in Elementary English Education · Cheongju National University of Education",
    position: "Ph.D. Student in Elementary English Education",
    organization: "CNUE",
    biography: [
      "Minje Kim holds a B.A. and M.A. in English Education from Cheongju National University of Education and is currently a Ph.D. student in Elementary English Education at the same university.",
    ],
    researchInterests: ["Elementary English Education"],
  },
];
