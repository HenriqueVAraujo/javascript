//var frase = "hello world";
//console.log(frase.toLocaleLowerCase()); deixa toda a string minuscula
//console.log(frase.toLocaleUpperCase()); Deixa toda a string maiuscula

//var nome = "Henrique Vasconcelos Araújo";
//console.log("Seja Bem Vindo Sr " + nome );   concatenando variaveis

//var n1 = 10; 
//console.log( "asd"+"sdf" +1425+"-"+1519); concatenando variaveis

//var lista = ["maça", "pera", "uva"]; definindo uma lista
//lista.push("laranja"); comando para acrescentar item na lista
//lista.pop(); retirando o ultimo item da lista
//console.log(lista.length); fala a quantidade de itens na lista
//console.log(lista.reverse); mostra a lista de tras para frente
//console.log(lista.join("")); adiciona separadores da forma que quiser

//var fruta = {nome:"maça", cor:"vermelha"}; definindo dicionario
//console.log(fruta); 

//var frutas = [{nome:"maça", cor:"vermelha"}.{nome:"uva", cor:"roxo"}];
//console.log(frutas);
/*
var idade = 18;   definindo condicionais usando o parametro if
if(idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
 */
/* definindo condiciona usando o comando pronpt para receber os dados do usuario
var idade = prompt("Qual a sua idade?")
if(idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/
/* definindo estrutura de repetição com while
var count = 0
while(count<=5){
    console.log(count);
    count++;
};
*/

/* definindo estrutura de repetição usando for
var count;
for(count=0; count<=5;count++){
    alert(count);
};
*/
/* utilizando a data local do pc
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
*/
/* Criando funções

*/
/* 
function soma(n1+n2){
    return n1+n2;
};

definindo função com variavel global
var validar = true;
function validaIdade(idade){
    if(idade>=18){
        validar = true;
    }else{
        validar=false;
    };
    return validar;
};
var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);
*/
/*function botao(){
    alert("Obrigado por clicar!");
};
 */
/* 
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
};
*/
/*
function redirecionar(){
    window.open("#");
    window.location.href = "#";
};
*/
/*function trocar(){
    document.getElementById("troca").innerHTML = "Obrigado por passar o mouse";
};

function voltar(){
    document.getElementById("troca").innerHTML = "Passe o mouse aqui";
};

function load(){
    alert("Pagina carregada");
};

function funçãochange(elemento){
    console.log(elemento.value);
};
 */
