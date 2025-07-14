import { BASE_URL } from "./utils/config.js";
// Debug configuration - temporary file to check environment variables
console.log("=== DEBUG CONFIG ===");
console.log("REACT_APP_API_URL:", process.env.REACT_APP_API_URL);
console.log("NODE_ENV:", process.env.NODE_ENV);

console.log("Computed BASE_URL:", BASE_URL);

// Test URL formation
const testUrls = [
  `${BASE_URL}/tours`,
  `${BASE_URL}/tours/search/getFeaturedTours`,
  `${BASE_URL}/auth/login`,
];

console.log("Test URLs:");
testUrls.forEach((url) => console.log(" -", url));
console.log("===================");
