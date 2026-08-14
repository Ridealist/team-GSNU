import type { Locale } from "./config";

export const ui = {
  ko: {
    skipToContent: "본문으로 바로가기",
    openMenu: "주 메뉴 열기",
    closeMenu: "주 메뉴 닫기",
    primaryNavigation: "주 메뉴",
    languageNavigation: "언어 선택",
    switchToKorean: "한국어로 보기",
    switchToEnglish: "영어로 보기",
    footerDescription: "생성형 AI 에이전트를 활용한 과업 기반 언어교수법",
    membersLabel: "TBLT-Agent 연구진",
    researchInterests: (name: string) => `${name}의 연구 관심 분야`,
  },
  en: {
    skipToContent: "Skip to main content",
    openMenu: "Open primary navigation",
    closeMenu: "Close primary navigation",
    primaryNavigation: "Primary navigation",
    languageNavigation: "Language selection",
    switchToKorean: "View in Korean",
    switchToEnglish: "View in English",
    footerDescription: "Task-Based Language Teaching with a Generative AI Agent",
    membersLabel: "TBLT-Agent members",
    researchInterests: (name: string) => `${name}'s research interests`,
  },
} satisfies Record<Locale, Record<string, string | ((value: string) => string)>>;
