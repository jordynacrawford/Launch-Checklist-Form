// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function() {
      let pilotName = document.querySelector("input[name=pilotName").value;
      let copilotName = document.querySelector("input[name=copilotName").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel").value;
      let cargoMass = document.querySelector("input[name=cargoMass").value;
      let values = [pilotName, copilotName, fuelLevel, cargoMass];
      let emptyField = false;
      let badNumber = false;

      // event.preventDefault();

      for (let i = 0; i < values.length; i++) {
         if (values[i] === "") {
            emptyField = true;
            break;
         }
      };

      if (isNaN(fuelLevel) || isNaN(cargoMass)) {
         badNumber = true;
      };

      if (emptyField) {
         event.preventDefault();
         alert("All fields are required.");
      } else if (badNumber) {
         event.preventDefault();
         alert("Please enter valid numbers for Fuel Level and Cargo Mass.")
      };

      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotName} ready`;
      let copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Copilot ${copilotName} ready`;
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let faultyItems = document.getElementById("faultyItems");

      if (Number(fuelLevel) < 10000) {
         faultyItems.style.visibility = "visible";
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
