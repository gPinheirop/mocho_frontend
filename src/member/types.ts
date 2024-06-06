export interface MemberSlice {
  accessToken: string;
  deleteToken: () => void;
  loginLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  members: Array<Member>;
  getAllMembers: () => Promise<boolean>;

  member: Member | null;
  getMember: (id: string) => Promise<boolean>;

  createMember: (
    name: string,
    lastName: string,
    document: string,
    email: string,
    password: string,
    zipCode: string,
    street: string,
    state: string,
    neighborhood: string,
    number: string,
    role: number
  ) => Promise<boolean>;

  updateMember: (
    name: string,
    lastName: string,
    document: string,
    email: string,
    password: string,
    zipCode: string,
    street: string,
    state: string,
    neighborhood: string,
    number: string,
    role: number,
    id: string
  ) => Promise<boolean>;

  deleteMember: (id: string) => Promise<boolean>;
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

export enum Role {
  ADMIN = 1,
  DEFAULT = 2,
  MANAGER = 3,
}
