"use strict";
import { orders } from "./orders.js";
import { orderDetails } from "./order_details.js";
import { menu } from "./menu";
import { home } from "./home.js";
import { myFunction} from "./src";
import { products } from "./products";



let orderList = {
    show: function() {
        orders.getAllorders(orderList.renderorders);
    },

    renderorders: function() {
        let main = document.getElementById("main");
        let table = document.createElement("table");

        table.className = "lager-table";
        table.innerHTML = "<tr><td>Order</td><td>Status</td></tr>";
        products.getAllProducts(null);
        myFunction.setTitle("Ordrar", [{name: "Home", nav: home.showHome}]);
        main.innerHTML = "";

        orders.allorders.map(function (order) {
            if (order.status === "Ny") {
                let orderElement = document.createElement("tr");
                let orderName = document.createElement("td");
                let status = document.createElement("td");

                orderName.textContent = order.name;
                status.textContent = order.status;

                orderElement.appendChild(orderName);
                orderElement.appendChild(status);
                console.log(order);

                orderElement.addEventListener("click", function() {
                    orderDetails.showorder(order.id);
                });
                table.appendChild(orderElement);
            }
            main.appendChild(table);
            menu.showMenu("Orders");
        });
    }
};

export { orderList };
