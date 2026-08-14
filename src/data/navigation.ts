import type { Locale } from "../i18n/config";

const labels = {
  ko: ["홈", "연구진", "시스템", "연구 성과"],
  en: ["Home", "Members", "System", "Research Work"],
} as const satisfies Record<Locale, readonly string[]>;

const routes = ["", "members", "system", "research-work"] as const;

export function getNavigation(locale: Locale) {
  return routes.map((href, index) => ({ href, label: labels[locale][index] }));
}
