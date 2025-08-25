precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

parrafo = document.querySelector('.cantidad')
cuenta = parrafo.innerHTML

totalAPagar = document.querySelector("p .valor-total")
valorTotal = Number(totalAPagar.innerHTML)
numb1 = Number(cuenta)
numb2 = Number(precio)
valorTotal = numb1*numb2
totalAPagar.innerHTML = valorTotal