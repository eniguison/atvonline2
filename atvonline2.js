let data = new Date();

//data do evento = 20/11/2021
let eventodia = 20;
let eventomes = 11;
let eventoano = 2021; 

let dia = data.getDate();                     
let mes = data.getMonth();                
let ano = data.getFullYear();
let participantes = 98;
let idade = 19;
let part = ["Fulano", "Fulano2", "Fulano3"];

if (eventomes>=mes && eventodia>dia && eventoano>=ano){
    if(participantes<100){
        console.log("Seguindo para página de cadastro!");
        
        if(idade>18){
            console.log("Cadastro realizado com sucesso!");
            console.log("Essa é a lista de participantes: " + part);
        }else{
            console.log("Somente maiores de 18 podem se cadastrar!");
        }
    }else{
        console.log("Não há mais vagas para o evento!");
    }
}else {
    console.log('Período de evento inválido!');
}