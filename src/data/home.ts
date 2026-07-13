export const currentResearchQuestions = [
  {
    id: "RQ 01",
    title: "GenAI의 과업 대화자 가능성",
    body: "생성형 AI는 상호작용 과업에서 학습자의 적극적인 과업 수행을 어떻게 지원할 수 있는가?",
  },
  {
    id: "RQ 02",
    title: "AI 역할에 따른 차이",
    body: "서로 다른 AI 상호작용 역할은 초등 EFL 학습자의 과업 수행과 언어 발달에 어떤 영향을 미치는가?",
  },
] as const;

export const interactionMeasures = [
  { value: "Turns", label: "총 발화 순서 수" },
  { value: "Words", label: "발화당 평균 단어 수" },
  { value: "Topics", label: "주제 개시 빈도" },
] as const;
