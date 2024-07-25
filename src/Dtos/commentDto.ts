export interface CommentDTO {
  message: string;
  userId: number;
  postId: number;
  parentId?: number;
}

export interface CreateCommentDTO {
  message: string;
  userId: number;
  postId: number;
  parentId?: number;
}

export interface UpdateCommentDTO {
  message?: string;
  parentId?: number;
}
