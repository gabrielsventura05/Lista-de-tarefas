  let tarefas = [];


function adicionarTarefa(){
  
  

    
    let mensagemSucesso= "Tarefa adicionada com sucesso";
    
    //pega o id do input
    let inputTarefa = document.getElementById("inputTarefa");
    
    //pega o valor do input, que o usuário digitou e coloca na variavel tarefa
    let tarefa = inputTarefa.value.trim(); //trim tira o espaço que estiver antes do valor do input.

     if (tarefa == "") {
        
  

        let mensagemErro = "Campo vazio , digite uma tarefa";
     
        document.getElementById("mensagem").style.color = "red";

        document.getElementById("mensagem").textContent = mensagemErro;
    } else {

    console.log(tarefa);
    //pega o id do paragarafo e coloca o texto da mensagem
    document.getElementById("mensagem").textContent = mensagemSucesso;
     tarefas.push(tarefa);
     renderizarTarefas();

   
   
    
  

    }

    

      inputTarefa.value = "";
}

function renderizarTarefas() {
     //pega o id da lista nao ordenada (ul)
    const listaTarefas = document.getElementById("listaTarefas");
    
    listaTarefas.innerHTML = "";

  

    
    
    for(let i = 0; i < tarefas.length; i++){

         //essa variavel cria os elementos li dentro do ul
            let novaTarefa = document.createElement("li");
             //pega o conteudo da tarefa (input) e coloca na variável que está com os li
            novaTarefa.textContent = tarefas[i];
              //cria elemtnos filho
            listaTarefas.appendChild(novaTarefa);

            //criando botao editar dentro do elemento li
            let botaoEditar = document.createElement("button");
            botaoEditar.className = "editar";
            botaoEditar.textContent = "Editar";
              botaoEditar.onclick = () => editarTarefa(i);
            
            novaTarefa.appendChild(botaoEditar);

         //criando botao remover dentro elemento li
            let botaoRemover = document.createElement("button");
            botaoRemover.className = "remover";
            botaoRemover.textContent = "Remover";
              botaoRemover.onclick = () => removerTarefa(i);
            novaTarefa.appendChild(botaoRemover);

       
        }
        
}

function editarTarefa(i) {
   let tarefaEditada =  prompt("Editar tarefa");
   if (tarefaEditada.trim() !== "") {

    tarefas[i] = tarefaEditada;

    let mensagemEditada = "Tarefa editada !";

     document.getElementById("mensagem").style.color = "green";

        document.getElementById("mensagem").textContent = mensagemEditada;
    renderizarTarefas();
   }
}


function removerTarefa(i){
  //essa funcao remove o indice atual do array
    tarefas.splice(i, 1);

     let mensagemExcluida = "Tarefa removida!";

     document.getElementById("mensagem").style.color = "green";

        document.getElementById("mensagem").textContent = mensagemExcluida;
   
    renderizarTarefas();

}

function limparLista() {
    tarefas.length = 0//zerando a lista
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}



   