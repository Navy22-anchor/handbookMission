const left = document.getElementsByClassName("left");
const B = document.getElementById("main_input--text");

function MakeTODO() {
    const value = B.value;

    const A = document.createElement("p");
    A.className = "main_TODO";
    A.textContent = value;
    left[0].append(A)

    const button = document.createElement("button")
    button.className = "left_button"
    button.textContent = "DONE!"
    button.setAttribute("onclick","Delet(event)")
    A.append(button)
}
const right = document.getElementsByClassName("right")
function Delet(event) {
    const A = event.target

    const B = A.parentNode

    right[0].append(B)

    A.textContent = "Delet"
    A.className = "Delet_button"
    A.setAttribute("onclick","Delet_2(event)")
}

function Delet_2(event) {
    const A = event.target
    const B = A.parentNode
    B.remove()
}

B.addEventListener('keydown', (event) => {if (event.key === 'Enter') {MakeTODO()}})