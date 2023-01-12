window.onload = function () {

let dolValue = document.getElementById("input")
let hrnValue = document.getElementById("change")
let firstSelect = document.getElementById("select1")
let secondSelect = document.getElementById("select2")
let rates = new Object() 
rates = {
    "USD": 36.57, 
    "EUR": 38.79,
    "UAH": 1
}

function exchange() {
    let inUah = 0
    if (firstSelect.value === secondSelect.value) {
        hrnValue.innerHTML = dolValue.value
    }else if (firstSelect.value === "USD" && secondSelect.value === "UAH") {
        hrnValue.innerHTML = (((dolValue.value * rates[firstSelect.value]) * 100)/100)
    }else if (firstSelect.value === "USD" && secondSelect.value === "EUR") {
        inUah = dolValue.value * rates[firstSelect.value]
        hrnValue.innerHTML = (((inUah / rates[secondSelect.value]) * 100)/100  )
    }else if (firstSelect.value === "EUR" && secondSelect.value === "USD") {
        inUah = dolValue.value * rates[firstSelect.value]
        hrnValue.innerHTML = (((inUah / rates[secondSelect.value]) * 100)/100  )
    }else if (firstSelect.value === "EUR" && secondSelect.value === "UAH") {
        hrnValue.innerHTML = (((dolValue.value * rates[firstSelect.value]) * 100)/100)
    }else if (firstSelect.value === "UAH" && secondSelect.value === "USD") {
        hrnValue.innerHTML = (((dolValue.value / rates[secondSelect.value]) * 100)/100)
    }else if (firstSelect.value === "UAH" && secondSelect.value === "EUR") {
        hrnValue.innerHTML = (((dolValue.value / rates[secondSelect.value]) * 100)/100)
    }
}

dolValue.oninput = function () {
    exchange()
}

firstSelect.oninput = function () {
    exchange()
}

secondSelect.oninput = function () {
    exchange()
}

}