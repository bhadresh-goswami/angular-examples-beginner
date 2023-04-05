export interface LoginResult {
  statusCode: number;
  isSuccess: boolean;
  response: Response;
  message: string;
  exceptionMessage: string;
}

export interface Response {
  token: string;
  userId: string;
  fullName: string;
  userRole: string;
  email: string;
}
