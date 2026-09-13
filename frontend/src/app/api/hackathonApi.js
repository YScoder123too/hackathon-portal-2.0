import API from "./axios";

export const getHackathons = () => API.get("/hackathons");
export const getHackathonById = (id) => API.get(`/hackathons/${id}`);
export const createHackathon = (data) => API.post("/hackathons", data);
export const updateHackathon = (id, data) => API.put(`/hackathons/${id}`, data);
export const deleteHackathon = (id) => API.delete(`/hackathons/${id}`);