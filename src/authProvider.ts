import { HttpError } from 'react-admin';

// const apiUrl = 'http://zhujietong.com:8080/api/v1';
const apiUrl = 'http://127.0.0.1:8080/api/v1';

export default {
    // called when the user attempts to log in
    login: ({ userkey, password, type, mobile, mobile_sms }:any) => {
        const request = new Request(`${apiUrl}/auth`, {
            method: 'POST',
            body: JSON.stringify({ userkey, password, type }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        // return fetch(request)
        //     .then(response => {
        //         if (response.status < 200 || response.status >= 300) {
        //             throw new Error(response.statusText);
        //         }
        //         return response.json();
        //     })
        //     .then(({ token }) => {
        //         localStorage.setItem('token', token);
        //     });


            return new Promise(
                (resolve: any, reject: any) => {
                    fetch(request)
                    .then(response => {
                        if (response.status < 200 || response.status >= 300) {
                            throw new Error(response.statusText);
                        }
                        return response.json();
                    })
                    .then((rlt: any) => {
                        let json;
                        console.log(rlt);
                        
                        return resolve(rlt)
                        // console.log(body);
                        
                        // try {
                        //     json = JSON.parse(body);
                        // } catch (e) {
                        //     // not json, no big deal
                        // }
                        
                        // if (status < 200 || status >= 300) {
                      
                        // }
                        // return resolve({
                        //     data: { id: json.id },
                        // })
                    })
                }
            )
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }:any) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    },
    
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
    sendSMS: () => Promise.resolve(),
};