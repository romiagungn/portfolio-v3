import qs from "~/utils/querystring";

type PaginationParams = {
  page?: number;
  limit?: number;
};

export type Project = {
  id: string;
  repoUrl: string;
  responsibility: string;
  techStack: string;
  category: string;
  gifUrl: string;
  brief: string;
  result: string;
  url: string;
  year: string;
  description: string;
  thumbnail: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export async function getProjects({ page, limit }: PaginationParams) {
  const queryString = qs({ page, limit });
  try {
    const response = await fetch(
      "http://localhost:8081/api/v1/projects" + queryString
    );

    return response?.json();
  } catch (error) {
    return error;
  }
}

export async function getProject(id: string) {
  try {
    const response = await fetch(`http://localhost:8081/api/v1/projects/${id}`);

    return response?.json();
  } catch (error) {
    return error;
  }
}
