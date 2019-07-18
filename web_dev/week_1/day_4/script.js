//1
const container = document.getElementById("container");

//2
const container2 = document.querySelector("#container");

//3 
const seconds = document.querySelectorAll(".second");

//4
const li = document.getElementsByTagName("ol")[0].querySelector(".third");

//5
document.getElementById('container').innerText = "Hello!";

const footer = document.querySelector(".footer");

//6
footer.classList.add("main");

//7
footer.classList.remove("main");

//8
const newLi = document.createElement("li");

//9
newLi.innerText = "four";

//10
document.querySelector("ul").appendChild(newLi);

//11
const lis = document.getElementsByTagName("ol")[0].getElementsByTagName("li");

for (let i = 0; i < lis.length; i++) {
  lis[i].style.backgroundColor = "green";
}

//12 
document.removeChild(footer);