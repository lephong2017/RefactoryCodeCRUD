import axios from 'axios';
import * as Config from 'redux/categoryManagement/constants/Config';
import * as Msal from 'msal';
export const applicationConfig = {
    clientID: '7f399898-f5ee-475e-88ac-ff32f5968470',
    authority: "https://login.microsoftonline.com/tfp/nlphong0107tenant.onmicrosoft.com/B2C_1_demologin",
    b2cScopes: ["https://nlphong0107tenant.onmicrosoft.com/HelloAPI/demo.read"],
    // webApi: 'https://demowe.azurewebsites.net/api/Values',
};


export const callApis=(endpoint, method = 'GET', body)=> {
    var clientApplication = new Msal.UserAgentApplication(applicationConfig.clientID, applicationConfig.authority, function (errorDesc, token, error, tokenType) {
    });
   return clientApplication.acquireTokenSilent(applicationConfig.b2cScopes).then(function (accessToken) {
        return callApiWithAccessToken(endpoint, method = 'GET', body,accessToken).then(res => {
                return res.data;
            }
        ); 
    }, function (error) {
        return clientApplication.acquireTokenPopup(applicationConfig.b2cScopes).then(function (accessToken) {
            return callApiWithAccessToken(endpoint, method = 'GET', body,accessToken).then(res => {
                return res.data;
            }
        ); 
        }, function (error) {
            console.log("Error acquiring the access token to call the Web api:\n" + error);
        });
    })
   
}

export const callApiWithAccessToken=(endpoint, method = 'GET', body,accessToken)=> {
    // Call the Web API with the AccessToken
    return axios({
        url: `${Config.API_URL}/${endpoint}`,
        method,
        headers:{
            'access-control-request-origin':'*',
            'content-type' : 'application/json',
            'Authorization': 'Bearer ' + accessToken,
        },
        data: body
    }).catch(err => {
        console.log(err);
    });
}

export const login=()=> {
    var clientApplication = new Msal.UserAgentApplication(applicationConfig.clientID, applicationConfig.authority, function (errorDesc, token, error, tokenType) {
    });
    clientApplication.loginPopup(applicationConfig.b2cScopes).then(function (idToken) {
        clientApplication.acquireTokenSilent(applicationConfig.b2cScopes).then(function (accessToken) {
            localStorage.setItem("accessToken",accessToken);
        }, function (error) {
            clientApplication.acquireTokenPopup(applicationConfig.b2cScopes).then(function (accessToken) {
                localStorage.setItem("accessToken",accessToken);
            }, function (error) {
                console.log("Error acquiring the popup:\n" + error);
            });
        })
    }, function (error) {
        console.log("Error during login:\n" + error);
    });
}