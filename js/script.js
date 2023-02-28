const separator = ";";
const separatorList = "*";
const listOfParts = ["cahierDesCharges", "livrable", "methodesEtOutils", "competences"];

function show(id){
	const thePlaceToBe = document.querySelector(".retex"); 

	if(thePlaceToBe.style.visibility === "hidden"){ // rend visible si premier clique car invisible par défaut
		thePlaceToBe.style.visibility = "visible";
	}else{

	}


	fetch(`/ressources/data/${id}.txt`) // lis le fichier
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
			document.querySelector(".retex h3").textContent = `${capitalizeFirstLetter(id)}`;
			formatText(content);
		}
		
	})	

}

function formatText(content){
	const splitedContent = content.split(separator);
	let listOfContent;
	let selectedPart;
	
	for(let i in splitedContent){ // parcours le contenu splité en 4 
		selectedPart = document.querySelector(`.${listOfParts[i]} ul`);
		selectedPart.innerHTML = "";
		listOfContent = splitedContent[i].split(separatorList);
		for(let element of listOfContent){ // parcours le contenu splité maintenant en liste
			selectedPart.innerHTML += `<li>${element}</li>`;
		}
		
	}
	
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}