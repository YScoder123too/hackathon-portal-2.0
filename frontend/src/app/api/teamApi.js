import API from "./axios";

export const createTeam = (data) => API.post("/teams", data);
export const joinTeam = (teamCode) => API.post("/teams/join", { teamCode });
export const getMyTeams = () => API.get("/teams/my");
export const getTeamById = (id) => API.get(`/teams/${id}`);