export interface CategoryDTO {
  name: string;
  image?: string;
}

export interface CreateCategoryDTO {
  name: string;
  image?: string;
}

export interface UpdateCategoryDTO {
  name?: string;
  image?: string;
}
