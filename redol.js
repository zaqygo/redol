console.log("[redol] started");

//
//
//  common variables ---->

var domain = window.location.hostname; //gets the host domain
var dlvl2 = location.hostname.split('.')[1]+'.'+location.hostname.split('.')[2]; //getting a domain, but as a second-level domain
var dlvl3 = location.hostname.split('.')[0]; //getting a domain level 3
var dpath = window.location.pathname; //getting full path
var checkurl = domain + dpath2; //checking whether the user is in the userhost path
var anchors = window.location.hash.substring(); //implementing a path to a specific url
var hostingfp = (anchors.replace(/\#/g, '')).replace(/\$/g, '#'); //removing unnecessary characters

//  common variables ---->
//
//
//  <--------------------------------------- hosting redirect links --------------------------------------->

if ((!localStorage.getItem('redirectDone')) && (checkurl !== maincheckurl) && (dlvl2 == maindlvl2)) {
    var targetUrl = "https://"+turl;
    var targetDomain = "https://"+turldomain;
    console.log("[redol] the redirect has not been performed yet");
    if ((dlvl3 !== maindlvl3) && (userdomain.includes(dlvl3))) {
    switch (window.location.hostname) {
        case (domain):
            if (hostingfp !== '') {targetUrl += "/" + hostingfp;}
            console.log("[redol] redirect to url:", targetUrl);
            window.location.replace(targetUrl);
            localStorage.setItem('redirectDone', 'true');
            break;
        default:console.log("[redol] the host does not match, the redirect is not performed");break;}}
    else { if (dpath2 == maindpath2) {
        switch (domain) {
        case (domain):window.location.replace(targetDomain + dpath);localStorage.setItem('redirectDone', 'true');break;
        default:console.log("[redol] the host does not match, the redirect is not performed");break;}}}} 
else {console.log("[redol] the redirect has already been performed earlier");localStorage.removeItem('redirectDone');}


//  <--------------------------------------- hosting redirect links --------------------------------------->
//
//
//  <--------------------------------------- standart redirect links -------------------------------------->

if ((!localStorage.getItem('redirectDone')) && (dlvl3 !== maindlvl3) && (!userdomain.includes(dlvl3))) {
    console.log("[redol-main] the redirect has not been performed yet");
    switch(domain){
        case domain: 
            console.log("[redol-main] redirect to url:", maindomain);
            window.location.replace("https://"+ maindomain + dpath + anchors);
            localStorage.setItem('redirectDone', 'true');
        break;}}
else {console.log("[redol-main] no reasons for redirect");localStorage.removeItem('redirectDone');}

//  <--------------------------------------- standart redirect links -------------------------------------->
//
//
