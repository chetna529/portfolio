import { API_BASE_URL } from "../utils/constants";
import { projectsData } from "../data/projectsData";

export const getProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.warn("Backend server connection failed, using offline mock projects:", error);
  }
  
  // Offline fallback
  return projectsData;
};
export default getProjects;
