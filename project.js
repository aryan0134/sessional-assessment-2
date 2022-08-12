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

var btn=document.getElementById("nightmode");
var icons=document.getElementsByClassName("baby");
var bg=document.getElementById("homename");
var ab=document.getElementById("about");
var skill=document.getElementById("Blog");
var education=document.getElementById("Api");
var contact=document.getElementById("contact");
var count=0;
function toggleMode(){
    if(count%2==0){
        bg.style.background="black";
        bg.style.transition="ease-in-out 1s";
        ab.style.background="black";
        ab.style.transition="ease-in-out 1s";
        skill.style.background="black";
        skill.style.transition="ease-in-out 1s";
        education.style.backgroundColor="black";
        education.style.transition="ease-in-out 1s";
        contact.style.background="black";
        contact.style.transition="ease-in-out 1s";
        nightmode.innerHTML='<i class="fa-solid fa-sun fa-2x baby"></i>'
        console.log(count+" Dark Mode");


    }
    else{
        bg.style.background="linear-gradient(30deg,#42E695,#3BB2B8)";
        bg.style.transition="ease-in-out 1s";
        ab.style.background="linear-gradient( #2b5876 ,#4e4376)";
        ab.style.transition="ease-in-out 1s";
        skill.style.background="linear-gradient( #bdc3c7 , #2c3e50)";
        skill.style.transition="ease-in-out 1s";
        education.style.backgroundColor="white";
        education.style.transition="ease-in-out 1s";
        contact.style.background="linear-gradient( #bdc3c7 , #2c3e50)";
        contact.style.transition="ease-in-out 1s";
        nightmode.innerHTML='<i class="fa-solid fa-moon fa-2x "></i>'
        console.log(count+" Light Mode");
    }
    count+=1;
}
btn.addEventListener("click",toggleMode)
document.getElementsByClassName("page1").addEventListener(onclick,()=>{
    const xhr=new XMLHttpRequest();

    xhr.open('get','https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11');
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            var x=1
            for(let i in response.title){
                document.getElementById("title1").innerHTML=i
                console.log(i)
            }
            // let output = ''
            //     for(let i=0; i < response.items.length; i++) {
            //         console.log(i)
            //     }
        }
    }
    xhr.send();
})
