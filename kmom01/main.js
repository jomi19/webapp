"use strict";

(function() {
    var root = document.getElementById("root");

    var main = document.createElement("div");
    main.className = "main";

    var red = document.createElement("div");
    red.className = "red";

    var blue = document.createElement("div");
    blue.className = "blue";

    var green = document.createElement("div");
    green.className = "green";

    main.appendChild(red);
    main.appendChild(blue);
    main.appendChild(green);


    root.appendChild(main);
})();