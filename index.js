const incrementor =  document.querySelector('#increase');
const reset =  document.querySelector('#reset');
const decrementor =  document.querySelector('#decrease');
const output = document.getElementById('result') ;

var value = 0;
output.innerHTML = value ;

incrementor.addEventListener('click', () => {
	value++;
	output.innerHTML = value ;
});

decrementor.addEventListener('click', () => {
	value--;
	output.innerHTML = value ;
});

reset.addEventListener('click', () => {
	value = 0;
	output.innerHTML = value ;
})