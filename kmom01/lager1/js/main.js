/* global home */
"use strict";

(function() {
    window.rootElement = document.getElementById("root");

    window.header = document.createElement("header");
    window.header.className = "header";
    window.header.innerHTML = "<h1>Infinity Warehouse</h1>";

    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";

    window.navbar = document.createElement("nav");
    window.navbar.className = "bottom-nav";

    window.breadcrumb = document.createElement("ul");
    window.breadcrumb.className = "top-crumbs";

    let crumb = document.createElement("li");

    crumb.textContent = "Home";

    window.breadcrumb.appendChild(crumb);


    window.header.appendChild(window.breadcrumb);
    window.rootElement.appendChild(window.header);
    home.showHome();
})
();
