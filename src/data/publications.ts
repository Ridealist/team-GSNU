export interface Publication {
  title: string;
  authors: string;
  venue: string;
  status: string;
  indexing?: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    title: "Generative AI as a Task Interlocutor in Task-Based Language Learning: Interactional Roles, Corrective Feedback, and L2 Development",
    authors: "YouJin Kim, Sak Lee, and Junbo Koh",
    venue: "Modern Language Journal",
    status: "In-Progress",
    indexing: "SSCI, Q1, IF 4.5",
  },
  {
    title: "Generative AI as a Task Interlocutor: Effects of AI Interactional Roles on Collaborative Task Performance and L2 Learning",
    authors: "YouJin Kim, Sak Lee, and Junbo Koh",
    venue: "System",
    status: "In-Progress",
    indexing: "SSCI, Q1, IF 8.0",
  },
  {
    title: "Effects of AI Interactional Roles on Collaborative Task Performance and L2 Learning among Young Learners",
    authors: "YouJin Kim, Sak Lee, and Junbo Koh",
    venue: "AAAL 2027: American Association for Applied Linguistics",
    status: "Accepted",
    link: "https://www.aaal.org/2027-conference",
  },
];
