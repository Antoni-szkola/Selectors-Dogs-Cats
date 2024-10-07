let zainteresowania = []

for (let i = 0; i < 5; i++) {
    const zainteresowanie = prompt("Podaj swoje zainteresowanie: ")
    zainteresowania.push(zainteresowanie)
}

const ol = document.getElementById("lista")

zainteresowania.forEach(zainteresowanie => {
    const li = document.createElement("li")
    li.innerText = zainteresowanie
    ol.appendChild(li)
})