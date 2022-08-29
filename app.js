cuadro = document.getElementById("content");
div = document.createElement("div");

array = ["red", "blue", "yellow"];

for (let i = 0; i < 600; i++) {
    div = document.createElement("div")
    cuadro.children[i].classList.add("square")
    cuadro.appendChild(div)
    
    cuadro.children[i].addEventListener("mouseover", ()  => {
        cuadro.children[i].style.backgroundColor = array[Math.floor(Math.random() * array.length)]
        cuadro.children[i].style.transition = "all 0.1s"
        
    })

    cuadro.children[i].addEventListener("mouseout", () => {
        cuadro.children[i].style.backgroundColor = "white"
        cuadro.children[i].style.transition = "all 1s"
    })
    
}

console.log(cuadro)