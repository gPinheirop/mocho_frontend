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

  async createProject(name: string, objective: string, description: string) {
    const headers = await getHttpHeaders.withAuthToken();
    type Response = { access: string; refresh: string };
    return await httpRequest<Response, Error>({
      method: "POST",
      url: "/projects",
      body: {
        name,
        objective,
        description,
      },
      headers,
    });
  }

  async updateProject(
    name: string,
    objective: string,
    description: string,
    id: string
  ) {
    const headers = await getHttpHeaders.withAuthToken();
    type Response = { access: string; refresh: string };
    return await httpRequest<Response, Error>({
      method: "PATCH",
      url: `/projects/${id}`,
      body: {
        name,
        objective,
        description,
      },
      headers,
    });
  }
}

export const projectApiService = new ProjectApiService();
