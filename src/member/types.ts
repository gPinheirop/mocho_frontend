export interface MemberSlice {
  accessToken: string;
  deleteToken: () => void;
  loginLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
}

export interface Member {
  firstName: string;
  lastName: string;
  document: string;
  email: string;
  password: string;
  role: number;
  address: {
    zipcode: string;
    streat: string;
    state: string;
    neighborhood: string;
    number: string;
    id: string;
  };
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
  id: string;
}
