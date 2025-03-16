console.log("[redol] started");
//
//
//  common variables ---->

var domain = window.location.hostname;
var dlvl2 = location.hostname.split('.')[1]+'.'+location.hostname.split('.')[2];
var dlvl3 = location.hostname.split('.')[0];
var dpath = window.location.pathname;
var dpath2 = '/' + window.location.pathname.split('/')[1] + '/' + window.location.pathname.split('/')[2];
var checkurl = domain + dpath2;
var anchors = window.location.hash.substring();
var hostingfp = (anchors.replace(/\#/g, '')).replace(/\$/g, '#');

//  common variables ---->
//
//
//  host variables ---->

var maindomain = 'www.site.com';
var maindlvl2 = 'site.com';
var maindlvl3 = 'www';
var hpath = '/hosting';
var mainpath = window.location.pathname.split('/')[2];
var maindpath2 = hpath + '/' + mainpath;
var maincheckurl = mainpath+'.'+maindlvl2+maindpath2;
var turldomain = mainpath+'.'+maindlvl2;
var turlpath = hpath + '/' + dlvl3;
var turl = domain+turlpath;
let redirectdomain = ['user1', 'user2', 'user3'];

//  host variables ---->
//
//
//  <--------------------------------------- hosting redirect links --------------------------------------->

if ((!localStorage.getItem('redirectDone')) && (checkurl !== maincheckurl) && (dlvl2 == maindlvl2)) {
    var targetUrl = "https://"+turl;
    var targetDomain = "https://"+turldomain;
    console.log("[redol] the redirect has not been performed yet");
    if ((dlvl3 !== maindlvl3) && (redirectdomain.includes(dlvl3))) {
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
//  <----------------------------------------- addon redirect links --------------------------------------->

if ((!localStorage.getItem('redirectDone')) && (dlvl3 !== maindlvl3) && (dlvl2 !== maindlvl2) && (!redirectdomain.includes(dlvl3))) {
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
// tested on konataa.ru | the script is no longer working
