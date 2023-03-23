const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


form.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {

   event.preventDefault();//esto previene que el evento sumit este recarganodse y pueda aparecer el resultado y no se siga cargando
   const sumaInputs = input1.value + input2.value;
   pResult.innerText = "Resultado: " + sumaInputs;
  // console.log(Number(input1.value) + parseInt(input2.value));//para sumar los numeros no aparezca strings

}