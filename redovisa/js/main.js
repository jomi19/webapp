/* global home */
"use strict";

(function() {
    window.rootElement = document.getElementById("root");

    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";

    window.navbar = document.createElement("nav");
    window.navbar.className = "bottom-nav";

    home.showHome();
})();
