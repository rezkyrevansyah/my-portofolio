export type ProjectCategory = "All" | "QA Engineering" | "Vibe Coding" | "UI/UX Design";

export interface ProjectLinks {
  github?: string;
  demo?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string; // Or ProjectCategory
  description: string;
  image?: string;
  tags: string[];
  links: ProjectLinks;
}
