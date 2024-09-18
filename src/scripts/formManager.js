document.querySelector('.main__promotion-form').addEventListener('submit', e=>{
	e.preventDefault()
	const form = new FormData(e.target)

	if (!checkboxConfirm.checked) {
		form.append('confirm', 'false')
	}

	form.forEach((val, key) => {
		console.log(key, '->', val)
	})
})


const checkboxConfirm = document.querySelector('.custom-checkbox input[type="checkbox"]')
const customCheckbox = document.querySelector('.custom-checkbox')

customCheckbox.addEventListener('click', e=> {
	checkboxConfirm.checked = !checkboxConfirm.checked
	if (checkboxConfirm.checked) {
		customCheckbox.classList.add('checked')
		checkboxConfirm.value = 'true'
	} else {
		customCheckbox.classList.remove('checked')
		checkboxConfirm.value = 'false'
	}
})