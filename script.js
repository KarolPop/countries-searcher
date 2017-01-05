var url = 'https://restcountries.eu/rest/v1/name/'; 
<<<<<<< HEAD
//var urlWithCapitals = 'https://restcountries.eu/rest/v1/capital/'; 
=======
/*var urlWithCapitals = 'https://restcountries.eu/rest/v1/capital/'; */
>>>>>>> origin/master
var countriesList = $('#countries');
$('#search').click(searchCountries);

$('#country-name').keydown(function(event){
	if(event.keyCode == 13){
<<<<<<< HEAD
		 //$('#search').click();
=======
		/*$('#search').click();*/
>>>>>>> origin/master
		searchCountries();
	}
});

function searchCountries() { 
	var countryName = $('#country-name').val(); 
<<<<<<< HEAD
<<<<<<< HEAD
	if(!countryName.length) {
		countryName = 'Poland'; 	
=======
if(!countryName.length) {
	countryName = 'Poland'; 	
>>>>>>> origin/master
=======
	if(!countryName.length) {
		countryName = 'Poland'; 	
>>>>>>> refs/remotes/origin/gh-pages
}

$.ajax({ 
		url: url + countryName, 
		method: 'GET', 
		success: showCountriesList 
	}); 
}

<<<<<<< HEAD
//Countries list search result  
=======
/*Countries list search result*/ 
>>>>>>> origin/master
function showCountriesList(resp) { 
	countriesList.empty(); 
	resp.forEach(function(item) { 
		$('<li>').text(item.name + ' - ' + item.region + ' - ' + item.capital).appendTo(countriesList);
	}); 
}