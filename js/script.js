function show(id){
    const thePlaceToBe = document.querySelector("#retexPlace div");
    if(thePlaceToBe.style.visibility === "hidden"){
        thePlaceToBe.style.visibility = "visible";
    }
    thePlaceToBe.innerHTML=`<p class="text-white">Test du texte qui pourrait être mis là ${id}</p>`;
    
}

// if(window.matchMedia("(min-width: 600px)").matches){
//     document.getElementById("retexPlace").innerHTML=`<img class="border border-dark border-4 rounded-3" src="../ressources/retex/${id}.png" alt="${id}" width="933px" height="500px"/>` 
// }else{
//     document.getElementById("retexPlace").innerHTML=`<img class="border border-dark border-4 rounded-3" src="../ressources/retex/${id}Responsive.png" alt="${id}" width="933px" height="500px"/>` 
// }
