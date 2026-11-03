export type GroupId = "sla" | "nlp";

export interface TeamGroup {
  id: GroupId;
  label: string;
}

export const teamGroups: Record<GroupId, TeamGroup> = {
  sla: {
    id: "sla",
    label: "SLA Group",
  },
  nlp: {
    id: "nlp",
    label: "NLP Group",
  },
};
