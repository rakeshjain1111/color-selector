let nav=document.getElementsByClassName("nav");
let navLinks = document.getElementsByClassName("nav-link");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", " ");
        this.className += " active";
     
    });
    
}


let menu =document.querySelectorAll(".nav .nav-link");
 let loader = document.getElementById("preloader");
for(let m of menu){
    
   m.addEventListener("click" ,(e) => {
      let allSection = document.querySelectorAll(".main .color");
        for (let s of allSection) {
            if(s.getAttribute('data-number')=== m.getAttribute('data-number')){
                
               
                loader.addEventListener("load",()=>{
                 loader.style.display="none";
                  console.log(s);
            });


                s.style.display = "block";
               
                
            }else{
                s.style.display="none";
              
            }
        }



   });
}









// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }