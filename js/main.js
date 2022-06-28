const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const inputs = document.querySelectorAll('input')
const inputPrice = document.querySelector('.input-price')

const radioType = document.querySelectorAll('input[name="type"]')
const radioBuilding = document.querySelectorAll('input[name="building"]')
const radioRooms = document.querySelectorAll('input[name="rooms"]')

const inputCheckbox = document.querySelectorAll('input[type="checkbox"]')

let basePrice = 6000
const totalPriceElement = document.querySelector('#total-price')
inputPrice.addEventListener('input', () => {
    basePrice = parseFloat(inputPrice.value)
    console.log(basePrice)
})

squareRange.addEventListener('input', () => {
    squareInput.value = squareRange.value
})
squareInput.addEventListener('input', () => {
    squareRange.value = squareInput.value
})

function calculate() {
    let totalPrice = basePrice * parseInt(squareInput.value)

    for (const radio of radioType) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }
    for (const building of radioBuilding) {
        if (building.checked) {
            totalPrice = totalPrice * parseFloat(building.value)
        }
    }
    for (const rooms of radioRooms) {
        if (rooms.checked) {
            totalPrice = totalPrice * parseFloat(rooms.value)
        }
    }
    for (const checkbox of inputCheckbox) {
        if (checkbox.checked) {
            totalPrice = totalPrice * parseFloat(checkbox.value)
        }
    }
    const formatter = new Intl.NumberFormat('ru')
    totalPriceElement.innerText = formatter.format(totalPrice)
}


for (const input of inputs) {
    input.addEventListener('input', () => {
        calculate()
    })
}