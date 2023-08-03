const ms = document.querySelectorAll('img')

ms.forEach(m => {
    m.style.display = "none"
})


const table = document.querySelector('table')

table.addEventListener('click', function(event){
    const elementoClicado = event.target
    if(elementoClicado.classList.contains('marca')){
        const p = document.createElement('img')
        console.log(p)
        p.src = './assets/circulo.png'
        elementoClicado.append(p)
    }
})



function soma(n1, n2) {
    let result = n1 + n2
    return result
}

soma(1, 2)

const numbers = [1, 2, 3, 4]

const forEach = function (arr, func) {
    for(let i = 0; i < arr.length; i++) {
        func(arr[i])
    }
}

forEach(numbers, function (number) {
    console.log(number + 1)
})

console.log(window.document.body.addEventListener('click', function( ){
    alert('ola')
}))