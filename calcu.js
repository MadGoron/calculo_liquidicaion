let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");
let id3 = document.getElementById("id3");
let lectura_de_id1;
let lectura_de_id2;
let id4 = document.getElementById("id4");
let id5 = document.getElementById("id5");
let id6 = document.getElementById("id6")
id4.addEventListener("click", botoncalcular);

function botoncalcular() {

  lectura_de_id1 = parseInt(id1.value);
  lectura_de_id2 = parseInt(id2.value);

  
    id5.innerHTML = ("$"+lectura_de_id1 /30) ;
    id6.innerHTML = ("$"+lectura_de_id1 /240);
 
}
