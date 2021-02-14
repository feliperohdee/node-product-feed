const Product = require('./lib/product');
const ProductPrice = require('./lib/productPrice');
const ProductInstallment = require('./lib/productInstallment');
const ProductDateRange = require('./lib/productDateRange');
const ProductLoyaltyPoints = require('./lib/productLoyaltyPoints');
const ProductShipping = require('./lib/productShipping');
const ProductTax = require('./lib/productTax');
const FeedBuilder = require('./lib/feedBuilder');

module.exports = {
    Product,
    ProductPrice,
    ProductInstallment,
    ProductDateRange,
    ProductLoyaltyPoints,
    ProductShipping,
    ProductTax,
    FeedBuilder
};