export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  category: string;
  tags: string[];
  image: string;
  readingTime: number;
  featured: boolean;
  body: string;
  permalink: string;
}

export type BlogCategory =
  | "Oxbridge Admissions"
  | "Interview Tips"
  | "Personal Statement"
  | "UK Universities"
  | "Student Stories";
