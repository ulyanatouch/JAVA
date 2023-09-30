document.querySelector('.calc-calculate').addEventListener('click', function () {
const num1 = +document.querySelector('[name="num1"]').value;
const num2 = +document.querySelector('[name="num2"]').value;

const sum = num1 + num2;

document.querySelector('.calc-result').innerText = sum;
});

document.querySelector('.calc-calculate').addEventListener('click', function () {
	const num1 = +document.querySelector('[name="num1"]').value;
	const num2 = +document.querySelector('[name="num2"]').value;
	const op = document.querySelector('[name="op"]').value;

	let result;

	if (op === 'plus') {
	result = num1 + num2;
	} else if (op === 'minus') {
	result = num1 - num2;
	} else if (op === 'multiply') {
	result = num1 * num2;
	} else if (op === 'divide') {
	result = num1 / num2;
	} else {
	console.error('Wrong op!');
	alert('Wrong operation is selected');

	document.querySelector('.calc-result').value = result;
});

const changeHandler = e =>{
		const value = e.value;
		e.value = value.replace(/\D/g, '');
	}

function calculate() {
	const num1 = +document.querySelector('[name="num1"]').value;
	const num2 = +document.querySelector('[name="num2"]').value;
	const op = document.querySelector('[name="op"]').value;
	
 	let result;
 	if (num1 === 0 || num2 === 0 ) {
 		var bigmouth = 'Wrong';
		bigmouth;
  		document.querySelector('.cals-result').value = bigmouth;;
	} else {
  
	
 	if (op === 'plus') 
 	{
 		result = num1 + num2;
 	}
 	else if (op === 'minus')
 	{
 		result = num1 - num2;
 	}
 	else if (op === 'multiply')
 	{
 		result = num1 * num2;
 	}
 	else if (op === 'divide')
 	{
 		result = num1 / num2;
 	} 
 	else 
 	{
 		console.error('Wrong op!');
 		alert('Wrong operation is selected');
 	}

	}//else

 	document.querySelector('.cals-result').value = result;

};


document.querySelector('.cals-calculate').addEventListener('click', function() {
	calculate();
});	


document.querySelector('[name="op"]').addEventListener('change', function() {
	calculate();
});	

document.querySelector('[name="num1"]').addEventListener('input', function() {
	calculate();
});	

document.querySelector('[name="num2"]').addEventListener('input', function() {
	calculate();
});	