export default function fetchResults(searchTerm) {

  var requestOptions = {
    method: 'GET',
    headers: {
      "Authorization": "Bearer EiM7V1DDoVrAa5BvZbnCEhJUNvpWFVjjEcet4BfotoXl8l_aiKrPx_NfDFRWlBef2Imr5FKmnWMqWhs017ac95dSFDI_otKeeEuvsfkobVQEieRaiLOOSEJECjR2YHYx"
    },
    redirect: 'follow'
  };

  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=parking&location=${searchTerm}`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}