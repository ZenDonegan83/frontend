export class UserSessionDto {
  artistID: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;
  profilePic: string;
  createDate: Date;
  accessToken: string;
  refreshToken: string;
}
