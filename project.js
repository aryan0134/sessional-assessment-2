var navList=document.getElementById("nav-list");
var navIcon=document.getElementById("nav-icon");
navList.style.maxHeight="0px";
function toggleMenu(){
    if(navList.style.maxHeight=="0px"){
        navList.style.maxHeight="260px";
    }
    else{
        navList.style.maxHeight="0px";
    }
}

navIcon.addEventListener("click",toggleMenu);

const xhr=new XMLHttpRequest();

xhr.onload=function(){
    if(this.status===200){
    // console.log(this.responseText);
    const resp=this.responseText;
    var x=1;
    for(let i in resp){
       const objjs=JSON.parse(i);
       console.log(objjs.title);
    }
    }
};

xhr.open('get','https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11');
xhr.send();
