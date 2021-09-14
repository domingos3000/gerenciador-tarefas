// REGIST TASK
	// VARIABLES

// 		let numberTask = document.querySelector('.number-task');
// 		let titleTask = document.querySelector('.title-task')
// 		let ulList = document.querySelector('#ul-list')
// 		let $week;

// 		let valorData

// 		let deleteRegist = document.querySelectorAll('[data-id]')

// 		let itemStorage = JSON.parse(window.localStorage.getItem('management_task'));
// 		console.log(itemStorage)
		
// 		let Task = itemStorage == null ? [] : itemStorage;

		

// 	function saveData() {
// 		window.localStorage.setItem('management_task', JSON.stringify(Task))
// 	}

// 	function resetInput() {
// 		let inputTitle = document.querySelector('#modal .form-title')
// 		let inputDate = document.querySelector('#modal .form-date')
// 		let inputDesc = document.querySelector('#modal .form-description')

// 		inputTitle.value=""
// 		inputDate.value=""
// 		inputDesc.value=""
// 	}

	



		


// // FORM MODAL
// 	// VARIABLES
// 		let btnOpenModal = document.querySelector('.btn-open-modal')
// 		let modal = document.querySelector('#modal')
// 		let inputTitle = document.querySelector('#modal .form-title')
// 		let inputDate = document.querySelector('#modal .form-date')
// 		let inputDesc = document.querySelector('#modal .form-description')
// 		let btnAdd = document.querySelector('#modal .btn-add')
// 		let btnClose = document.querySelector('#modal .btn-close')

// 	// OPEN AND CLOSE MODAL FOM
// 		function OpenCloseModal() {
// 			modal.classList.toggle('open')
// 			resetInput()
// 		}

// 		btnOpenModal.onclick = OpenCloseModal
// 		btnClose.onclick = OpenCloseModal

// 	// GET VALUES INPUT

// 		function getData() {
// 			let $title = inputTitle.value;
// 			let $date = new Date(inputDate.value);
// 			let $desc = inputDesc.value;
// 			let $dateString = inputDate.value
// 			let $id = Task.length + 1

// 			// DAY WEEK IN PORTUGUESE
// 				switch($date.getDay()) {
// 				case 0:
// 					$week = "Domingo"
// 					break
// 				case 1: 
// 					$week = "Segunda-feira"
// 					break
// 				case 2: 
// 					$week = "Terça-feira"
// 					break
// 				case 3: 
// 					$week = "Quarta-feira"
// 					break
// 				case 4: 
// 					$week = "Quinta-feira"
// 					break
// 				case 5: 
// 					$week = "Sexta-feira"
// 					break
// 				case 6: 
// 					$week = "Sábado"
// 					break
// 				default:
// 					$week =""
// 				}


// 			Task.push({$id, $title, $desc, $week, $dateString})


// 			RegistHtml()
// 			saveData()
// 			console.log(Task)

// 		}
		

// 		function RegistHtml() {

// 			ulList.innerHTML="";

// 			// INNERHTML

// 				for(let tasks of Task) {

// 					const li = `
// 					<li class="item-list">
// 						<div class="header-task">
// 							<span class="number-task">${tasks.$id}</span>
// 							<h2 class="title-task">${tasks.$title}</h2>
// 						</div>
// 						<div>
// 							<span class="date-task">
// 								${tasks.$week} --- ${tasks.$dateString}
// 							</span>

// 							<div class="description-task">
// 								${tasks.$desc}
// 							</div>
// 						</div>

// 						<div class="options">
// 							<span class="icon-option c-ok">
// 								<i class="far fa-edit"></i>
// 							</span>
// 							<span class="icon-option c-error" data-id="${tasks.$id}">
// 								<i class="far fa-trash-alt"></i>
// 							</span>
// 						</div>
// 					</li>
// 					`
// 					ulList.innerHTML += li	

// 					deleteRegist = document.querySelectorAll('[data-id]')

// 				}

				

// 				modal.classList.remove('open')		

// 				for(let i=0; i < deleteRegist.length; i++){
			
// 			deleteRegist[i].onclick = ver
// 		}
// 		}

// 			btnAdd.onclick = getData
// 			RegistHtml()

		
		 
// 		for(let i=0; i < deleteRegist.length; i++){
			
// 			deleteRegist[i].onclick = ver
// 		}

// 		function ver(event) {
// 			valorData = Number(event.target.getAttribute('data-id'))
// 			// console.log(valorData)

// 			for(let k = 0; k < Task.length; k++) {
				
// 				let val = Task[k]['$id']

// 				if(val == valorData) {
// 					console.log("Encontramos o valor " + valorData + " na Posicao " + k)
// 					Task.splice(k, 1)
// 					saveData()
// 					RegistHtml()
// 					// getData()
// 					return
// 				}


// 			}

// 			RegistHtml()
// 		}
