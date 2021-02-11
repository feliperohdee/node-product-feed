const ProductDateRange = require('./productDateRange');
const ProductPrice = require('./productPrice');
const ProductInstallment = require('./productInstallment');
const ProductLoyaltyPoints = require('./productLoyaltyPoints');
const ProductShipping = require('./productShipping');
const ProductTax = require('./productTax');
const {
    UnitPricingMeasure,
    ShippingWeight,
    ShippingDimension,
} = require('./units');

/**
 * Defines a product.
 */
class Product {
    id;
    title;
    description;
    link;
    imageLink;
    mobileLink;
    additionalImageLink;
    availability;
    availabilityDate;
    expirationDate;
    price;
    salePrice;
    salePriceEffectiveDate;
    costOfGoodsSold;
    unitPricingMeasure;
    unitPricingBaseMeasure;
    installment;
    loyaltyPoints;
    googleProductCategory;
    productType;
    brand;
    gtin;
    mpn;
    identifierExists;
    condition;
    adult;
    multipack;
    isBundle;
    energyEfficiencyClass;
    minEnergyEfficiencyClass;
    maxEnergyEfficiencyClass;
    ageGroup;
    color;
    gender;
    material;
    pattern;
    size;
    sizeType;
    sizeSystem;
    itemGroupId;
    adwordsRedirect;
    customLabels = new Array(5);
    promotionId;
    includedDestination;
    excludedDestination;
    shipping;
    shippingLabel;
    shippingWeight;
    shippingLength;
    shippingWidth;
    shippingHeight;
    minHandlingTime;
    maxHandlingTime;
    tax;
    taxCategory;

    /**
     * Gets a unique id of each different product.
     *
     * @returns {string}
     */
    get id() {
        return this.id;
    }

    /**
     * Sets a unique id of each different product.
     *
     * @param {string} value
     */
    set id(value) {
        this.id = value;
    }

    /**
     * Gets a title of a product.
     *
     * @returns {string}
     */
    get title() {
        return this.title;
    }

    /**
     * Sets a title of a product.
     *
     * @param {string} value
     */
    set title(value) {
        this.title = value;
    }

    /**
     * Gets a description of a product.
     *
     * @returns {string}
     */
    get description() {
        return this.description;
    }

    /**
     * Sets a description of a product.
     *
     * @param {string} value
     */
    set description(value) {
        this.description = value;
    }

    /**
     * Gets a link to product's landing page.
     * @returns {string}
     */
    get link() {
        return this.link;
    }

    /**
     * Sets a link to product's landing page.
     * @param {string} value
     */
    set link(value) {
        this.link = value;
    }

    /**
     * Gets a link to product's main image.
     * @returns {string}
     */
    get imageLink() {
        return this.imageLink;
    }

    /**
     * Sets a link to product's main image.
     */
    set imageLink(value) {
        this.imageLink = value;
    }

    /**
     * Gets a link to mobile-optimized product's landing page.
     * @returns {string}
     */
    get mobileLink() {
        return this.mobileLink;
    }

    /**
     * Sets a link to mobile-optimized product's landing page.
     * @param {string} value
     */
    set mobileLink(value) {
        this.mobileLink = value;
    }

    /**
     * Gets additional links to product's images.
     * @returns {string|Array}
     */
    get additionalImageLink() {
        return this.additionalImageLink;
    }

    /**
     * Sets additional links to product's images.
     * @param {string|Array} value
     */
    set additionalImageLink(value) {
        this.additionalImageLink = value;
    }

    /**
     * Gets an availability of a product.
     * @returns {string} One of {Product.AVAILABILITY}
     * @see {Product.AVAILABILITY}
     */
    get availability() {
        return this.availability;
    }

    /**
     * Sets an availability of a product.
     * @param {string} value One of {Product.AVAILABILITY}
     * @see {Product.AVAILABILITY}
     */
    set availability(value) {
        this.availability = value;
    }

    /**
     * Gets a date when a product becomes available.
     * Can be used to tell users when a preordered product will be shipped.
     * @returns {Date}
     */
    get availabilityDate() {
        return this.availabilityDate;
    }

    /**
     * Sets a date when a product becomes available.
     * Can be used to tell users when a preordered product will be shipped.
     * @param {Date} value
     */
    set availabilityDate(value) {
        if (!(value instanceof Date)) {
            throw new Error('availabilityDate expects instance of Date as argument.');
        }
        this.availabilityDate = value;
    }

    /**
     * Gets a date when product data expires.
     *
     * @returns {Date}
     */
    get expirationDate() {
        return this.expirationDate;
    }

    /**
     * Sets a date when product data expires.
     *
     * @param {Date} value
     */
    set expirationDate(value) {
        if (!(value instanceof Date)) {
            throw new Error('expirationDate expects instance of Date as argument.');
        }
        this.expirationDate = value;
    }

    /**
     * Gets a product's price.
     * @returns {ProductPrice}
     */
    get price() {
        return this.price;
    }

    /**
     * Sets a product's price.
     * @param {ProductPrice} value.
     */
    set price(value) {
        if (!(value instanceof ProductPrice)) {
            throw new Error('price expects instance of ProductPrice as argument.');
        }
        this.price = value;
    }

    /**
     * Gets a product's price during sale.
     * @returns {ProductPrice}
     */
    get salePrice() {
        return this.salePrice;
    }

    /**
     * Sets a product's price during sale.
     * @param {ProductPrice} value
     */
    set salePrice(value) {
        if (!(value instanceof ProductPrice)) {
            throw new Error('salePrice expects instance of ProductPrice as argument.');
        }
        this.salePrice = value;
    }

    /**
     * Gets a date range when sale price is effective.
     *
     * @returns {ProductDateRange}
     */
    get salePriceEffectiveDate() {
        return this.salePriceEffectiveDate;
    }

    /**
     * Sets a date range when sale price is effective.
     *
     * @param {ProductDateRange} value
     */
    set salePriceEffectiveDate(value) {
        if (!(value instanceof ProductDateRange)) {
            throw new Error('salePriceEffectiveDate expects instance of ProductDateRange as argument.');
        }

        this.salePriceEffectiveDate = value;
    }

    /**
     * Gets a cost of goods sold (COGS).
     * Can be used to get additional reporting on gross profit.
     * @returns {ProductPrice}
     */
    get costOfGoodsSold() {
        return this.costOfGoodsSold;
    }

    /**
     * Sets a cost of goods sold (COGS).
     * Can be used to get additional reporting on gross profit.
     * @param {ProductPrice} value
     */
    set costOfGoodsSold(value) {
        if (!(value instanceof ProductPrice)) {
            throw new Error('costOfGoodsSold expects instance of ProductPrice as argument.');
        }

        this.costOfGoodsSold = value;
    }

    /**
     * Gets a value defining the measure and dimension of a product.
     * This value allows to understand the exact cost per unit for a product.
     * @returns {UnitPricingMeasure}
     */
    get unitPricingMeasure() {
        return this.unitPricingMeasure;
    }

    /**
     * Sets a value defining the measure and dimension of a product.
     * This value allows to understand the exact cost per unit for a product.
     * @param {UnitPricingMeasure} value
     */
    set unitPricingMeasure(value) {
        if (!(value instanceof UnitPricingMeasure)) {
            throw new Error('unitPricingMeasure expects instance of UnitPricingMeasure as argument.');
        }
        this.unitPricingMeasure = value;
    }

    /**
     * Gets a denominator for your unit price.
     * @returns {UnitPricingMeasure}
     */
    get unitPricingBaseMeasure() {
        return this.unitPricingBaseMeasure;
    }

    /**
     * Sets a denominator for your unit price.
     * @param {UnitPricingMeasure} value
     */
    set unitPricingBaseMeasure(value) {
        if (!(value instanceof UnitPricingMeasure)) {
            throw new Error('unitPricingBaseMeasure expects instance of UnitPricingMeasure as argument.');
        }
        this.unitPricingBaseMeasure = value;
    }

    /**
     * Gets a monthly installment plan for a product.
     * @returns {ProductInstallment}
     */
    get installment() {
        return this.installment;
    }

    /**
     * Sets a monthly installment plan for a product.
     * @param {ProductInstallment} value
     */
    set installment(value) {
        if (!(value instanceof ProductInstallment)) {
            throw new Error('installment expects instance of ProductInstallment as argument.');
        }
        this.installment = value;
    }

    /**
     * Gets how many and what type of loyalty points a user receives when buying a product.
     * @returns {ProductLoyaltyPoints}
     */
    get loyaltyPoints() {
        return this.loyaltyPoints;
    }

    /**
     * Sets how many and what type of loyalty points a user receives when buying a product.
     * @param {ProductLoyaltyPoints} value
     */
    set loyaltyPoints(value) {
        if (!(value instanceof ProductLoyaltyPoints)) {
            throw new Error('loyaltyPoints expects instance of ProductLoyaltyPoints as argument.');
        }
        this.loyaltyPoints = value;
    }

    /**
     * Gets a category of an item based on the Google product taxonomy
     * https://support.google.com/merchants/answer/6324436?hl=en&ref_topic=6324338
     * @returns {String|Number}
     */
    get googleProductCategory() {
        return this.googleProductCategory;
    }

    /**
     * Sets a category of an item based on the Google product taxonomy
     * https://support.google.com/merchants/answer/6324436?hl=en&ref_topic=6324338
     * @param {String|Number} value
     */
    set googleProductCategory(value) {
        this.googleProductCategory = value;
    }

    /**
     * Gets client-defined product categorization system
     * @returns {String|Array}
     */
    get productType() {
        return this.productType;
    }

    /**
     * Sets client-defined product categorization system
     * @param {String|Array} value
     */
    set productType(value) {
        this.productType = value;
    }

    /**
     * Gets a product's brand name
     * @returns {String}
     */
    get brand() {
        return this.brand;
    }

    /**
     * Sets a product's brand name
     * @param {String} value
     */
    set brand(value) {
        this.brand = value;
    }

    /**
     * Gets a Global Trade Item Numbers
     * @returns {String|Array}
     */
    get gtin() {
        return this.gtin;
    }

    /**
     * Sets a Global Trade Item Numbers
     * @param {String|Array} value
     */
    set gtin(value) {
        this.gtin = value;
    }

    /**
     * Gets a Manufacturer Part Number
     * @returns {String}
     */
    get mpn() {
        return this.mpn;
    }

    /**
     * Sets a Manufacturer Part Number
     * @param {String} value
     */
    set mpn(value) {
        this.mpn = value;
    }

    /**
     * Gets a flag to indicate that unique product identifiers aren’t available for a product.
     * @returns {Boolean}
     */
    get identifierExists() {
        return this.identifierExists;
    }

    /**
     * Sets a flag to indicate that unique product identifiers aren’t available for a product.
     * @param {Boolean} value
     */
    set identifierExists(value) {
        this.identifierExists = value;
    }

    /**
     * Gets a condition of a product
     * @returns {String} One of {Product.CONDITION}
     * @see {Product.CONDITION}
     */
    get condition() {
        return this.condition;
    }

    /**
     * Sets a condition of a product
     * @param {String} value One of {Product.CONDITION}
     * @see {Product.CONDITION}
     */
    set condition(value) {
        this.condition = value;
    }

    /**
     * Gets a flag to indicate that a product is for adults only
     * @returns {Boolean}
     */
    get adult() {
        return this.adult;
    }

    /**
     * Sets a flag to indicate that a product is for adults only
     * @param {Boolean} value
     */
    set adult(value) {
        this.adult = value;
    }

    /**
     * Gets a value to indicate that multiple identical products are grouped for sale as one item
     * @returns {Number}
     */
    get multipack() {
        return this.multipack;
    }

    /**
     * Sets a value to indicate that multiple identical products are grouped for sale as one item
     * @param {Number} value
     */
    set multipack(value) {
        this.multipack = value;
    }

    /**
     * Gets a value to indicate that a main product is grouped
     * with other products sold together as one package for a single price
     * @returns {Boolean}
     */
    get isBundle() {
        return this.isBundle;
    }

    /**
     * Sets a value to indicate that a main product is grouped
     * with other products sold together as one package for a single price
     * @param {Boolean} value
     */
    set isBundle(value) {
        this.isBundle = value;
    }

    /**
     * Gets an energy efficiency class label of a product
     * @returns {String}
     */
    get energyEfficiencyClass() {
        return this.energyEfficiencyClass;
    }

    /**
     * Sets an energy efficiency class label of a product
     * @param {String} value
     */
    set energyEfficiencyClass(value) {
        this.energyEfficiencyClass = value;
    }

    /**
     * Gets a minimal energy efficiency class of a product
     * @returns {String}
     */
    get minEnergyEfficiencyClass() {
        return this.minEnergyEfficiencyClass;
    }

    /**
     * Sets a minimal energy efficiency class of a product
     * @param {String} value
     */
    set minEnergyEfficiencyClass(value) {
        this.minEnergyEfficiencyClass = value;
    }

    /**
     * Gets a maximal energy efficiency class of a product
     * @returns {String}
     */
    get maxEnergyEfficiencyClass() {
        return this.maxEnergyEfficiencyClass;
    }

    /**
     * Sets a maximal energy efficiency class of a product
     * @param {String} value
     */
    set maxEnergyEfficiencyClass(value) {
        this.maxEnergyEfficiencyClass = value;
    }

    /**
     * Gets a value to indicate a demographic that a product is designed for.
     * @returns {String} One of {Product.AGE_GROUP}
     * @see {Product.AGE_GROUP}
     */
    get ageGroup() {
        return this.ageGroup;
    }

    /**
     * Sets a value to indicate a demographic that a product is designed for.
     * @param {String} value One of {Product.AGE_GROUP}
     * @see {Product.AGE_GROUP}
     */
    set ageGroup(value) {
        this.ageGroup = value;
    }

    /**
     * Gets a product's color
     * @returns {String}
     */
    get color() {
        return this.color;
    }

    /**
     * Sets a product's color
     * @param {String} value
     */
    set color(value) {
        this.color = value;
    }

    /**
     * Gets a gender a product is designed for.
     * @returns {String} One of {Product.GENDER}
     * @see {Product.GENDER}
     */
    get gender() {
        return this.gender;
    }

    /**
     * Sets a gender a product is designed for.
     * @param {String} value One of {Product.GENDER}
     * @see {Product.GENDER}
     */
    set gender(value) {
        this.gender = value;
    }

    /**
     * Gets a material that a product is made of
     * @returns {String}
     */
    get material() {
        return this.material;
    }

    /**
     * Sets a material that a product is made of
     * @param {String} value
     */
    set material(value) {
        this.material = value;
    }

    /**
     * Gets a value to describe a pattern or graphic print on a product
     * @returns {String}
     */
    get pattern() {
        return this.pattern;
    }

    /**
     * Sets a value to describe a pattern or graphic print on a product
     * @param {String} value
     */
    set pattern(value) {
        this.pattern = value;
    }

    /**
     * Gets a value to describe a standardized size of a product
     * @returns {String}
     */
    get size() {
        return this.size;
    }

    /**
     * Sets a value to describe a standardized size of a product
     * @param {String} value
     */
    set size(value) {
        this.size = value;
    }

    /**
     * Gets a value to describe a cut of a product
     * @returns {String} One of {Product.SIZE_TYPE}
     * @see {Product.SIZE_TYPE}
     */
    get sizeType() {
        return this.sizeType;
    }

    /**
     * Sets a value to describe a cut of a product
     * @param {String} value One of {Product.SIZE_TYPE}
     * @see {Product.SIZE_TYPE}
     */
    set sizeType(value) {
        this.sizeType = value;
    }

    /**
     * Gets a value to describe which country's sizing system a product uses
     * @returns {String} One of {Product.SIZE_SYSTEM}
     * @see {Product.SIZE_SYSTEM}
     */
    get sizeSystem() {
        return this.sizeSystem;
    }

    /**
     * Sets a value to describe which country's sizing system a product uses
     * @param {String} value One of {Product.SIZE_SYSTEM}
     * @see {Product.SIZE_SYSTEM}
     */
    set sizeSystem(value) {
        this.sizeSystem = value;
    }

    /**
     * Get a value to group product variants in a product data
     * @returns {String}
     */
    get itemGroupId() {
        return this.itemGroupId;
    }

    /**
     * Sets a value to group product variants in a product data
     * @param {String} value
     */
    set itemGroupId(value) {
        this.itemGroupId = value;
    }

    /**
     * Gets a value to specify additional landing page parameters on
     * a product page that can be used for Shopping ads
     * @returns {String} URL
     */
    get adwordsRedirect() {
        return this.adwordsRedirect;
    }

    /**
     * Sets a value to specify additional landing page parameters on
     * a product page that can be used for Shopping ads
     * @param {String} value URL
     */
    set adwordsRedirect(value) {
        this.adwordsRedirect = value;
    }

    /**
     * Gets a values array to create specific filters to use in Shopping campaigns
     * @returns {Array}
     */
    get customLabels() {
        return this.customLabels;
    }

    /**
     * Sets a values array to create specific filters to use in Shopping campaigns
     * @returns {Array}
     */
    set customLabels(value) {
        this.customLabels = value;
    }

    /**
     * Gets an identifier that can be used in both product data
     * and promotions data to match products to promotions
     * @returns {String|Array}
     */
    get promotionId() {
        return this.promotionId;
    }

    /**
     * Sets an identifier that can be used in both product data
     * and promotions data to match products to promotions
     * @param {String|Array} value
     */
    set promotionId(value) {
        this.promotionId = value;
    }

    /**
     * Gets a value to control the type of ads a product participates in
     * @returns {String|Array}
     * @see {Product.ADS_DESTINATION}
     */
    get includedDestination() {
        return this.includedDestination;

    }

    /**
     * Sets a value to control the type of ads a product participates in
     * @param {String|Array} value One of {Product.ADS_DESTINATION}
     * @see {Product.ADS_DESTINATION}
     */
    set includedDestination(value) {
        this.includedDestination = value;

    }

    /**
     * Gets a value to control the type of ads a product doesn't participate in
     * @returns {String|Array}
     * @see {Product.ADS_DESTINATION}
     */
    get excludedDestination() {
        return this.excludedDestination;
    }

    /**
     * Sets a value to control the type of ads a product doesn't participate in
     * @param {String|Array} value One of {Product.ADS_DESTINATION}
     * @see {Product.ADS_DESTINATION}
     */
    set excludedDestination(value) {
        this.excludedDestination = value;
    }

    /**
     * Gets a value that defines shipping cost for a product
     * @returns {ProductShipping|Array}
     */
    get shipping() {
        return this.shipping;
    }

    /**
     * Sets a value that defines shipping cost for a product
     * @param {ProductShipping|Array} value
     */
    set shipping(value) {
        if (!(value instanceof ProductShipping) && !(value instanceof Array)) {
            throw new Error('shipping expects instance of ProductShipping or Array as argument.');
        }
        this.shipping = value;
    }

    /**
     * Gets a value to group together products with specific shopping rates in Merchant Center
     * @returns {String}
     */
    get shippingLabel() {
        return this.shippingLabel;
    }

    /**
     * Sets a value to group together products with specific shopping rates in Merchant Center
     * @param {String} value
     */
    set shippingLabel(value) {
        this.shippingLabel = value;
    }

    /**
     * Gets a weight of a shipment.
     * @returns {ShippingWeight}
     */
    get shippingWeight() {
        return this.shippingWeight;
    }

    /**
     * Sets a weight of a shipment.
     * @param {ShippingWeight} value
     */
    set shippingWeight(value) {
        if (!(value instanceof ShippingWeight)) {
            throw new Error('shippingWeight expects instance of ShippingWeight as argument.');
        }
        this.shippingWeight = value;
    }

    /**
     * Gets a length of a shipment.
     * @returns {ShippingDimension}
     */
    get shippingLength() {
        return this.shippingLength;
    }

    /**
     * Sets a length of a shipment.
     * @param {ShippingDimension} value
     */
    set shippingLength(value) {
        if (!(value instanceof ShippingDimension)) {
            throw new Error('shippingLength expects instance of ShippingDimension as argument.');
        }
        this.shippingLength = value;
    }

    /**
     * Gets a width of a shipment.
     * @returns {ShippingDimension}
     */
    get shippingWidth() {
        return this.shippingWidth;
    }

    /**
     * Sets a width of a shipment.
     * @param {ShippingDimension} value
     */
    set shippingWidth(value) {
        if (!(value instanceof ShippingDimension)) {
            throw new Error('shippingWidth expects instance of ShippingDimension as argument.');
        }
        this.shippingWidth = value;
    }

    /**
     * Gets a height of a shipment.
     * @returns {ShippingDimension}
     */
    get shippingHeight() {
        return this.shippingHeight;
    }

    /**
     * Sets a height of a shipment.
     * @param {ShippingDimension} value
     */
    set shippingHeight(value) {
        if (!(value instanceof ShippingDimension)) {
            throw new Error('shippingHeight expects instance of ShippingDimension as argument.');
        }
        this.shippingHeight = value;
    }

    /**
     * Gets a minimum value indicating how long it will take
     * for a product to arrive at its destination.
     * @returns {Number}
     */
    get minHandlingTime() {
        return this.minHandlingTime;
    }

    /**
     * Sets a minimum value indicating how long it will take
     * for a product to arrive at its destination.
     * @param {Number} value
     */
    set minHandlingTime(value) {
        this.minHandlingTime = value;
    }

    /**
     * Gets a maximum value indicating how long it will take
     * for a product to arrive at its destination.
     * @returns {Number}
     */
    get maxHandlingTime() {
        return this.maxHandlingTime;
    }

    /**
     * Sets a maximum value indicating how long it will take
     * for a product to arrive at its destination.
     * @param {Number} value
     */
    set maxHandlingTime(value) {
        this.maxHandlingTime = value;
    }

    /**
     * Gets a tax rate of a product.
     * @returns {ProductTax|Array}
     */
    get tax() {
        return this.tax;
    }

    /**
     * Sets a tax rate of a product.
     * @param {ProductTax|Array} value
     */
    set tax(value) {
        if (!(value instanceof ProductTax) && !(value instanceof Array)) {
            throw new Error('tax expects instance of ProductTax or Array as argument.');
        }
        this.tax = value;
    }

    /**
     * Gets a tax category of a product.
     * @returns {String}
     */
    get taxCategory() {
        return this.taxCategory;
    }

    /**
     * Sets a tax category of a product.
     * @param {String} value
     */
    set taxCategory(value) {
        this.taxCategory = value;
    }
}

Product.AVAILABILITY = {
    IN_STOCK: 'in stock',
    OUT_OF_STOCK: 'out of stock',
    PREORDER: 'preorder',
};

Product.CONDITION = {
    NEW: 'new',
    REFURBISHED: 'refurbished',
    USED: 'used',
};

Product.AGE_GROUP = {
    NEWBORN: 'newborn',
    INFANT: 'infant',
    TODDLER: 'toddler',
    KIDS: 'kids',
    ADULT: 'adult',
};

Product.GENDER = {
    MALE: 'male',
    FEMALE: 'female',
    UNISEX: 'unisex',
};

Product.SIZE_TYPE = {
    REGULAR: 'regular',
    PETITE: 'petite',
    PLUS: 'plus',
    BIG: 'big',
    TALL: 'tall',
    MATERNITY: 'maternity',
};

Product.SIZE_SYSTEM = {
    AU: 'AU',
    BR: 'BR',
    CN: 'CN',
    DE: 'DE',
    EU: 'EU',
    FR: 'FR',
    IT: 'IT',
    JP: 'JP',
    MEX: 'MEX',
    UK: 'UK',
    US: 'US',
};

Product.ADS_DESTINATION = {
    SHOPPING: 'Shopping',
    SHOPPING_ACTIONS: 'ShoppingActions',
    DISPLAY_ADS: 'DisplayAds',
};

module.exports = Product;