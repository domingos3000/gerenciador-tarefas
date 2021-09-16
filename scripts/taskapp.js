let btnAdd = document.querySelector('#btn-add')
let inputTitle = document.querySelector('#input-name')
let inputDescription = document.querySelector('#description')
let inputDate = document.querySelector('#inputdate')
let inputHour = document.querySelector('#hour')
let boxTask = document.querySelector('#task-container .task-list')
let modalAdd = document.querySelector('#modal-add')
let modalDel = document.querySelector('#modal-del')
let btnDelete = document.querySelector('#modal-del .btn-delete')
const listTask = window.localStorage.getItem('task_management') == null ? [] : JSON.parse(window.localStorage.getItem('task_management'))

function messageInitial(){
	let alertEmpty = document.querySelector("#alert-empty")

	if(listTask.length == 0)
		alertEmpty.classList.add('on')
	else
		alertEmpty.classList.remove('on')
}

function openModal(){
	modalAdd.classList.toggle('open')
	resetInput()
}

function openModalDel(){
	modalDel.classList.toggle('open')
}

function resetInput(){
	inputDate.value = ""
	inputTitle.value = ""
	inputHour.value = ""
	inputDescription.value = ""
}

// SET DATA
function getWeek(week){

	// DAY WEEK IN PORTUGUESE
		switch(week) {
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

function getMonth(month){

	// DAY WEEK IN PORTUGUESE
		switch(month) {
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
			$month ="";
		}
	return $month;
}

function getDate(date, hour){

	let fullDate = new Date(`${date} ${hour}`)
	let week = getWeek(fullDate.getDay())

	return {week,date,hour,}
}

// SAVE
function addListTask(data){
	listTask.push(data)
	saveData()
	openModal()
}

function saveData(){
	let saveTask = JSON.stringify(listTask)
	window.localStorage.setItem("task_management", saveTask)

	updateHtml()
}

function updateHtml(){

	boxTask.innerHTML = ""
	let num = 1

	for(item of listTask){
		

		boxTask.innerHTML+=`
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


// BTN EXECUTE SAVED
btnAdd.onclick = ()=> {
	let date = getDate(inputDate.value, inputHour.value)
	
	let dataTask = {
		id: listTask.length == 0 ? 0 : listTask.length,
		title: inputTitle.value,
		description: inputDescription.value,
		date,
	}

	addListTask(dataTask)
}


function deleteTask(event){
	
	let idDelete = event.target.getAttribute('data-id')
	
	let keyId = listTask.findIndex(element => {
		if(element.id == idDelete){
			return element
		}
	})

	if(keyId != -1){
		listTask.splice(keyId,1)
		saveData()
	}

	openModalDel()


}



let taskNumber = document.querySelectorAll('#task-container .task-number')

function configAttribute(event){
	openModalDel()

	let dataId = event.target.getAttribute('data-id')
	btnDelete.setAttribute('data-id', dataId)
	
	return dataId;
}

messageInitial()