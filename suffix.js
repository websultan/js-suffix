function getSuffix(one, two, many, string, negative, message){
	var string = (string === undefined) ? true : string,
		negative = (negative === undefined) ? false : negative,
		message = (message === undefined) ? 'Ошибка!' : message,
		arr = [one, two, many];

	if (arr.some(
		function(value) {
			return !~value.search(/^[а-яёА-ЯЁ]+([-]?[а-яёА-ЯЁ]+)?$/gi);
		}) 
	) {
		return false;
	}

	return function (count) {
		var a = count;

		if ( 
			(!string && typeof(a) != 'number') ||
			(!negative && a < 0) ||
			isNaN(parseFloat(a)) || 
			!isFinite(a)
		) {
			return message;
		}

		a = Math.abs(a);

		var x = a % 10,
		y = a % 100;
		
		if ( (x >= 2 && x <= 4) && (y < 12 || y > 14) ) {
			return two;
		} else if (x == 1 && y != 11) {
			return one;
		} else {
			return many;
		}

	}
}