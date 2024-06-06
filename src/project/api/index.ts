import { getHttpHeaders, httpRequest } from "../../services/httpservice";
class ProjectApiService {
  async getAllProjects() {
    const headers = await getHttpHeaders.withAuthToken();
    type Response = { access: string; refresh: string };
    type Error = { detail: string };
    return await httpRequest<Response, Error>({
      method: "GET",
      url: "/projects",
      headers,
    });
  }

  async getProject(id: string) {
    const headers = await getHttpHeaders.withAuthToken();
    type Response = { access: string; refresh: string };
    return await httpRequest<Response, Error>({
      method: "GET",
      url: `/projects/${id}`,
      headers,
    });
  }
}

export const projectApiService = new ProjectApiService();
