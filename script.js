let cities = document.getElementById("location")
let citiestwo = document.getElementById("locationtwo")
let navbar = document.getElementById("nav")
let hamb = document.getElementById("hamburgerIcon")
let menulisttwo = document.getElementById("menulisttwo")
let secloc = document.getElementById("mainloc")
let about = document.getElementById("about")
let contact = document.getElementById("contacttwo")
let hometwo = document.getElementById("hometwo")
let reservationbtn = document.getElementById("reservationbtn")
let resevationkey = document.getElementById("resevationkey")
let fullName = document.getElementById("fullName")
let reservdate = document.getElementById("reservdate")
let reservtime = document.getElementById("reservtime")
let guestCount = document.getElementById("guest")
let reslocation = document.getElementById("reslocation")
let res0 = document.getElementById("res0")
let res1 = document.getElementById("res1")
let res2 = document.getElementById("res2")
let res3 = document.getElementById("res3")
let res4 = document.getElementById("res4")
let res5 = document.getElementById("res5")

let sections = document.querySelectorAll("section")
let navlink = document.querySelectorAll("ul li a")

let x1 = document.getElementById("x1")
let x2 = document.getElementById("x2")

let submitbtn = document.getElementById("confirmReserv")
let success = document.getElementById("success")



scrollFunction=()=>{
    if(document.body.scrollTop >20 || document.documentElement.scrollTop>20){
        navbar.style.background = "black";
        navbar.style.transition = '0.5s'
    } else {
        navbar.style.background="none"
    }
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop -50;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlink.forEach(links =>{
                links.classList.remove('actv');
                document.querySelector('ul li a[href*=' +id + ']').classList.add('actv')
            })
        }
    })

}

window.onscroll = ()=>{scrollFunction()}

hamb.addEventListener("click", ()=>{
    if(menulisttwo.style.left=="-100%"){
        menulisttwo.style.left="0%"
    } else{
        menulisttwo.style.left="-100%"
    }
})


cities.addEventListener("click",()=>{
    if(secloc.style.display == "none"){
        secloc.style.display = "block"
        cities.style.color ='rgb(255, 217, 2)'
        resevationkey.style.display="none"
    } else {
        secloc.style.display = "none"
        cities.style.color =''
    }
  
})

x1.addEventListener("click", ()=>{
    secloc.style.display = "none"
    cities.style.color =''
})

citiestwo.addEventListener("click",()=>{
    if(secloc.style.display == "none"){
        secloc.style.display = "block"
        resevationkey.style.display="none"
        menulisttwo.style.left="-100%"
    } else {
        secloc.style.display = "none"
        menulisttwo.style.left="-100%"
    }
  
})
about.addEventListener("click",()=>{
        menulisttwo.style.left="-100%" 
})
contact.addEventListener("click",()=>{
    menulisttwo.style.left="-100%" 
})
hometwo.addEventListener("click",()=>{
    menulisttwo.style.left="-100%" 
})
reslocation.addEventListener("focus",()=>{
    res0.style.visibility = "visible"
})

reslocation.addEventListener("blur",()=>{
    res0.style.visibility = "hidden"
})

fullName.addEventListener("focus", ()=>{
    res2.style.visibility = "visible"
    
})
fullName.addEventListener("blur", ()=>{
    res2.style.visibility = "hidden"
})


reservdate.addEventListener("focus", ()=>{
    res3.style.visibility = "visible"
})
reservdate.addEventListener("blur", ()=>{
    res3.style.visibility = "hidden"
})

reservtime.addEventListener("focus", ()=>{
    res4.style.visibility = "visible"
})
reservtime.addEventListener("blur", ()=>{
    res4.style.visibility = "hidden"
})

guestCount.addEventListener("focus", ()=>{
    res5.style.visibility = "visible"
})
guestCount.addEventListener("blur", ()=>{
    res5.style.visibility = "hidden"
})

reservationbtn.addEventListener("click", ()=>{
    if(resevationkey.style.display=="none"){
        resevationkey.style.display="block"
        secloc.style.display = "none"
    } else {
        resevationkey.style.display="none"
    }
})

x2.addEventListener("click", ()=>{
    resevationkey.style.display="none"
})

submitbtn.addEventListener("click", ()=>{

    if(reslocation.value=="" || fullName.value=="" || reservdate.value=="" || reservtime.value=="" || guestCount.value==""){
       
    if(reslocation.value==""){
        res0.innerHTML ="Please select Location"
        res0.style.visibility="visible"
        res0.style.color="red"
    }else{
        res0.innerHTML=""
    }

    if(fullName.value==""){
        res2.innerHTML = "Please Enter your Name"
        res2.style.visibility="visible"
        res2.style.color="red"
    } else {
        res2.innerHTML = ""
    }
    if(reservdate.value==""){
        res3.innerHTML = "Please Select Date"
        res3.style.visibility="visible"
        res3.style.color="red"
    } else {
        res3.innerHTML = ""
    }
    if(reservtime.value==""){
        res4.innerHTML = "Please Select Time"
        res4.style.visibility="visible"
        res4.style.color="red"
    } else {
        res4.innerHTML = ""
    } 
    if(guestCount.value==""){
        res5.innerHTML = "Please Select No. of Guest"
        res5.style.visibility="visible"
        res5.style.color="red"
    } else {
        res5.innerHTML = ""
    } 

    } else {
        success.style.display="block"
    }
})

