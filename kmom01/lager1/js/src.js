"use strict";

var myFunction = (function() {
    const breadCrumb = function() {
        let crumb = document.createElement("li");

        window.breadcrumb.innerHTML = "";

        crumb.textContent = "Home";
        crumb.addEventListener("click", function() {

        });

        window.breadcrumb.appendChild(crumb);
        window.header.appendChild(window.breadcrumb);
        window.rootElement.appendChild(window.header);
    };

    return {
        breadCrumb: breadCrumb
    };
})(myFunction);
