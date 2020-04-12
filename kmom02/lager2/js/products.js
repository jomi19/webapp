"use strict";
var products = {
    allProducts: [],
    upToDate: false,

    getAllProducts: function(callback) {
        if (products.allProducts.length > 0 && products.upToDate) {
            console.log(products.upToDate);
            if (typeof callback === "function") {
                return callback();
            }
            return;
        }
        products.upToDate = true;
        fetch(
            `https://lager.emilfolino.se/v2/products?api_key=493f94f7e0bdc71b67b2e9a98c4e50ac`)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                products.allProducts = result.data;

                if (typeof callback === "function") {
                    return callback();
                }
            });
    },

    getProduct: function(productId) {
        return products.allProducts.filter(function(product) {
            return product.id == productId;
        })[0];
    }
};

export { products };
