/**
 * Associa o clique do botão à execução da função "postar()"
 */
btnPostar.onclick = postar;

function postar(){
    // Cria elementos HTML e os armazena em variáveis
    let post = document.createElement("article");
    let title = document.createElement("h3");
    let text = document.createElement("p");

    /**
     * Define o título da postagem
     * - Uma vez que não temos banco de dados para recuperar o nome de usuário logado
     */ 
    title.innerText = new Date(); // new Date() retorna a data e hora atual
    // Atribui o conteúdo da textarea#msg para a tag <p> que criamos
    text.innerText = msg.value;
    msg.value = ""; // Apaga o conteúdo do textarea#msg

    // Aninha os elementos <h3> e <p> à tag <article>
    post.appendChild(title);
    post.appendChild(text);

    // Aninha o <article> que criamos à section#postagens
    postagens.appendChild(post);
}