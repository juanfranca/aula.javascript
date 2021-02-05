


function clicando(){
    alert("Somenthing is going to happen")
     document.getElementById("h3check").innerHTML = "Olá"
    
}
function redirecionar(){ 
    window.open("https://www.youtube.com/")
    //Direciona para outra página \/
    // window.location.href("https://www.youtube.com/") 
}
function mouse(elemento){ 
    // document.getElementById("mousemove").innerHTML = "Did you like it?"
    elemento.innerHTML = "Did you like it?"
    
}
function voltar(elemento){ 
    // document.getElementById("mousemove").innerHTML = "Try again"
    elemento.innerHTML = "Try again"
}
function load(){ 
    alert('Página carregada.')
}
function change(elemento){ 
    console.log(elemento.value)

}
// function validarIdade(idade){ 
//     var validar;
//     if(idade>=18){ 
//         validar= true;
//     }
//     else{ 
//         validar = false;
//     }
//     return validar;
// }
// var idade = prompt("Are you an adult? Let me check your age")
// console.log(validarIdade(idade));

// function soma(n1, n2){ 
//     return n1+n2
// }
// alert(soma(5,36));

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }
// alert(setReplace("Vai Japão", "Japão", "Brasil"));



//-------------------
// var d= new Date()
// alert(d.getMinutes())
/*------------
REPETIÇÕES
var count;
var tabuada = prompt("Qual a tabuada que você deseja?")
for(count= 0; count<=10;count++){ 
    console.log(tabuada + "x"+count +"="+tabuada*count)
} */
// var count = 0;
// while(count<= 5){ 
//     console.log(count);
//     count++
// }

/*--------------------
CONDICIONAIS
var idade = prompt("Qual a sua idade?")
if(idade >=18){ 
    alert('Você é maior de idade.')
}
else{ 
   alert(' Você é menor de idade')
}
*/
/*-------------------------------
ARRAYS E DICIONÁRIO
*/
// var frutas =[{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
// console.log(frutas)
// alert(frutas[0].nome)

// var fruta ={nome:"maçã", cor:"vermelha"}
// console.log(fruta)


// var lista = ["maçã", "pera", "laranja"];
// lista.push("uva")
// lista.pop()
// console.log(lista.length)
// console.log(lista.reverse())
// console.log(lista.toString()) 
// console.log(lista.join(" - "))
/* -----------------------------------
INTRODUÇÃO
*/

// var nome = "Juan França"
// var idade = 26
// var idade2 = 10
// var frase = "O Japão é o melhor time de futebol do mundo!"
// alert("Meu nome é "+ nome+ " e tenho "+idade+ " anos")
// alert(idade+idade2)
// ****Comando para reposicionar algum elemento por outro devidamente especificado*****
// console.log(frase.replace("Japão", "Brasil"))
// console.log(nome)
// console.log(idade+idade2)
// console.log(frase.toUpperCase())
// console.log(frase.toLowerCase())

