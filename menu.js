const menu=document.createElement('nav');
let arrayMenu=['/localhost/threePage.html','/localhost/twoPage.html','/localhost/'];
function eachMenu(x){
    return '<li><a href='+x[0]+'>'+ x[0] + '</a></li>'+'<li><a href='+x[1]+'>'+ x[1]+ '</a></li>'+'<li><a href='+x[2]+'>'+ x[2]+ '</a></li>';
}
menu.innerHTML=eachMenu(arrayMenu);
menu.style.cssText=`display:fixed;position:absolute;top:15px;right:1%;`;
document.querySelector('body').append(menu);
