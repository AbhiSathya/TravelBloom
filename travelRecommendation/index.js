const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');

function recommendations() {
    const input = document.getElementById("placeInput").value.toLowerCase();
    const result = document.getElementById("result");
    result.innerHTML = "";
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const country = data.countries.find(item => item.name.toLowerCase() === input);
        if(country) {
            country.cities.map(city => {
                console.log(city);            
                // const options = { timeZone: input, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
                // const Time = new Date().toLocaleTimeString('en-US', options);
                // result.innerHTML += `Current time in ${city.name} : ${Time}`;
                result.innerHTML += `<img src="${city.imageUrl}" alt="${city.name}"/>`;
                result.innerHTML += `<h2>${city.name}</h2>`;
                result.innerHTML += `<p>${city.description}</p>`;

            });
        }
        else {
            result.innerHTML += `${input} not found`;
        }
    })
    .catch(error => console.log("Error: " + error));
}

btnSearch.addEventListener("click", recommendations);
btnReset.addEventListener("click", function() {
    result.innerHTML = "";

});