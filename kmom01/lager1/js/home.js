/* global menu, myFunction */
"use strict";

var home = (function() {
    const showHome = () => {
        window.mainContainer.innerHTML = "";
        let title = document.createElement("h1");
        let greeting = document.createElement("p");
        let image =document.createElement("img");
        let timeOfDayGreeting = "Hej";
        let now = new Date();

        myFunction.breadCrumb();
        title.className = "title";
        title.textContent = "Infinity Warehouse";

        // image.src = "img/forklift.svg";
        // image.className = "forlift";
        // image.alt = "Forklift";

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
        }

        greeting.textContent = timeOfDayGreeting +
            ", Lager app för Infinity Warehose";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(image);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("Home");
    };

    return {
        showHome: showHome
    };
})(home);
