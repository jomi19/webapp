"use strict";
import { products } from "./products.js";
import { productDetails } from "./product_details.js";
import { menu } from "./menu";
import { home } from "./home.js";
import { myFunction} from "./src";



let productList = {
    show: function() {
        products.getAllProducts(productList.renderProducts);
    },

    renderProducts: function() {
        let main = document.getElementById("main");
        let table = document.createElement("table");

        table.className = "lager-table";
        table.innerHTML = "<tr><td>Produkt</td><td>Antal</td></tr>";

        myFunction.setTitle("Produkter", [{name: "Home", nav: home.showHome}]);
        main.innerHTML = "";

        products.allProducts.map(function (product) {
            let productElement = document.createElement("tr");
            let productName = document.createElement("td");
            let ammount = document.createElement("td");

            productName.textContent = product.name;
            ammount.className = "amount";
            ammount.textContent = product.stock;

            productElement.appendChild(productName);
            productElement.appendChild(ammount);

            productElement.addEventListener("click", function() {
                productDetails.showProduct(product.id);
            });

            table.appendChild(productElement);
            main.appendChild(table);
            menu.showMenu("Stock");
        });
    }
};

export { productList };
