/**
 * Defines a price with currency.
 */
class ProductPrice {
  #price;
  #currency;

  /**
   * Creates an instance of ProductPrice
   * @param {Number} price Numeric price
   * @param {String} currency Currency in ISO 4217 format (e.g. EUR, USD).
   */
  constructor(price, currency) {
    this.price = price;
    this.currency = currency;
  }

  /**
   * Gets a price.
   * @returns {Number}
   */
  get price() {
    return this.#price;
  }

  /**
   * Sets a price.
   * @param {Number} value
   */
  set price(value) {
    this.#price = value;
  }

  /**
   * Gets a currency.
   * @returns {String}
   */
  get currency() {
    return this.#currency;
  }

  /**
   * Sets a currency.
   * @param {String} value Currency in ISO 4217 format (e.g. EUR, USD).
   */
  set currency(value) {
    this.#currency = value;
  }
}

module.exports = ProductPrice;
