// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(planetArray) {
         let index = Math.floor(Math.random()*planetArray.length)
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${planetArray[index].name}</li>
            <li>Diameter: ${planetArray[index].diameter}</li>
            <li>Star: ${planetArray[index].star}</li>
            <li>Distance from Earth: ${planetArray[index].distance}</li>
            <li>Number of Moons: ${planetArray[index].moons}</li>
         </ol>
         <img src="${planetArray[index].image}"></img>`
      })
   });

   form.addEventListener("submit", function() {
      let pilotName = document.querySelector("input[name=pilotName").value;
      let copilotName = document.querySelector("input[name=copilotName").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel").value;
      let cargoMass = document.querySelector("input[name=cargoMass").value;
      let values = [pilotName, copilotName, fuelLevel, cargoMass];
      let emptyField = false;
      let badNumber = false;
      let badName = false;

      event.preventDefault();

      for (let i = 0; i < values.length; i++) {
         if (values[i] === "") {
            emptyField = true;
            break;
         }
      };

      if (isNaN(fuelLevel) || isNaN(cargoMass)) {
         badNumber = true;
      };

      let letters = /^[A-Za-z\s]+$/;
      if (!pilotName.match(letters) || !copilotName.match(letters)) {
         badName = true;
      }

      if (emptyField) {
         alert("All fields are required.");
      } else if (badNumber || badName) {
         alert("Make sure to enter valid information for each field.")
      } else {
         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.innerHTML = `Pilot ${pilotName} is ready`;
         let copilotStatus = document.getElementById("copilotStatus");
         copilotStatus.innerHTML = `Copilot ${copilotName} is ready`;
         let fuelStatus = document.getElementById("fuelStatus");
         let cargoStatus = document.getElementById("cargoStatus");
         let faultyItems = document.getElementById("faultyItems");
         let launchStatus = document.getElementById("launchStatus");
         let fuelGood = true;
         let cargoGood = true;

         if (Number(fuelLevel) < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            fuelGood = false;
         } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
         };

         if (Number(cargoMass) > 10000) {
            cargoStatus.innerHTML = "Cargo mass too high for launch";
            cargoGood = false;
         } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
         };

         if (!fuelGood || !cargoGood) {
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
         } else {
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for launch!"
         };
      };
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
