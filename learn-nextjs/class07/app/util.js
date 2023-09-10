const axios = require('axios');
const CryptoJS = require('crypto-js');

// Define your environment variables
const clientId = 'n8rax8ec3pefh5xhdtaw';
const secret = '74de3399502a40288dc7f053f9dfb87a';
const url = 'https://openapi.tuyacn.com';

function getTime() {
    const timestamp = new Date().getTime();
    return timestamp;
}

function calcSign(clientId, timestamp, nonce, signStr, secret) {
    const str = clientId + timestamp + nonce + signStr;
    const hash = CryptoJS.HmacSHA256(str, secret);
    const hashInBase64 = hash.toString(CryptoJS.enc.Base64);
    const signUp = hashInBase64.toUpperCase();
    return signUp;
}

function stringToSign(query, mode, method, secret) {
    let sha256 = '';
    let url = '';
    let headersStr = '';
    const headers = {
        'client_id': clientId,
        't': getTime(),
        'sign_method': 'HMAC-SHA256',
        'nonce': '',
        'stringToSign': '',
    };

    // Calculate sha256
    const bodyStr = ''; // Replace with your request body

    const map = {};

    // Add your logic to build the 'map' and 'url' variables based on the request

    sha256 = CryptoJS.SHA256(bodyStr).toString(CryptoJS.enc.Hex);

    // Sort the array 'arr' (if needed)

    // Build 'url' based on 'arr' and 'map'

    // Add your logic to build the 'headersStr' variable

    // Add the headers to the 'headers' object

    // Build 'stringToSign' based on method, sha256, headersStr, and url

    headers.stringToSign = method + '\n' + sha256 + '\n' + headersStr + '\n' + url;

    return {
        url,
        signUrl: headers.stringToSign,
    };
}

async function createAccessToken() {
    const timestamp = getTime();
    const { url: apiUrl, signUrl, ...signMap } = stringToSign(null, null, 'GET', secret);

    const headers = {
        'client_id': clientId,
        'sign': calcSign(clientId, timestamp, '', signUrl, secret),
        't': timestamp,
        // Add other headers as needed
    };

    const config = {
        headers,
    };

    try {
        const response = await axios.get(`${url}/v1.0/token?grant_type=1`, config);
        const data = response.data;

        // Check if the response contains the access token
        if (data && data.success) {
            const accessToken = data.result.access_token;
            console.log('Access Token:', accessToken);
            // You can use the access token for further requests
        } else {
            console.error('Error:', data.code, data.msg);
        }
    } catch (error) {
        // Handle errors
        console.error(error);
    }
}

// Call the function to create the access token
export default createAccessToken;
