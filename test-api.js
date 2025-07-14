// Simple API testing script
// Usage: node test-api.js [backend-url]
// Example: node test-api.js https://travel-booking-backend.onrender.com

const https = require("https");
const http = require("http");

const BASE_URL = process.argv[2] || "http://localhost:4000";

console.log(`Testing API at: ${BASE_URL}`);

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;

    protocol
      .get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          resolve({
            statusCode: res.statusCode,
            data: data,
          });
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

async function testEndpoints() {
  const endpoints = [
    { name: "Health Check", url: `${BASE_URL}/` },
    { name: "Tours API", url: `${BASE_URL}/api/v1/tours` },
    {
      name: "Featured Tours",
      url: `${BASE_URL}/api/v1/tours/search/getFeaturedTours`,
    },
    { name: "Tour Count", url: `${BASE_URL}/api/v1/tours/search/getTourCount` },
  ];

  console.log("\n=== API Testing Results ===\n");

  for (const endpoint of endpoints) {
    try {
      console.log(`Testing: ${endpoint.name}`);
      console.log(`URL: ${endpoint.url}`);

      const result = await makeRequest(endpoint.url);

      console.log(`Status: ${result.statusCode}`);

      if (result.statusCode === 200) {
        console.log("✅ SUCCESS");
        try {
          const jsonData = JSON.parse(result.data);
          console.log(
            `Response: ${JSON.stringify(jsonData, null, 2).substring(
              0,
              200
            )}...`
          );
        } catch (e) {
          console.log(`Response: ${result.data.substring(0, 100)}...`);
        }
      } else {
        console.log("❌ FAILED");
        console.log(`Response: ${result.data}`);
      }
    } catch (error) {
      console.log("❌ ERROR");
      console.log(`Error: ${error.message}`);
    }

    console.log("---\n");
  }
}

testEndpoints().catch(console.error);
