/**
 * name, email,password, role, profilePicture, posts, comments , googleId
 */
export interface UserDTO {
  name: string;
  email: string;
  password: string;
  profilePicture?: string;
  googleId?: string;
  posts?: string[];
  comments?: string[];
  role?: string;
}

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  profilePicture?: string;
  googleId?: string;
  posts?: string[];
  comments?: string[];
  role?: string;
}
export interface UpdateUserDTO {
  name?: string;
  email?: string;
  password?: string;
  profilePicture?: string;
  googleId?: string;
  posts?: string[];
  comments?: string[];
  role?: string;
}
