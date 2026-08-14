import type { Locale } from "../i18n/config";

export interface ResearchItem {
  category: "conference" | "working-paper";
  authors: string;
  date: string;
  title: string;
  descriptor: Record<Locale, string>;
  venue: string;
  location?: string;
  status: Record<Locale, string>;
  note: Record<Locale, string>;
  link?: { label: string; href: string };
}

export const researchItems: ResearchItem[] = [
  {
    category: "conference",
    authors: "Kim, Y., Lee, S., & Koh, J.",
    date: "2027, March",
    title: "Generative AI as a task interlocutor: Effects of AI interactional roles on collaborative task performance and L2 learning",
    descriptor: { ko: "학술대회 발표 제안서", en: "Conference paper proposal" },
    venue: "American Association for Applied Linguistics 2027 Conference",
    location: "Atlanta, GA, United States",
    status: { ko: "학술대회 제안서 준비 중", en: "Working conference proposal" },
    note: {
      ko: "AAAL 2027의 학술대회 주제인 ‘Focus on the Applied’에 맞추어 준비 중입니다.",
      en: "Prepared for AAAL 2027 under the conference theme “Focus on the Applied.”",
    },
    link: { label: "AAAL 2027", href: "https://www.aaal.org/2027-conference" },
  },
  {
    category: "working-paper",
    authors: "Kim, Y., Lee, S., & Koh, J.",
    date: "2026",
    title: "Generative AI as a task interlocutor: Effects of AI interactional roles on collaborative task performance and L2 learning",
    descriptor: {
      ko: "특별호 투고를 위해 준비 중인 원고",
      en: "Manuscript in preparation for submission to a proposed special issue",
    },
    venue: "System",
    status: { ko: "특별호 제안 단계", en: "Special issue proposal stage" },
    note: {
      ko: "언어 학습 및 교수에서 GenAI와 함께하거나 이를 둘러싼 협업을 다루는 특별호에 기고할 예정입니다.",
      en: "Planned contribution to a proposed special issue on collaboration with or around GenAI in language learning and teaching.",
    },
  },
];
