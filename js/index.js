
const inputNome = document.getElementById("nome");
console.log(inputNome);
//
//captura button
const buttonLogar = document.querySelector("button");
console.log(buttonLogar);

function logar () {
localStorage.setItem("nomeDoVisitante", inputNome.value);
//1-guardar nome do visitante no navegador
/* cookie / sessionStorage / localStorage (melhor)
informação salva no navegador*/
 window.location = "feed.html"
//2-direcionar visitante ao fee.html
}

buttonLogar.addEventListener("click", logar());  

//captura tds e retorna em array
/*const selections = document.querySelectorAll(selection);
console.log(selections);*/ 
