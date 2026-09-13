import API from "./axios";

// ─────────────────────────────────────────────────────────────
// REAL BACKEND CALLS — replaces the old localStorage mock.
// Response shape from backend: { success, statusCode, message, data }
// authSlice.js already expects response.data.data for the user,
// so no changes needed there — axios response.data === backend's
// ApiResponse object.
// ─────────────────────────────────────────────────────────────

export const signupUser = (data) => API.post("/auth/signup", data);

export const loginUser = (data) => API.post("/auth/login", data);

export const logoutUser = () => API.post("/auth/logout");

export const getCurrentUser = () => API.get("/auth/me");

export const getAllUsers = () => API.get("/auth/users");