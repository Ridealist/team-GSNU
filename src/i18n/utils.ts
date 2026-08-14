import type { Locale } from "./config";

function normalizeBase(base: string): string {
  return `/${base.split("/").filter(Boolean).join("/")}${base === "/" ? "" : "/"}`;
}

export function localizedPath(locale: Locale, route = "", base = "/"): string {
  const normalizedBase = normalizeBase(base);
  const normalizedRoute = route.replace(/^\/+|\/+$/g, "");
  return `${normalizedBase}${locale}/${normalizedRoute}${normalizedRoute ? "/" : ""}`;
}

export function routeFromPath(pathname: string, base = "/"): string {
  const normalizedBase = normalizeBase(base);
  let route = pathname;

  if (normalizedBase !== "/" && route.startsWith(normalizedBase)) {
    route = route.slice(normalizedBase.length);
  } else {
    route = route.replace(/^\/+/, "");
  }

  route = route.replace(/^(ko|en)(?:\/|$)/, "");
  return route.replace(/^\/+|\/+$/g, "");
}
