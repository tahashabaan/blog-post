export default interface IPost {
  categoryID: string;
  blogID: string;
  title: string;
  content: string;
  authorID: string;
  summary?: string;
  statusPost?: string;
  updatedAt?: Date;
  deletedAt?: Date;
  publishedAt?: Date;
  comments?: string[];
  tags?: string[];
  user: string;
}
