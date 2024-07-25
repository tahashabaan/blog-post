export interface UserDTO {
  name: string;
  email: string;
  password: string;
  profilePicture?: string;
}

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}
export interface UpdateUserDTO {
  name?: string;
  email?: string;
  password?: string;
  profilePicture?: string;
}
