import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? process.env.REPO_NAME;
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0];
const isRootPagesRepository = repository === `${owner}.github.io`;
const base = process.env.GITHUB_ACTIONS === "true" && repository && !isRootPagesRepository
  ? `/${repository}`
  : "/";
const site = owner
  ? `https://${owner}.github.io${isRootPagesRepository ? "" : base}`
  : undefined;

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  base,
  site,
});
