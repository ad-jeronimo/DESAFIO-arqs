//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];  /* alterar em outra versão para tamanho dinamico */   
function adicionarAmigo () { 
         
        if(document.getElementById("amigo").value == ""){
            alert('Por favor, preencha o campo nome');
            document.getElementById("amigo").focus();    /* retorna para o campo a ser preenchido */     
            } 
    else { 
        let campoNome = document.getElementById("amigo").value;    
        amigos.push(campoNome);
         console.log('o nome incluido no array = ${campoNome}');
        document.getElementById("amigo").value = '';
    }
}

 /* 3 - Implemente uma função para atualizar a lista de amigos */
 function atualizarListaAmigos () {      
    /* selecionar um elemento HTML pelo seu ID. */
    let listaAmigos = document.getElementById('listaAmigos');
     for(var a = 0; a < amigos.length; a++){
        let nome = document.createElement('li');
        nome.appendChild(document.createTextNode(amigos[a]));
        listaAmigos.appendChild(nome);
        
    }
 }

 /* Implementa uma função para sortear os amigos */
 function sortearAmigo ( ) {
        if (amigos.length == 0) {
            alert("Lista de amigos está vazia");
        }
            else {
                let elemento = amigos[Math. floor(Math. random() * amigos.length)];
                               console.log(`o indice gerado  é ${elemento}!`); //até aqui funciona  
                document.getElementById('resultado').innerHTML = 'Nome sorteado: ' + elemento;               
            }
        }

     