precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

parrafo = document.querySelector('.cantidad')
cuenta = parrafo.innerHTML

let botonSumar = document.querySelector("#btnSuma")

botonSumar.addEventListener("click", ()=>{
    totalAPagar = document.querySelector("#valor-total")
    valorTotal = Number(totalAPagar.innerHTML)
    numb1 = Number(cuenta)
    numb2 = Number(precio)
    valorTotal = numb1*numb2
    totalAPagar.innerHTML = valorTotal 
})

let botonRestar = document.querySelector("#btnResta")

botonRestar.addEventListener("click", ()=>{
    totalAPagar = document.querySelector("#valor-total")
    valorTotal = Number(totalAPagar.innerHTML)
    numb1 = Number(cuenta)
    numb2 = Number(precio)
    valorTotal = numb1*numb2
    totalAPagar.innerHTML = valorTotal 
})