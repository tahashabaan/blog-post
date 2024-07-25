export interface PostDTO {
  title: string;
  summary: string;
  content: string;
  tags: string[];
  userId: number;
  categoryId: number;
}

export interface CreatePostDTO {
  title: string;
  summary: string;
  content: string;
  tags: string[];
  userId: number;
  categoryId: number;
}

export interface UpdatePostDTO {
  title?: string;
  summary?: string;
  content?: string;
  tags?: string[];
  categoryId?: number;
}
