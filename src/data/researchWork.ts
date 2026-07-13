export interface ResearchItem {
  category: "conference" | "working-paper";
  citation: string;
  link?: { label: string; href: string };
}

export const researchItems: ResearchItem[] = [
  {
    category: "conference",
    citation: "Lee, U., Lee, S., Koh, J., Jeong, Y., Jung, H., Byun, G., Lee, Y., Moon, J., Lim, J., & Kim, H. (2023). Generative Agent for Teacher Training: Designing Educational Problem-Solving Simulations with Large Language Model-based Agents for Pre-Service Teachers, GAIED Workshop at NEURIPS'23",
    link: { label: "Paper", href: "https://gaied.org/neurips2023/files/8/8_paper.pdf" },
  },
  {
    category: "working-paper",
    citation: "Moon, J., Lee, U., Koh, J., Jung Y., Lee, Y., Byun, G., & Lee, J.  (Review and revision). Generative artificial intelligence in educational game design: Nuanced challenges, design Implications, and future Research. Technology, Knowledge, and Learning",
  },
  {
    category: "working-paper",
    citation: "Jung Y., Lee, Y., Byun, G., & Moon, J. (In preparation). Autoethnography research to uncover design considerations of immersive learning environment design.",
  },
];
