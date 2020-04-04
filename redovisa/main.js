"use strict";

(function () {
    var rootEmement = document.getElementById("root");
    var mainContainer = document.createElement("main");
    var navigation = document.createElement("nav");

    mainContainer.className = "container";
    navigation.className = "bottom-nav";

    const showHome = ()  => {
        mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Joakim Mikaelsson";

        var greeting = document.createElement("p");
        var timeOfDayGreeting = "Hej";
        var now = new Date();
        var image = document.createElement("img");

        image.src = "img/me.jpg";
        image.alt = "Joakim Mikaelsson";

        if (now.getHours() < 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "God kväll";
        }

        greeting.textContent = timeOfDayGreeting +
            ", jag heter Joakim Mikaelsson och studerar webbprogrameing.";

        mainContainer.appendChild(title);
        mainContainer.appendChild(greeting);
        mainContainer.appendChild(image);

        rootEmement.appendChild(mainContainer);

        showMenu("Me");
    };

    const showMenu = (selected) => {
        var navElements = [
            {name: "Me", class: "home", nav: showHome},
            {name: "Om", class: "free_breakfast", nav: showAbout},
            {name: "Github", class: "folder", nav: showGithub},
            {name: "Redovisning", class: "description", nav: showGithub}
        ];

        navigation.innerHTML = "";
        navElements.forEach((element) => {
            var navElement = document.createElement("a");

            if (selected === element.name) {
                navElement.className = "selected";
            }

            navElement.addEventListener("click", element.nav);

            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);
            navigation.appendChild(navElement);
        });

        rootEmement.appendChild(navigation);
    };
    const showAbout = (selected) => {
        console.log("about");

        showMenu("Om");
    };

    const showGithub = (selected) => {
        console.log("Github");

        showMenu("Github");
    };

    showHome();
})();
