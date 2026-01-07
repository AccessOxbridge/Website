export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  category: BlogCategory;
  tags: string[];
  image: string;
  readingTime: number;
  featured: boolean;
  body: string;
  permalink: string;
  createdAt: Date;
}

export type BlogCategory =
  | "Oxbridge Admissions"
  | "Interview Tips"
  | "Personal Statement"
  | "UK Universities"
  | "Student Stories"
  | "International Students";
