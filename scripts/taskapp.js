let btnAdd = document.querySelector('#btn-add')
let inputTitle = document.querySelector('#input-name')
let inputDescription = document.querySelector('#description')
let inputDay = document.querySelector('#select-day')
let inputMonth = document.querySelector('#select-moth')
let inputYear = document.querySelector('#select-year')
let inputHour = document.querySelector('#hour')

const listTask = []

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
			$week ="";
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

function getDate(day, month, year, hour){

	let fullDate = new Date(`${year}-${month}-${day} ${hour}`)
	let $week = getWeek(fullDate.getDay())
	let $hour = `${fullDate.getHours()}:${fullDate.getMinutes()}`


	return {
		week: $week,
		date: `${day}-${month}-${year}`,
		hour: $hour
	}
}

// SAVE
function addListTask(data){
	listTask.push(data)
	saveData()
}

function saveData(){
	let saveTask = JSON.stringify(listTask)
	window.localStorage.setItem("task_management", saveTask)

	alert("Salvo com sucesso!")
}


// BTN EXECUTE SAVED
btnAdd.onclick = ()=> {
	let date = getDate(inputDay.value,inputMonth.value,inputYear.value, inputHour.value)
	
	let dataTask = {
		title: inputTitle.value,
		description: inputDescription.value,
		date,
	}

	addListTask(dataTask)
}

function getListTask(){
	let getList = JSON.parse(window.localStorage.getItem('task_management'))
	console.log(getList)
}


getListTask()