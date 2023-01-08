//素数追求
function getPrimeNumber(num){
	var flg = 0;
	for(var i=2; i<=num -1; i++){
		if(num % i === 0){
			flg = i;
			break;
		}
	}
	if(flg === 0){
		return true;
	}
	else{
		return false;
	}
}

// 結果数値用の器
var prime_numbers = [];

// 1~100まで
for(var i=3; i<=500; i++){
	if(getPrimeNumber(i) === true){
		prime_numbers.push(i);
	}
}

// 結果
console.trace(prime_numbers);

