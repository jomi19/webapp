"use strict";
import { products } from "./products.js";
import { orders } from "./orders.js";
import utils from "./utils.js";

var myFunction =  {
    setTitle: function(title, crumbs = null) {
        window.header.innerHTML = "";
        window.header.appendChild(utils.createElement({
            type: "h1",
            textContent: title
        }));

        if (Array.isArray(crumbs)) {
            let breadCrumbs = document.createElement("li");

            breadCrumbs.className = "top-crumbs";
            crumbs.forEach(element => {
                breadCrumbs.appendChild(utils.createElement({
                    type: "li",
                    textContent: element.name,
                    onclick: element.nav
                }));
            });
            window.header.appendChild(breadCrumbs);
        }
    },

    updateProduct: function(data) {
        data.forEach(element => {
            var product = {
                id: element.id,
                name: element.name,
                stock: element.stock - element.amount,
                api_key: "493f94f7e0bdc71b67b2e9a98c4e50ac"
            };

            var json = JSON.stringify(product);
            var request = new XMLHttpRequest();

            request.addEventListener("load", function() {
                products.upToDate = false;
                console.log(products.upToDate);
            });
            request.open("PUT", "https://lager.emilfolino.se/v2/products");
            request.setRequestHeader("Content-type", "application/json; charset=utf-8");
            request.send(json);
        });
    },

    updateOrder: function(data) {
        var product = {
            id: data.id,
            name: data.name,
            status_id: data.status,
            api_key: "493f94f7e0bdc71b67b2e9a98c4e50ac"
        };
        var json = JSON.stringify(product);
        var request = new XMLHttpRequest();

        request.addEventListener("load", function() {
            orders.upToDate = false;
            console.log(orders.upToDate);
        });
        request.open("PUT", "https://lager.emilfolino.se/v2/orders");
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");
        request.send(json);
    },
};

export { myFunction };
