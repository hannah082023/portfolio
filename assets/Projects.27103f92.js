import{r as f,o,c as d,a as s,b as m,i as a,u as c,d as i,e as u,F as g,k as b,l as v,f as x}from"./index.5acdd457.js";import{_ as n}from"./Typing.5a118055.js";const j={class:"group flex flex-col justify-center lg:flex-row"},k={class:"flex h-full w-full items-center justify-center overflow-hidden rounded-md shadow lg:shadow-lg"},h=["src"],y={class:"h-full w-full p-4 pb-2"},_={class:"mt-4 flex flex-col justify-center"},w=["href"],$={props:{project:{type:Object,default:()=>({name:"Project",description:"description.",image:""})}},setup(l){let e=f(0);return(p,t)=>(o(),d("div",j,[s("div",k,[s("img",{src:l.project.image,class:"w-full transition-all duration-200 ease-in group-hover:scale-105"},null,8,h)]),s("div",y,[m(n,{class:"mb-2 block text-lg md:text-xl lg:mb-4 lg:text-2xl",text:l.project.name,speed:60,onDone:t[0]||(t[0]=r=>a(e)?e.value++:e++)},null,8,["text"]),c(e)>0?(o(),i(n,{key:0,class:"mb-2 block text-sm text-gray-600 md:text-base",text:l.project.description,speed:40,onDone:t[1]||(t[1]=r=>a(e)?e.value++:e++)},null,8,["text"])):u("",!0),c(e)>1?(o(),i(n,{key:1,class:"block text-sm text-gray-400 md:text-base",text:l.project.skills.join(", "),speed:40,onDone:t[2]||(t[2]=r=>a(e)?e.value++:e++)},null,8,["text"])):u("",!0),s("div",_,[s("a",{href:l.project.url,target:"_blank",rel:"noopener noreferrer",class:"inline-block"},[c(e)>2?(o(),i(n,{key:0,class:"w-full text-blue-400 transition-all duration-200 ease-in hover:text-blue-600",text:l.project.url,speed:40,onDone:t[3]||(t[3]=r=>a(e)?e.value++:e++)},null,8,["text"])):u("",!0)],8,w)])])]))}},B={class:"h-full w-full px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24"},D={class:"py-2"},N=s("div",{class:"opacity-0"},[x(" I'm so cute!"),s("br"),x(" Waku Waku! ")],-1),P={setup(l){return(e,p)=>(o(),d("div",B,[m(n,{text:"My Projects o(^\u25BD^)o",class:"block text-2xl sm:text-3xl lg:text-4xl"}),s("div",D,[(o(!0),d(g,null,b(c(v),(t,r)=>(o(),i($,{key:r,project:t,class:"my-2 w-full rounded-md bg-white bg-opacity-50 p-4 shadow-md shadow-indigo-200"},null,8,["project"]))),128))]),N]))}};export{P as default};