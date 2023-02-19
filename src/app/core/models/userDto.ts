export class UserDTO {
  artistID: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;
  createDate: Date;
  accessToken?: any;
  refreshToken?: any;
  profilePicURL: string;
}
