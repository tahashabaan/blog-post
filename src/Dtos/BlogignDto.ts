export interface BloggingDTO {
  name: string;
  description: string;
}

export interface CreateBloggingDTO {
  name: string;
  description: string;
}

export interface UpdateBloggingDTO {
  name?: string;
  description?: string;
}
