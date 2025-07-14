// Test authentication flow
// Usage: node test-auth.js [backend-url]

const https = require('https');
const http = require('http');

const BASE_URL = process.argv[2] || 'http://localhost:4000';

function makeRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        
        const req = protocol.request(url, options, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    data: data
                });
            });
        });

        req.on('error', (err) => {
            reject(err);
        });

        if (options.body) {
            req.write(options.body);
        }
        
        req.end();
    });
}

async function testAuth() {
    console.log(`Testing Authentication at: ${BASE_URL}`);
    console.log('\n=== Authentication Test ===\n');

    // Test data
    const testUser = {
        username: "testuser",
        email: "test@example.com",
        password: "testpassword123"
    };

    try {
        // 1. Test Registration
        console.log('1. Testing Registration...');
        const registerOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testUser)
        };

        const registerResult = await makeRequest(`${BASE_URL}/api/v1/auth/register`, registerOptions);
        console.log(`Status: ${registerResult.statusCode}`);
        if (registerResult.statusCode === 200) {
            console.log('✅ Registration successful');
        } else {
            console.log('ℹ️ Registration response:', registerResult.data);
        }

        // 2. Test Login
        console.log('\n2. Testing Login...');
        const loginOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: testUser.email,
                password: testUser.password
            })
        };

        const loginResult = await makeRequest(`${BASE_URL}/api/v1/auth/login`, loginOptions);
        console.log(`Status: ${loginResult.statusCode}`);
        
        let token = null;
        if (loginResult.statusCode === 200) {
            console.log('✅ Login successful');
            const loginData = JSON.parse(loginResult.data);
            token = loginData.token;
            console.log('Token received:', token ? 'Yes' : 'No');
        } else {
            console.log('❌ Login failed');
            console.log('Response:', loginResult.data);
        }

        // 3. Test Protected Route (if we have token)
        if (token) {
            console.log('\n3. Testing Protected Route...');
            const protectedOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };

            // Test a protected endpoint (you can change this to any protected route)
            const protectedResult = await makeRequest(`${BASE_URL}/api/v1/tours`, protectedOptions);
            console.log(`Status: ${protectedResult.statusCode}`);
            if (protectedResult.statusCode === 200) {
                console.log('✅ Protected route accessible with token');
            } else {
                console.log('❌ Protected route failed');
                console.log('Response:', protectedResult.data);
            }
        }

    } catch (error) {
        console.log('❌ ERROR:', error.message);
    }
}

testAuth().catch(console.error);
