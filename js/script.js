function show(id){
    if(window.matchMedia("(min-width: 600px)").matches){
        document.getElementById("retexPlace").innerHTML=`<img class="border border-dark border-4 rounded-3" src="/ressources/retex/${id}.png" alt="${id}" width="933px" height="500px"/>` 
    }else{
        document.getElementById("retexPlace").innerHTML=`<img class="border border-dark border-4 rounded-3" src="/ressources/retex/${id}Responsive.png" alt="${id}" width="933px" height="500px"/>` 
    }
}


/*let content = document.getElementsByClassName("rotate");
let btn = document.getElementsByClassName("main-section");
let rot = 0;
btn.addEventListener("click", function() {
  content.style = 'transform: rotate(' + rot + 'deg)';
  rot += 90;
  console.log(rot)
});*/

