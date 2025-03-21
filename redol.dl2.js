console.log("[redol] started");
//see the details on https://github.com/zaqygo/redol/blob/main/README.md#redirect-to-primary-page-addon
//
//
//  common variables ---->

var domain = window.location.hostname; //gets the host domain
var dlvl3 = location.hostname.split('.')[0]; //getting a domain level 3
var dpath = window.location.pathname; //getting full path
var anchors = window.location.hash.substring(); //implementing a path to a specific url

//  common variables ---->
//
//
//  <----------------------------------------- addon redirect links --------------------------------------->

if ((!localStorage.getItem('redirectDone')) && (domain !== maindomain)) {
    console.log("[redol-main] the redirect has not been performed yet");
    switch(domain){
        case domain: 
            console.log("[redol-main] redirect to url:", maindomain);
            window.location.replace("https://"+ maindomain + dpath + anchors);
            localStorage.setItem('redirectDone', 'true');
        break;}}
else {console.log("[redol-main] no reasons for redirect");localStorage.removeItem('redirectDone');}

//  <----------------------------------------- addon redirect links --------------------------------------->
//
//
