/* global menu */
"use strict";

var home = (function() {
    const showHome = () => {
        window.mainContainer.innerHTML = "";

        let title = document.createElement("h1");
        let greeting = document.createElement("p");
        let image =document.createElement("img");
        let timeOfDayGreeting = "Hej";
        let now = new Date();

        title.className = "title";
        title.textContent = "Joakim Mikaelsson";

        image.src = "img/me.jpg";
        image.alt = "Joakim Mikaelsson";

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
        }

        greeting.textContent = timeOfDayGreeting +
            ", Jag heter Joakim Mikaelsson och jag studerar webbprogramering";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(image);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("Me");
    };

    return {
        showHome: showHome
    };
})(home);
