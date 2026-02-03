export type ProjectCategory = "All" | "QA Engineering" | "Web Development" | "UI/UX Design";

// Category type without "All" for project data
export type ProjectCategoryValue = Exclude<ProjectCategory, "All">;

export interface ProjectLinks {
  github?: string;
  demo?: string;
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategoryValue;
  description: string;
  image?: string;
  tags: string[];
  links: ProjectLinks;
}
