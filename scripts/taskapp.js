let btnAdd = document.querySelector('#btn-add')
let inputTitle = document.querySelector('#input-name')
let inputDescription = document.querySelector('#description')
let inputDay = document.querySelector('#select-day')
let inputMonth = document.querySelector('#select-moth')
let inputYear = document.querySelector('#select-year')
let inputHour = document.querySelector('#hour')

let boxTask = document.querySelector('#task-container .task-list')

const listTask = window.localStorage.getItem('task_management') == null ? [] : JSON.parse(window.localStorage.getItem('task_management'))

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

	updateHtml()
}

function updateHtml(){

	boxTask.innerHTML = ""
	let num = 1

	for(item of listTask){
		

		boxTask.innerHTML+=`
			<li class="task-item">
				<div class="number-name df">
					<div class="task-number">${num}</div>
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

}


// BTN EXECUTE SAVED
btnAdd.onclick = ()=> {
	let date = getDate(inputDay.value,inputMonth.value,inputYear.value, inputHour.value)
	
	let dataTask = {
		id: listTask.length == 0 ? 0 : listTask.length,
		title: inputTitle.value,
		description: inputDescription.value,
		date,
	}

	addListTask(dataTask)
}


function deleteTask(){
	
	let key = listTask.findIndex(element => {
		if(element.id == 4){
			return element
		}
	})

	listTask.splice(key,1)

	saveData()
}

if(listTask.length != 0){
	updateHtml()
} else{
	alert("Sem nenhum registo!")
}

console.log(listTask)

console.log(listTask)