function palindrome() {
		var str = document.getElementById('word').value;
		var info = document.getElementById('info');
		var ans = '';
	let regEx = /\W/g;
	let changeStr = str.toLowerCase().replace(regEx, '');
	let reverseStr = changeStr.split('').reverse().join('');
	if (str === '') {return false}
	if (changeStr === reverseStr) {
		ans = 'The word is a palindrome!!';
	}else{
		ans = 'Not a palindrome!!'
	}
	info.innerText = ans;
}
