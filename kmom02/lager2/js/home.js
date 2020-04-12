"use strict";
import { menu } from "./menu.js";
import { myFunction} from "./src.js";



var home = {
    showHome: () => {
        window.mainContainer.innerHTML = "";
        let greeting = document.createElement("p");
        let image =document.createElement("img");
        let timeOfDayGreeting = "Hej";
        let now = new Date();

        myFunction.setTitle("Infinity Warehouse");
        image.src = "img/forklift.svg";
        image.className = "fork-lift";
        image.alt = "Forklift";

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
        }

        greeting.textContent = timeOfDayGreeting +
            ", Lager app för Infinity Warehose";

        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(image);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("Home");
    }
};

export { home };
