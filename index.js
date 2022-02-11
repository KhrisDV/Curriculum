function imprimehola() {
    console.log ("Hola");
    }


function main (){
console.log ("Starting");
const titulo = document.querySelector ("h1");
titulo.addEventListener("pointerenter", imprimehola);
const elements = Array.from (document.body.querySelectorAll ("*")   
);
console.log (elements)
}


window.addEventListener ("load", main)