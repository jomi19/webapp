/* global home, about, github, report */
"use strict";

var menu = (function() {
    const showMenu = function(selected) {
        var navElements = [
            {name: "Me", class: "home", nav: home.showHome},
            {name: "Om", class: "free_breakfast", nav: about.showAbout},
            {name: "Github", class: "folder", nav: github.showGithub},
            {name: "Redovisning", class: "description", nav: report.showReport}
        ];

        window.navbar.innerHTML = "";
        navElements.forEach((element) => {
            var navElement = document.createElement("a");
            var icon = document.createElement("i");
            var text = document.createElement("span");

            if (selected === element.name) {
                navElement.className = "selected";
            }

            navElement.addEventListener("click", element.nav);
            navElement.appendChild(icon);

            icon.className = "material-icons";
            icon.textContent = element.class;

            text.className = "icon-text";
            text.textContent = element.name;

            navElement.appendChild(text);
            window.navbar.appendChild(navElement);
        });
        window.rootElement.appendChild(window.navbar);
    };

    return {
        showMenu: showMenu
    };
})(menu);
