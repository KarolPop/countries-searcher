var url = 'https://restcountries.eu/rest/v1/name/'; 
/*var urlWithCapitals = 'https://restcountries.eu/rest/v1/capital/'; */
var countriesList = $('#countries');
$('#search').click(searchCountries);

$('#country-name').keydown(function(event){
	if(event.keyCode == 13){
		/*$('#search').click();*/
		searchCountries();
	}
});

function searchCountries() { 
	var countryName = $('#country-name').val(); 
	if(!countryName.length) {
		countryName = 'Poland'; 	
}

$.ajax({ 
		url: url + countryName, 
		method: 'GET', 
		success: showCountriesList 
	}); 
}

/*Countries list search result*/ 
function showCountriesList(resp) { 
	countriesList.empty(); 
	resp.forEach(function(item) { 
		$('<li>').text(item.name + ' - ' + item.region + ' - ' + item.capital).appendTo(countriesList);
	}); 
}