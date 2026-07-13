export interface ResearchItem {
  category: "conference" | "working-paper";
  authors: string;
  date: string;
  title: string;
  descriptor: string;
  venue: string;
  location?: string;
  status: string;
  note: string;
  link?: { label: string; href: string };
}

export const researchItems: ResearchItem[] = [
  {
    category: "conference",
    authors: "Kim, Y., Lee, S., & Koh, J.",
    date: "2027, March",
    title: "Generative AI as a task interlocutor: Effects of AI interactional roles on collaborative task performance and L2 learning",
    descriptor: "Conference paper proposal",
    venue: "American Association for Applied Linguistics 2027 Conference",
    location: "Atlanta, GA, United States",
    status: "Working conference proposal",
    note: "Prepared for AAAL 2027 under the conference theme “Focus on the Applied.”",
    link: { label: "AAAL 2027", href: "https://www.aaal.org/2027-conference" },
  },
  {
    category: "working-paper",
    authors: "Kim, Y., Lee, S., & Koh, J.",
    date: "2026",
    title: "Generative AI as a task interlocutor: Effects of AI interactional roles on collaborative task performance and L2 learning",
    descriptor: "Manuscript in preparation for submission to a proposed special issue",
    venue: "System",
    status: "Special issue proposal stage",
    note: "Planned contribution to a proposed special issue on collaboration with or around GenAI in language learning and teaching.",
  },
];
