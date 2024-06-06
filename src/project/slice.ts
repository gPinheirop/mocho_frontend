import { StateCreator } from "zustand";
import { ProjectSlice } from "./types.ts";
import { Store } from "../store";
import { projectApiService } from "./api/index";

export const createProjectSlice: StateCreator<Store, [], [], ProjectSlice> = (
  set,
  get
) => ({
  projects: [],
  getAllProjects: async () => {
    const result = await projectApiService.getAllProjects();
    console.log(result);
    if (result.hasError) {
      console.error(result.error.response?.data);
      return;
    }
    set({
      projects: result.data,
    });
    return;
  },

  project: null,
  getProject: async (id: string) => {
    const result = await projectApiService.getProject(id);
    console.log(result);
    if (result.hasError) {
      console.error(result.error.response?.data);
      return false;
    }
    set({
      project: result.data,
    });
    return true;
  },

  createProject: async (
    name: string,
    objective: string,
    description: string
  ) => {
    const result = await projectApiService.createProject(
      name,
      objective,
      description
    );
    console.log(result);
    if (result.hasError) {
      console.error(result.error.response?.data);
      return false;
    }
    return true;
  },

  updateProject: async (
    name: string,
    objective: string,
    description: string,
    id: string
  ) => {
    const result = await projectApiService.updateProject(
      name,
      objective,
      description,
      id
    );
    console.log(result);
    if (result.hasError) {
      console.error(result.error.response?.data);
      return false;
    }
    return true;
  },
});
