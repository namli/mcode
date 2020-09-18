/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with 
user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or ar not numeric, show a warning message

================
*/

document.addEventListener("DOMContentLoaded", function (event) {

  document.addEventListener("click", getTemp);

});

function getTemp(e) {
  if (e.target.id === "gettemp") {
    let lon = document.querySelector("#longitude").value;
    let lat = document.querySelector("#latitude").value;
    console.log(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`);
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
      .then(
        (resp) => {
          return resp.json();
        }
      )
      .then(
        (data) => {
          console.log(data);
          document.querySelector("#temperatura").innerText = data.main.temp + " °С";

        });

  }
}
function getTempLocation() {

}