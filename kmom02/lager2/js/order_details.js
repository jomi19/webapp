"use strict";
import { orders } from "./orders.js";
import { orderList } from "./order_list.js";
import { myFunction} from "./src.js";
import { home } from "./home.js";
import { products } from "./products";

import utils from "./utils.js";

let orderDetails = {
    showorder: function (ordertId) {
        let main = document.getElementById("main");
        let order = orders.getOrder(ordertId);
        let table = document.createElement("table");
        let button = document.createElement("button");
        let checkNr = 0;
        let orderData = [];

        button.className = "button pack-order full-width-button";
        button.textContent = "Packat";
        window.header.innerHTML = "";
        table.className = "lager-table";
        table.innerHTML = "<tr><td></td><td>Order</td><td>Antal</td><td>Plats</td></tr>";
        utils.removeNodes("main");
        myFunction.setTitle(order.id, [{name: "Home", nav: home.showHome},
            {name: "order", nav: orderList.show}]);


        console.log(order.order_items);

        order.order_items.forEach(element => {
            let row = document.createElement("tr");
            let productName = document.createElement("td");
            let productAmount = document.createElement("td");
            let productLocation = document.createElement("td");
            let check = document.createElement("td");
            let checkBox = document.createElement("input");
            let prod = products.getProduct(element.product_id);
            let updateProd = {};

            updateProd = {id: element.product_id, stock: prod.stock,
                amount: element.amount, name: prod.name};
            orderData.push(updateProd);
            checkBox.type = "checkbox";
            check.className = "order-check";
            checkBox.className = "packlist-check";
            checkBox.id = "ch" + checkNr;
            checkNr = checkNr +1;

            if (prod.stock < element.amount) {
                checkBox.disabled = "disabled";
                row.className =  "no-stock";
            }

            check.appendChild(checkBox);
            productName.innerHTML = element.name;
            productAmount.innerHTML = element.amount;
            productLocation.innerHTML = element.location;
            row.appendChild(check);
            row.appendChild(productName);
            row.appendChild(productAmount);
            row.appendChild(productLocation);
            table.appendChild(row);
        });
        let checkBoxes = document.getElementsByClassName("order-check");

        button.addEventListener("click", function() {
            for (var i = 0; i < checkBoxes.length; i++) {
                if (!document.querySelector('#ch'+i).checked) {
                    return;
                }
            }
            products.upToDate = false;
            orders.upToDate = false;
            myFunction.updateProduct(orderData);
            myFunction.updateOrder({id: order.id, status: 200, name: order.name});
        });
        main.appendChild(table);
        main.appendChild(button);
    }
};

export { orderDetails };
