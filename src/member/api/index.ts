import { getHttpHeaders, httpRequest } from "../../services/httpservice";
class MemberApiService {
  async signIn(email: string, password: string) {
    const headers = await getHttpHeaders.withoutAuthToken();
    type Response = { access: string; refresh: string };
    type Error = { detail: string };
    return await httpRequest<Response, Error>({
      method: "POST",
      url: "/auth/login",
      body: { email, password },
      headers,
    });
  }

  async getAllMembers() {
    const headers = await getHttpHeaders.withAuthToken();
    type Response = { access: string; refresh: string };
    type Error = { detail: string };
    return await httpRequest<Response, Error>({
      method: "GET",
      url: "/members",
      headers,
    });
  }

  async getMember(id: string) {
    const headers = await getHttpHeaders.withAuthToken();
    type Response = { access: string; refresh: string };
    return await httpRequest<Response, Error>({
      method: "GET",
      url: `/members/${id}`,
      headers,
    });
  }

  async createMember(
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
  ) {
    const headers = await getHttpHeaders.withAuthToken();
    type Response = { access: string; refresh: string };
    return await httpRequest<Response, Error>({
      method: "POST",
      url: "/members",
      body: {
        firstName: name,
        lastName,
        document,
        email,
        password,
        role,
        address: {
          zipCode,
          streat: street,
          state,
          neighborhood,
          number,
        },
      },
      headers,
    });
  }

  async updateMember(
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
  ) {
    const headers = await getHttpHeaders.withAuthToken();
    type Response = { access: string; refresh: string };
    const body = {
      firstName: name,
      lastName,
      document,
      email,
      password,
      role,
      address: {
        zipCode,
        streat: street,
        state,
        neighborhood,
        number,
      },
    };
    console.log("body", body);
    return await httpRequest<Response, Error>({
      method: "PATCH",
      url: `/members/${id}`,
      body: {
        firstName: name,
        lastName,
        document,
        email,
        password,
        role,
        address: {
          zipCode,
          streat: street,
          state,
          neighborhood,
          number,
        },
      },
      headers,
    });
  }

  async deleteMember(id: string) {
    const headers = await getHttpHeaders.withAuthToken();
    type Response = { access: string; refresh: string };
    return await httpRequest<Response, Error>({
      method: "DELETE",
      url: `/members/${id}`,
      headers,
    });
  }
}

export const memberApiService = new MemberApiService();
