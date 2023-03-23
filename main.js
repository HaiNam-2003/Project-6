const billInput = document.querySelector('.bill-input')
const peopleInput = document.querySelector('.people-input')
const tipAmount = document.querySelector('.tip-amount .amount')
const totalAmount = document.querySelector('.total .amount')
const tips = document.querySelectorAll('.tip')
const tipCustom = document.querySelector('.tip-custom')
const btnReset = document.querySelector('.reset')
const error = document.querySelector('.error')
const labelPeopleNumber = document.querySelector('.people-number')

billInput.value = '0.0';
peopleInput.value = '1';
tipAmount.innerHTML = '$' + (0.0).toFixed(2)
totalAmount.innerHTML = '$' + (0.0).toFixed(2)

let billValue = 0.0
let peopleValue = 1
let tipValue = 0.15

billInput.oninput = function() {
    billValue = parseFloat(billInput.value)
    caculateMoney()
}

peopleInput.oninput= function() {
    peopleValue = parseFloat(peopleInput.value)

    if(peopleValue < 1) {
        labelPeopleNumber.style.display = 'flex'
        error.style.display = 'block'
        peopleInput.style.border = '2px solid red'
    } else {
        error.style.display = 'none'
        peopleInput.style.border = 'none'
        caculateMoney()
    }
}

tipCustom.addEventListener('input', () => {
    tipValue = parseFloat(tipCustom.value / 100)
    
    tips.forEach(tip => {
        tip.classList.remove('active-tip')
    })
    caculateMoney()
})


tips.forEach(tip => {
    tip.addEventListener('click', (e) => {
        tips.forEach(tip => {
            tip.classList.remove('active-tip')
            if(e.target.innerHTML == tip.innerHTML) {
                tip.classList.add('active-tip')
                tipValue = parseFloat(tip.innerHTML) / 100;
            }
        })
        caculateMoney()
    })
})

function caculateMoney() {
    if(peopleValue >= 1) {
        let tipMoney = (billValue * tipValue) / peopleValue
        let total = (billValue / peopleValue) + tipMoney
        tipAmount.innerHTML = '$' + tipMoney.toFixed(2)
        totalAmount.innerHTML = '$' + total.toFixed(2)
    }
}

btnReset.onclick = function() {
    billInput.value = '0.0';
    billValue = parseFloat(billInput.value)
    peopleInput.value = '1';
    peopleValue = parseFloat(peopleInput.value)
    tipAmount.innerHTML = '$' + (0.0).toFixed(2)
    totalAmount.innerHTML = '$' + (0.0).toFixed(2)
    tipCustom.value = ''
}