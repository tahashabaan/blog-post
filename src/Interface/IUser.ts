export default interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: string;
  profilePicture?: string;
  posts?: string[];
  comments?: string[];
  googleId?: string;
}
