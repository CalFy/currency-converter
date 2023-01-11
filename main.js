window.onload = function () {

let dolValue = document.getElementById("input")
let hrnValue = document.getElementById("change")
let rates = 36.76

function exchange() {
    hrnValue.innerHTML = Math.ceil(((dolValue.value * rates) * 100)/100)
}

dolValue.oninput = function () {
    exchange()
}

console.log(dolValue)

}