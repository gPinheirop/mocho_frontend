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
}

export const memberApiService = new MemberApiService();
