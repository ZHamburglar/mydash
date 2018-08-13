import axios from 'axios';

import {
    GOOGLE_LOGIN
} from './types'


export const googleLoginAuth = () => {
    // gapi.load('client', start)
    return {
        type: GOOGLE_LOGIN
    }
}

// const start = () => {
//     // 2. Initialize the JavaScript client library.
//     gapi.client.init({
//       'apiKey': 'YOUR_API_KEY',
//       // clientId and scope are optional if auth is not required.
//       'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
//       'scope': 'profile',
//     }).then(function() {
//       // 3. Initialize and make the API request.
//       return gapi.client.request({
//         'path': 'https://people.googleapis.com/v1/people/me',
//       })
//     }).then(function(response) {
//       console.log(response.result);
//     }, function(reason) {
//       console.log('Error: ' + reason.result.error.message);
//     });
//   };
