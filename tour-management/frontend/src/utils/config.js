// Remove trailing slash if exists and add /api/v1
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";
export const BASE_URL = `${apiUrl.replace(/\/$/, "")}/api/v1`;
