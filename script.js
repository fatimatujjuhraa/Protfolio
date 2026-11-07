document.getElementById("y").textContent=new Date().getFullYear();
const b=document.querySelector(".burger"),n=document.getElementById("m");
b.addEventListener("click",()=>{const o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
const f=document.getElementById("cform");
if(f)f.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(f);
location.href="mailto:fatimatujjuhraa332@gmail.com?subject="+encodeURIComponent("Project enquiry: "+d.get("service"))+"&body="+encodeURIComponent(d.get("msg")+"\n\n"+d.get("name")+"\n"+d.get("email"))});
