/* global menu */
"use strict";

var stock = (function() {
    const showStock = () => {
        window.mainContainer.innerHTML = "";

        let title = document.createElement("h1");
        let table = document.createElement("table");

        table.className = "lager-table";
        title.textContent = "Lagersaldo";
        window.breadcrumb.innerHTML = "<li>Home</li><li id='stock'>Stock</li>";
        window.mainContainer.appendChild(title);
        fetch(`
        https://lager.emilfolino.se/v2/products?api_key=493f94f7e0bdc71b67b2e9a98c4e50ac`)
            .then(function(response) {
                console.log(response);
                return response.json();
            }).then(function(stock) {
                stock.data.forEach(function(product) {
                    let stockElement = document.createElement("tr");
                    let name = document.createElement("td");
                    let amount = document.createElement("td");

                    stockElement.addEventListener("click", function() {
                        showProdct(product.id);
                    });

                    name.textContent = product.name;
                    amount.textContent = product.stock;
                    // amount.style = "text-align: right";

                    stockElement.appendChild(name);
                    stockElement.appendChild(amount);
                    table.appendChild(stockElement);
                });

                window.mainContainer.appendChild(table);
                window.rootElement.appendChild(window.mainContainer);
            }).catch(function(error) {
                console.log("Fetch operation failed due to the following error:", error.message);
            });
        menu.showMenu("Github");
    };

    return {
        showStock: showStock
    };

    function showProdct(id) {
        window.mainContainer.innerHTML = "";

        fetch(`
        https://lager.emilfolino.se/v2/products/${id}?api_key=493f94f7e0bdc71b67b2e9a98c4e50ac`)
            .then(function(response) {
                return response.json();
            }).then(function(product) {
                product = product.data;
                let title = document.createElement("h1");
                let description = document.createElement("p");
                let crumb = document.createElement("li");
                let stock = document.getElementById("stock");

                stock.addEventListener("click", function() {
                    showStock();
                });
                crumb.textContent = product.name;
                window.breadcrumb.appendChild(crumb);

                title.textContent = product.name;
                description.textContent = product.description;

                window.header.appendChild(window.breadcrumb);
                window.mainContainer.appendChild(title);
                window.mainContainer.appendChild(description);
                window.rootElement.appendChild(window.mainContainer);
            }).catch(function(error) {
                console.log(`Couldent get pruduct info due to the following 
                error ${error.message}`);
            });
    }
})(stock);
