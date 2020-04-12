"use strict";
import { products } from "./products";
import { productList } from "./product_list";
import { myFunction} from "./src";
import { home } from "./home.js";

import utils from "./utils.js";

let productDetails = {
    showProduct: function (productId) {
        let main = document.getElementById("main");
        let product = products.getProduct(productId);

        window.header.innerHTML = "";
        utils.removeNodes("main");
        myFunction.setTitle(product.name, [{name: "Home", nav: home.showHome},
            {name: "Products", nav: productList.show}]);


        console.log(product);
        main.appendChild(utils.createElement({
            type: "p",
            textContent: product.description
        }));
    }
};

export { productDetails };
