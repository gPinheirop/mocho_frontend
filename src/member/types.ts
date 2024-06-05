export interface MemberSlice {
  accessToken: string;
  deleteToken: () => void;
  loginLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
}
