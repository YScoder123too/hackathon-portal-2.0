import API from "./axios";

export const upsertSubmission = (data) => API.post("/submissions", data);
export const finalizeSubmission = (id) => API.put(`/submissions/${id}/finalize`);
export const getMySubmissions = () => API.get("/submissions/my");
export const getAllSubmissions = () => API.get("/submissions");