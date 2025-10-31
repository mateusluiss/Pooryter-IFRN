<<<<<<< HEAD
btnPostar.onClick = postar;

function postar(){
=======
/**
 * Associa o clique do botão à execução da função "postar()"
 */
btnPostar.onclick = postar;

function postar(){
    // Cria elementos HTML e os armazena em variáveis
>>>>>>> 5629f7bbf0e824ffbe8bc9c2b8ea86aaf7771f92
    let post = document.createElement("article");
    let title = document.createElement("h3");
    let text = document.createElement("p");

<<<<<<< HEAD
    title.innerText = new Date();
    text.innerText = msg.value;
    msg.value = "";

    post.appendChild(title);
    post.appendChild(text);
=======
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
>>>>>>> 5629f7bbf0e824ffbe8bc9c2b8ea86aaf7771f92
    postagens.appendChild(post);
}