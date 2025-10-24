btnPostar.onClick = postar;

function postar(){
    let post = document.createElement("article");
    let title = document.createElement("h3");
    let text = document.createElement("p");

    title.innerText = new Date();
    text.innerText = msg.value;

    post.appendChild(title);
    post.appendChild(text);
    postagens.appendChild(post);
}