const validPin = 1234
const transactionData = []

// function to get input value number
function getInputValueNumber(id) {
    const inputField = document.getElementById(id).value
    const inputFieldValueNumber = parseInt(inputField)
    return inputFieldValueNumber;
}
// function to get input value
function getInputValue(id) {
    const inputField = document.getElementById(id)
    const inputFieldValueNumber = inputField.value
    return inputFieldValueNumber;
}

// function to get innerText
function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}

// function to set innerText
function setInnerText(value) {
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
    return
}

// function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName("form")

    for (const form of forms) {
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}

// function to toggle button
function handleToggleButton(id) {

    const formBtns = document.getElementsByClassName("form-btm")

    for (const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }

    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
}

// add money feature
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()

    const bank = getInputValue("bank")
    // const bank = document.getElementById("bank").value

    const accountNumber = getInputValue("account-number")
    // const accountNumber = document.getElementById("account-number").value

    const addAmount = getInputValueNumber("add-amount")
    // const addAmount = parseInt(document.getElementById("add-amount").value)

    const addPin = getInputValueNumber("add-pin")
    // const addPin = parseInt(document.getElementById("add-pin").value)

    const availableBalance = getInnerText("available-balance")
    // const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if (accountNumber.length < 11) {
        alert("please provide valid account number")
        return;
    }
    if (addPin !== validPin) {
        alert("please provide valid pin number")
        return
    }

    const totalNewAvailableBalance = addAmount + availableBalance


    setInnerText(totalNewAvailableBalance)
    // document.getElementById("available-balance").innerText = totalNewAvailableBalance

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)


})


// cashout money feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault()

    const agentNumber = getInputValue("agent-number")
    // const agentNumber = document.getElementById('agent-number').value


    const amount = getInputValueNumber("withdraw-amount")
    // const amount = parseInt(document.getElementById("withdraw-amount").value)


    const cashPin = getInputValueNumber("cash-pin")
    // const cashPin = parseInt(document.getElementById("cash-pin").value)

    const availableBalance = getInnerText("available-balance")
    // const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if (agentNumber.length < 11) {
        alert("please provide valid agent number")
        return
    }
    if (cashPin !== validPin) {
        alert("please provide valid pin number")
        return
    }

    const totalNewAvailableBalance = availableBalance - amount

    setInnerText(totalNewAvailableBalance)
    // document.getElementById("available-balance").innerText = totalNewAvailableBalance

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)

})
document.getElementById("transaction-button").addEventListener("click", function () {
    const transactionContainer = document.getElementById("transaction-container")

    for (const data of transactionData) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="bg-white p-3 rounded-xl   flex justify-between items-center">
                 <div class="flex items-center">
                    <div class="border-2 p-3 rounded-full bg-[#f4f5f7]">
                            <img src="./assets/wallet1.png" class="mx-auto" alt="">
                    </div>
                     <div class="ml-3">
                            <h1>$(data.name)</h1>
                            <p>$(data.date)</p>
                    </div>
                </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `


    }
})



// toggling feature
document.getElementById("add-money").addEventListener("click", function () {
    // document.getElementById("cash-out-parent").style.display = "none"
    // document.getElementById("transfer-money-paren").style.display = "none"

    // document.getElementById("add-money-parent").style.display = "block"

    handleToggle("add-money-parent")

    // const forms = document.getElementsByClassName("form")

    // for (const form of forms) {
    //     form.style.display = "none"
    // }
    // document.getElementById("add-money-parent").style.display = "block"

    handleToggleButton("add-money")




})
document.getElementById("cash-out-btn").addEventListener("click", function () {
    // document.getElementById("add-money-parent").style.display = "none"
    // document.getElementById("transfer-money-paren").style.display = "none"

    // document.getElementById("cash-out-parent").style.display = "block"

    handleToggle("cash-out-parent")

    // const forms = document.getElementsByClassName("form")

    // for (const form of forms) {
    //     form.style.display = "none"
    // }
    // document.getElementById("cash-out-parent").style.display = "block"
    handleToggleButton("cash-out-btn")



})
document.getElementById("transfer-button").addEventListener("click", function () {

    handleToggle("transfer-money-parent")

    // const formBtns = document.getElementsByClassName("form-btm")

    // for (const btn of formBtns) {
    //     btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
    //     btn.classList.add("border-gray-300")
    // }

    // document.getElementById("transfer-button").classList.remove("border-gray-300")
    // document.getElementById("transfer-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")
    handleToggleButton("transfer-button")

})
document.getElementById("bonus-button").addEventListener("click", function () {

    handleToggle("get-bonus-parent")

    handleToggleButton("bonus-button")

})
document.getElementById("bill-button").addEventListener("click", function () {

    handleToggle("pay-bill-parent")

    handleToggleButton("bill-button")

})
document.getElementById("transaction-button").addEventListener("click", function () {

    handleToggle("transaction-parent")

    handleToggleButton("transaction-button")

})