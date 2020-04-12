"use strict";
var orders = {
    allorders: [],
    upToDate: false,

    getAllorders: function(callback) {
        if (orders.allorders.length > 0 && orders.upToDate) {
            if (typeof callback === "function") {
                return callback();
            }
            return;
        }
        orders.upToDate = true;
        fetch(
            `https://lager.emilfolino.se/v2/orders?api_key=493f94f7e0bdc71b67b2e9a98c4e50ac`)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                orders.allorders = result.data;

                if (typeof callback === "function") {
                    return callback();
                }
            });
    },

    getOrder: function(productId) {
        return orders.allorders.filter(function(product) {
            return product.id == productId;
        })[0];
    }
};

export { orders };
