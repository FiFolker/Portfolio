const separator = ";";
const separatorList = "*";
const listOfParts = ["cahierDesCharges", "livrable", "methodesEtOutils", "competences"];

function show(id, page, title){
	const thePlaceToBe = document.querySelector(".retex"); 
	fetch(`../ressources/data/${page}/${id}.txt`) // lis le fichier
	.then(response => {
		if(response.ok){
			return response.text();
		}else{
			console.log("Erreur dans la réponse ...")
			return 0;
		}
	})
	.then(content => {
		if(content == 0){
			alert(`ERREUR dans le chargement du fichier ${id}`);
		}else{
			if(thePlaceToBe.style.visibility === "hidden"){ // rend visible si premier clique car invisible par défaut
				thePlaceToBe.style.visibility = "visible";
			}
			document.querySelector(".retex h3").textContent = `${title}`;
			formatText(content, id, page);
		}
		
	})


}

function formatText(content, id, page){
	const splitedContent = content.split(separator);
	let listOfContent;
	let selectedPart;
	
	for(let i in splitedContent){ // parcours le contenu splité en 4 
		selectedPart = document.querySelector(`.${listOfParts[i]} ul`);
		selectedPart.innerHTML = "";
		if(listOfParts[i] === listOfParts[1]){
			listOfContent = splitedContent[i].split(separatorList);
			for(let element of listOfContent){ // parcours le contenu splité maintenant en liste
				if(element.includes('.png') || element.includes('.jpg')){
					selectedPart.innerHTML += `<img src="../ressources/retex/${page}/${id}/${element}" class="m-3 col-3 hoverImage rounded">`;
					
				}
			}
		}else{
			listOfContent = splitedContent[i].split(separatorList);
			for(let element of listOfContent){ // parcours le contenu splité maintenant en liste
				selectedPart.innerHTML += `<li>${element}</li>`;
			}
		}
	}
	
}

