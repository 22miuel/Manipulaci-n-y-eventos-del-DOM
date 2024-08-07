const container= document.querySelector("#container");

const para = document.createElement("p");
para.textContent= "hey i'm red!";
para.style.color = "red";

container.appendChild(para);

const header = document.createElement("h3");
header.textContent= "I'm a blue h3!";
header.style.color = "blue";
container.appendChild(header);

const div = document.createElement("div")
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";
container.appendChild(div);

const h1 =document.createElement("h1");
h1.textContent= "that says 'I'm in a div";
div.appendChild(h1);

const p2 =document.createElement("p");
p2.textContent= "that says 'ME TOO!'";
div.appendChild(p2);