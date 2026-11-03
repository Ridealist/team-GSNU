import type { Locale } from "../i18n/config";

const labels = {
  ko: ["개요", "시스템", "연구", "팀", "연구 성과"],
  en: ["Overview", "System", "Studies", "Team", "Publications"],
} as const satisfies Record<Locale, readonly string[]>;

const items = [
  { route: "", hash: "" },
  { route: "", hash: "system" },
  { route: "", hash: "studies" },
  { route: "", hash: "team" },
  { route: "", hash: "publications" },
] as const;

export function getNavigation(locale: Locale) {
  return items.map((item, index) => ({ ...item, label: labels[locale][index] }));
}
