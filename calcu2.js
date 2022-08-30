let c8 = document.getElementById("c8");
let f9 = document.getElementById("f9");
let d12 = document.getElementById("d12");
let e12 = documnt.getElementById("e12");

let d13 = document.getElementById("d13");
let d14 = document.getElementById("d14");
let d15 = document.getElementById("d15");
let d16 = document.getElementById("d16");
let g12 = document.getElementById("g12");
let g13 = document.getElementById("g13");
let g14 = document.getElementById("g14");
let g15 = document.getElementById("g15");
let g16 = document.getElementById("g16");
let lectura_de_f9;
let lectura_de_e12;
let lectura_de_c8;
id4.addEventListener("click", botoncalcular);

function botoncalcular() {

  lectura_de_c8 = parseInt(c8.value);
  lectura_de_f9 = parseInt(f9.value);
  lectura_de_e12 = parseInt(e12.value);

  
  f9.innerHTML = ("$"+ lectura_de_c8 /240 );  
  d12.innerHTML = ("$"+lectura_de_f9 * 1.25) ;
  id6.innerHTML = ("$"+lectura_de_id1 /240);
 
}
