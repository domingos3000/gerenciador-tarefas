// VARIABLES

let btnAdd = document.querySelector('#btn-add')
let inputTitle = document.querySelector('#input-name')
let inputDescription = document.querySelector('#description')
let inputDate = document.querySelector('#inputdate')
let inputHour = document.querySelector('#hour')
let boxTask = document.querySelector('#task-container .task-list')
let modalAdd = document.querySelector('#modal-add')
let modalDel = document.querySelector('#modal-del')
let btnDelete = document.querySelector('#modal-del .btn-delete')

// GET DATA SAVED IN LOCALSTORE
const listTask = window.localStorage.getItem('task_management') == null ? [] : JSON.parse(window.localStorage.getItem('task_management'))

// FUNCTION | VERIFY IF TASK EMPATY
function messageInitial() {
    let alertEmpty = document.querySelector("#alert-empty")

    if (listTask.length == 0) {
        alertEmpty.classList.add('on')
    } else {
        alertEmpty.classList.remove('on')
    }
}

// FUNCTION | OPEN MODAL ADD
function openModal() {
    modalAdd.classList.toggle('open')
    resetInput()
}

// FUNCTION | OPEN MODAL DELETE
function openModalDel() {

    modalDel.classList.toggle('open')
}

// FUNCTION | RESETE VALUES INPUT
function resetInput() {
    inputDate.value = ""
    inputTitle.value = ""
    inputHour.value = ""
    inputDescription.value = ""
}

// FUNCTION | CONFIG. WEEK NAME
function getWeek(week) {

    // DAY WEEK IN PORTUGUESE
    switch (week) {
        case 0:
            $week = "Domingo"
            break
        case 1:
            $week = "Segunda-feira"
            break
        case 2:
            $week = "Terça-feira"
            break
        case 3:
            $week = "Quarta-feira"
            break
        case 4:
            $week = "Quinta-feira"
            break
        case 5:
            $week = "Sexta-feira"
            break
        case 6:
            $week = "Sábado"
            break
        default:
            $week = "Dia de semana inválido!";
    }
    return $week;
}

// FUNCTION | CONFIG. MONTH WEEK
function getMonth(month) {

    // DAY WEEK IN PORTUGUESE
    switch (month) {
        case 0:
            $month = "Janeiro"
            break
        case 1:
            $month = "Fevereiro"
            break
        case 2:
            $month = "Março"
            break
        case 3:
            $month = "Abril"
            break
        case 4:
            $month = "Maio"
            break
        case 5:
            $month = "Junho"
            break
        case 6:
            $month = "Julho"
            break
        case 7:
            $month = "Agosto"
            break
        case 8:
            $month = "Setembro"
            break
        case 9:
            $month = "Outubro"
            break
        case 10:
            $month = "Novembro"
            break
        case 11:
            $month = "Dezembro"
            break
        default:
            $month = "";
    }
    return $month;
}

// FUNCTION | GET DATE
function getDate(date, hour) {

    let fullDate = new Date(`${date} ${hour}`)
    let week = getWeek(fullDate.getDay())

    return {
        week,
        date,
        hour,
    }
}

// FUNCTION | ADD TASK
function addListTask(data) {
    listTask.push(data)
    saveData()
    openModal()
}

// FUNCTION | SAVE TASK
function saveData() {
    let saveTask = JSON.stringify(listTask)
    window.localStorage.setItem("task_management", saveTask)

    updateHtml()
}

// FUNCTION | UPDATE TASK HTML
function updateHtml() {

    boxTask.innerHTML = ""
    let num = 1

    for (item of listTask) {


        boxTask.innerHTML += `
			<li class="task-item">
				<div class="number-name df">
					<div class="task-number" data-id="${item.id}" onclick="configAttribute(event)">${num}</div>
					<div class="task-name">${item.title}</div>
				</div>

				<div class="task-info">
					<div class="task-datetime">${item.date.week}, (${item.date.date}) <br> ${item.date.hour}</div>
				</div>

				<input type="hidden" value="${item.id}">
			</li>
		`
        num++
    }

    messageInitial()
}

// FUNCTION | VALID FORM INPUT

function validInput() {
    let inputs = document.querySelectorAll('#modal-add .input-add')

    for (input of inputs) {
        let sizeInput = input.value

        if (sizeInput.length == 0) {
            input.style.borderLeftColor = "var(--colorError)"
            return false
        } else {
            input.style.borderLeftColor = "var(--colorOk)"
        }

    }

    return true;
}


// FUNCTION | EXECUTE BTN SAVE
btnAdd.onclick = () => {
    let date = getDate(inputDate.value, inputHour.value)
    let valid = validInput()
    if (valid) {

        let dataTask = {
            id: listTask.length == 0 ? 0 : listTask.length,
            title: inputTitle.value,
            description: inputDescription.value,
            date,
        }

        addListTask(dataTask)
    }

}

// FUNCTION | DELETE TASK
function deleteTask(event) {

    let idDelete = event.target.getAttribute('data-id')

    let keyId = listTask.findIndex(element => {
        if (element.id == idDelete) {
            return element
        }
    })

    if (keyId != -1) {
        listTask.splice(keyId, 1)
        saveData()
    }

    openModalDel()
}

function configAttribute(event) {
    openModalDel()

    let dataId = event.target.getAttribute('data-id')
    btnDelete.setAttribute('data-id', dataId)

    return dataId;
}

// FIRST FUNCION EXECUTE ONLOAD
updateHtml()
messageInitial()