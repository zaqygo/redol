# redol
### redol - a tool for redirecting a domain to userhost without switching to another ip or port.

content:
* [what is it for?](#what-is-it-for?)
* [how it works?](#how-it-works?)
* [customizing for yourself](#customizing-for-yourself)
* [redirect to primary page addon](#redirect-to-primary-page-addon)
* [summary and example](#summary-and-example)
* [embedding](#embedding)
* [bug report](#bug-report)

## what is it for?
it can be used as a redirect to another domain if you do not have access to the nginx/apache conf file.I do not recommend using this for Hosting, 
it is better to negotiate with the administrator for access to nginx/apache conf. If you're doing this dumb redirection like I did back then, 
then get ready for a lot of trouble...
## how it works?
I will explain based on the example above. Work only with domain level 3!\
My script works like this:\
\
**Situation 1:**\
A user has logged in to user1.site.com -> the script checked whether domain level 3 corresponds to the array -> user1 corresponds to the array -> is user1 located in its root directory? -> it is not located in its root directory -> redirect to the path /hosting/user1 -> end of task

<p align="center">
  <img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa210dWJ4bHI1MzBuc2IzcWZlZzBhcnBlZDhmYWhuNTRkdDFqMHZsOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vYLi328b8f6iyUN2fF/giphy.gif'>
</p>

\
**Situation 2:**\
The user entered the address www.site.com/hosting/user1 -> the script checked whether domain level 3 corresponds to the array -> user1 corresponds to the array -> is user1 located in its root directory? -> it is located in its root directory -> domain user1.site.com ? -> no, the domain is not user1.site.com -> redirect to the same path, but with a change of domain level 3 to site1 -> end of task

<p align="center">
  <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGIwNWp2N2gybTFudGg1djNxd2tmeWV2MDZpN2g5Y2R5ODVsenN1MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5GouV525aDaS6uf29r/giphy.gif'>
</p>

## customizing for yourself
You have to create a new one.js where your variables will be stored or downloaded .js from github and insert variables there. My code is probably not optimized at all, but it will do as a base.\
Below you can see which variables can be changed. Just in case, take a look at the code, as your case may not be suitable for my script!
```javascript
// common variables ---->

var dpath2 = '' // --> path to main redirect host folder (you can use window.location.pathname.split('/')[n]; where n is the number of each path; starting from 1);
// example: var dpath2 = '/' + window.location.pathname.split('/')[1] + '/' + window.location.pathname.split('/')[2]; // --> getting path (1 folder + 2 folder in path link)

// common variables ---->


// host variables ---->

// easy part ---->

var maindomain = 'example.com';//'www.example.com'  // --> your primary domain 
var maindlvl2 = 'example.com';  // --> your primary domain but as a second-level domain 
var maindlvl3 = '' ; //'www' // --> domain level 3 (if there is none, leave it empty) 
var hpath = '/patch/to/host';  // --> the path to the hosting path without the destination path
let redirectdomain = ['red1', 'red2', 'red3'];  // --> an array containing domains with a custom level 3 for hosting #--> individual

// easy part ---->

// difficult part ---->

var mainpath = ''; // (i use this -> window.location.pathname.split('/')[n]; where n is where n is the number of hpath + 1 folders) // --> destination path #--> individual
var maindpath2 = ''; // (i use this -> hpath + '/' + mainpath)  // --> full path to hosting using mainpath #--> individual
var maincheckurl = ''; // (i use this -> mainpath+'.'+maindlvl2+maindpath2)  // --> checking that the user is not on the hosting path #--> individual
var turldomain = ''; // (i use this -> mainpath+'.'+maindlvl2)  // --> redirect any domain dlvl3 to mainpath dlvl3 using mainuserpath #--> individual
var turlpath = ''; // (i use this -> hpath + '/' + dlvl3)  // --> full path to hosting using dlvl3 #--> individual
var turl = domain+turlpath;  // --> redirect main page to userhost page

// difficult part ---->

// host variables ---->
```
## redirect to primary page addon
I also wrote an addon for those people who have a lot of level 2 domains. All links that do not match the primary domain will be redirected to the primary domain with the full path. see "redol.js" or "redol.dl2.js"\
**Variable are required to use this function:**\
\
--> **maindomain**<--\
\
*description of the variable above =>*
## summary and example
### After all the settings, we will get such a redirect system
**redol.min.js**
* https://userdomain.site.com/ -> go to the page https://userdomain.site.com/path/to/host/userhost/ (index.html)
* https://userdomain.site.com/#anotherfolder -> go to the page https://userdomain.konataa.ru/path/to/host/userdomain/ to the folder anotherfolder.\
result ——> https://userdomain.site.com/path/to/host/userhost/anotherfolder/
* https://userdomain.site.com/#anothersite.html -> go to the page https://userdomain.konataa.ru/path/to/host/userhost/ to the file anothersite.html.\
result ——> https://userdomain.site.com/path/to/host/userhost/anothersite.html
* https://userdomain.site.com/#$anchor -> go to the page https://userdomain.konataa.ru/path/to/host/userhost with an anchor #anchor.\
result ——> https://userdomain.site.com/path/to/host/userhost/#anchor
* https://userdomain.site.com/#anotherfolder$anchor -> go to the page https://userdomain.konataa.ru/path/to/host/userhost/anotherfolder with an anchor #anchor.\
result ——> https://userdomain.site.com/path/to/host/userhost/anotherfolder/#anchor

<p align="center">
  <img src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWM5YnhxZ2xmb3E4dmswNDF3NG1ibno4Y2w2NnhrajI0NGVmYzExeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZRO3dSwKRVNmStfdD6/giphy.gif'>
  <img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjNyZnF5aTJmOGY5bTJhdGllbWt6Mnh2ZTJ5ZGVsamNjaTdqcGJudiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xkks4ADIsBhnkYXtMe/giphy.gif'>
</p>

**redol.dl2.js**\
*(var maindlvl3 = "www")*
* https://web.site.com/ -> go to the page https://www.site.com/
* https://web.site.com/anypath -> go to the page https://www.site.com/anypath
## embedding
***IMPORTANT!***\
**If you use redol.js or redol.dl2.js then you should embed the script on each site so that it continues to redirect users. Using redol.min.js you must embed in the main html that is output when you enter your domain (https://site.com/index.html)**
### redol.js (contains the code redol.min.js and redol.dl2.js)
```html
<script src='https://raw.githubusercontent.com/zaqygo/redol/refs/heads/main/redol.js'></script>
```
### redol.min.js
```html
<script src='https://raw.githubusercontent.com/zaqygo/redol/refs/heads/main/redol.min.js'></script>
```
### redol.dl2.js
```html
<script src='https://raw.githubusercontent.com/zaqygo/redol/refs/heads/main/redol.dl2.js'></script>
```
## bug report
Write me an email at maezbro8@gmail.com or on yo@lvavilow.ru . I will help you solve the problem.
