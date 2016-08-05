(function($){
	$.fn.myplugin = function(options){
		var tegdata = $('[data-interval]');
		console.log(tegdata);
		return tegdata.each(function(i, value){
					// console.log(tegdata[i].attributes[0].nodeValue);
			var z = tegdata[i].attributes[0].nodeValue.split(',');
			// var z = tegdata[i].attr('data-interval').split(',');
			var date1 = z[0];

			year1 = date1.slice(0,4);
			month1 = date1.slice(5,7);
			day1 = date1.slice(8,10);
			date1 = new Date(year1,month1,day1);

			var date2 = z[z.length-1];
			year2 = date2.slice(0,4);
			month2 = date2.slice(5,7);
			day2 = date2.slice(8,10);
			date2 = new Date(year2,month2,day2);

			var month = new Array();
				month[01] = "January";
				month[02] = "February";
				month[03] = "March";
				month[04] = "April";
				month[05] = "May";
				month[06] = "June";
				month[07] = "July";
				month[08] = "August";
				month[09] = "September";
				month[10] = "October";
				month[11] = "November";
				month[12] = "December";

			var rez_year1,
				rez_year2,
				rez_month1,
				rez_month2;

			if (year1 != year2) {
				rez_year1 = " " + year1 + " year";
				rez_year2 = " " + year2 + " year";
			} else {
				rez_year1 = '';
				rez_year2 = '';
			}

			if (month1 != month2) {
				rez_month1 = month[+month1] + " ";
				rez_month2 = month[+month2] + " ";
			} else {
				rez_month1 = month[+month1] + ' ';
				rez_month2 = '';
			}
			console.log(date2);
						console.log(date1);
			$(this).html(rez_month1 + day1 + rez_year1 + ' - ' + rez_month2 + day2 + rez_year2 + ', ' + Math.round((date2-date1)/(60*60*24*1000)) + ' days');
		})
	}
})(jQuery)