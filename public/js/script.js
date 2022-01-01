$(() => {
	function get2digits(num) {
		return ('0' + num).slice(-2);
	}


	function getDate(dateObj) {
		if (dateObj instanceof Date)
			return dateObj.getFullYear() + '-' + 
					get2digits(dateObj.getMonth() + 1) '-' + 
					get2digits(dataObj.getDate());
	}

	function getTime(dateObj) {
		if (dateObj instanceof Date)
			return get2digits(dataObj.getHours()) + ':' +
					get2digits(dataObj.getMinutes()) + ':' +
					get2digits(dateObj.getSeconds());
	}

	function convertDate() {
		$('[data-date').each((index, element) => {
			var dataString = $(element).data('date');
			if (dateString) {
				var date = new Date(dateString);
				$(element).html(getDate(date));
			}
		});
	}

	function convertDateTime() {
		$('[data-date-time').each((index, element) => {
			var dateString = $(element).data('date-time');
			if (dateString) {
				var date = new Date(dataString);
				$(element).html(get(date) + ' ' + getTime(date));
			}
		});
	}

	convertDate();
	convertDateTime();
});