export default interface IPost {
  title: string;
  content: string;
  authorID: string;
  categoryID: string;
  blogID?: string;
  summary?: string;
  statusPost?: string;
  updatedAt?: Date;
  deletedAt?: Date;
  publishedAt?: Date;
  comments?: string[];
  tags?: string[];
  user: string;
}
