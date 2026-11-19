export type GroupId = "sla" | "developer" | "nlp";

export interface TeamGroup {
  id: GroupId;
  label: string;
}

export const teamGroups: Record<GroupId, TeamGroup> = {
  sla: {
    id: "sla",
    label: "SLA Group",
  },
  developer: {
    id: "developer",
    label: "Developer / Practitioner",
  },
  nlp: {
    id: "nlp",
    label: "NLP Group",
  },
};
