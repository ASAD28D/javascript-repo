
const planetData = {
    EARTH: { gravity: 9.8, image: "earth.png" },
    MARS: { gravity: 3.71, image: "mars.png" },
    VENUS: { gravity: 8.87, image: "venus.png" },
    JUPITER: { gravity: 24.79, image: "jupiter.png" },
    SATURN: { gravity: 10.44, image: "saturn.png" },
    PLUTO: { gravity: 0.62, image: "pluto.png" },
    MERCURY: { gravity: 3.7, image: "mercury.png" },
    URANUS: { gravity: 8.69, image: "uranus.png" },
    NEPTUNE: { gravity: 11.15, image: "neptune.png" },
    MOON: { gravity: 1.62, image: "moon.png" }
};

const planetSelect = document.getElementById("planet-select");
const weightInput = document.getElementById("weight-input");
const calculateBtn = document.getElementById("calculate-btn");
const outputDiv = document.getElementById("output-div");
const outputText = document.getElementById("output-text");


const image = outputDiv.querySelector("img");

planetSelect.addEventListener("change", () => {
    const selectedPlanet = planetSelect.value;
    if (planetData[selectedPlanet]) {
        image.src = planetData[selectedPlanet].image;
    } else {
        image.src = "";
    }
    outputText.innerHTML = ""
});

calculateBtn.addEventListener("click", () => {
    const mass = parseFloat(weightInput.value);
    const selectedPlanet = planetSelect.value;

    if (!selectedPlanet || isNaN(mass)) {
        alert("Please enter a valid mass and select a planet.");
        return;
    }

    const gravity = planetData[selectedPlanet].gravity;
    const weight = (mass * gravity).toFixed(2);

    outputText.innerHTML = `
      <div>
        <p style="font-size: 24px; font-weight: bold;">
          The weight of the object on <strong>${selectedPlanet}</strong> is:
        </p>
        <p style="font-size: 32px; color: yellow;">${weight} N</p>
      </div>
    `;
});

