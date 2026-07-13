# TBLT-Agent

TBLT-Agent는 과업 기반 언어교수법(Task-Based Language Teaching, TBLT)을 적용한 생성형 AI 기반 영어 말하기 수업 연구 프로젝트입니다. 생성형 AI가 모둠의 제3의 구성원으로 참여할 때 초등 영어 학습자의 상호작용, 과제 몰입도, 언어 산출이 어떻게 변화하는지 탐구합니다.

## Stack

- Astro static output
- TypeScript
- Plain CSS and minimal vanilla JavaScript
- GitHub Actions and GitHub Pages

## Install and run

```bash
npm install
npm run dev
```

Astro가 출력하는 로컬 주소를 브라우저에서 여세요.

## Validate and build

```bash
npm run check
npm run build
npm run preview
```

프로덕션 결과물은 `dist/`에 생성됩니다.

## Content

- Home content: `src/data/home.ts`, `src/pages/index.astro`
- Navigation: `src/data/navigation.ts`
- Members: `src/data/members.ts`
- Research work: `src/data/researchWork.ts`
- Contact: `src/pages/contact.astro`

연구 내용의 기준 문서는 `docs/연구계획서_초안.docx.pdf`입니다.

## Deployment

`main` 브랜치가 GitHub에 푸시되면 `.github/workflows/deploy-pages.yml`이 사이트를 검사하고 빌드한 뒤 GitHub Pages에 배포합니다. 저장소의 **Settings → Pages**에서 배포 소스를 **GitHub Actions**로 설정해야 합니다.
