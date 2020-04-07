/* global menu */
"use strict";

var about = (function() {
    const showAbout = function() {
        window.mainContainer.innerHTML = "";
        menu.showMenu("Om");
    };

    return {
        showAbout: showAbout
    };
})(about);
