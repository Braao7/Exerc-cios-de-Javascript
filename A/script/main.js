/* console.log('Aprendendo Javascript')


var nome = "abraao"
var idade = 18
console.log(nome, idade)


/* var num1=prompt('Digite um numero')
var num2=prompt('Digite um numero')
if (num1 > num2){
    console.log(num1 + " É maior que " + num2);
}
if (num1 < num2){
    console.log(num2 + " É maior que " + num1);
}
else if (num1 == num2){
    console.log(num1 + " É igual a " + num2);
}
else{
    console.log('Erro de digitacao')
} */


/* var num1 = Number(prompt('digite um numero'))
var num2 = Number(prompt('digite um numero'))
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
 */


/* let num = 0;
for ( num<=10; num++;){
    console.log(num)
} */


/* function saudacao(name){
    return 'Ola ' + name;
}
var name= prompt('Qual o seu nome:')
saudacao(name) */


/* var pessoa = {
    nome: "Caio",
    idade: 20,
    cidade: "Belo Horizonte"
}
console.log(pessoa)


var filmes = ['Clube de luta', 'Interistelar', 'o carro', 'harry potter', 'Senhor dos aneis']
console.log(filmes.shift())
console.log(filmes.pop()) */


/* var num = 10;
while(num>=0){
    console.log(num);
    num--;
}
 */


/* var string = prompt('digite algo:');
var comp = string.length;
var maiu = string.toUpperCase();
console.log('O comprimento desse texto é:' + comp);
console.log('Em maiusculo fica dessa maneira:' + maiu); */


/* var data = new Date();
var dia = data.getDate()
var mes = data.getMonth() + 1
var ano = data.getFullYear();
console.log("Data atual: " + dia + "/" + mes + "/" + ano); */


/* var dia = new Date().getDay()
switch(dia){
case 0:
    console.log("Domingo")
    break;
case 1:
    console.log("Seg")
    break;
case 2:
    console.log("Ter")
    break;
case 3:
    console.log("Qua")
    break;
case 4:
    console.log("Qui")
    break;
case 5:
    console.log("Sex")
    break;
case 6:
    console.log("Sab")
    break;
} */


/* function Soma(a, b){
    return a+b
}
var a = Number(prompt('Digite um numero:'))
var b = Number(prompt('Digite outro:'))
console.log('Resultado da Soma:' + Soma(a, b)) */


/* function fatorial(x){
    let f = x
    for(let i=1; i<x ;i++){
       f *= i;
    }
    return console.log(f)
}
fatorial(5) */


/* function fibonacci(x){
    let f = 1
    for(let i=0; i<=x;){
        console.log(i)
        g=f+i
        f=i
        i=g
    }
}

fibonacci(1000) */


/* function palindromo(str){
    let revese = str.split('').reverse('').join('');
    return str === revese;
}
console.log(palindromo('ovo')) */


/* var lista = [10,3,6,9,2,4,5,7,1,8];

function ordenacao(l){
    return l.sort((a,b) => a-b);
}

console.log(ordenacao(lista)); */


/* function potenciacao(a,b){
    return Math.pow(a,b)
}
var num1 = Number(prompt())
var num2 = Number(prompt())

console.log(potenciacao(num1,num2)) */


/* l = [1,2,3,4,5,6,7,8,9,10]
function minMax(l){
    return [Math.min(...l), Math.max(...l)]
}

console.log(minMax (l)) */


function calculador(){
    let valor1 = Number(document.querySelector('#Valor1').value)
    let valor2 = Number(document.querySelector('#Valor2').value)
    let operador = document.querySelector('#operador').value
    switch(operador){
        case '+':
            Resultado.textContent = `${valor1 + valor2}`
            break
        case '-':
            Resultado.textContent = `${valor1 - valor2}`
            break
        case '/':
            Resultado.textContent = `${valor1 / valor2}`
            break
        case '*':
            Resultado.textContent = `${valor1 * valor2}`
            break
    }
}
