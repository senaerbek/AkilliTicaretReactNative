export interface SessionModel {
  username: string;
  password: string;
}

export interface SessionRequestModel {
  token: string;
  refreshToken: string;
  expiration: Date;
  error: null;
  status: boolean;
}
