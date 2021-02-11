/**
 * Defines a tax rate of a product.
 */
class ProductTax {
  #rate;
  #country;
  #taxShip;
  #region;
  #postalCode;
  #locationId;
  #locationGroupName;

  /**
   * Gets a tax rate as a percentage of the price.
   * @returns {Number}
   */
  get rate() {
    return this.#rate;
  }

  /**
   * Sets a tax rate as a percentage of the price.
   * @param {Number} value
   */
  set rate(value) {
    this.#rate = value;
  }

  /**
   * Gets a country that an item can be delivered to.
   * Must be an ISO 3166-1 country code (e.g., CH).
   * @returns {String}
   */
  get country() {
    return this.#country;
  }

  /**
   * Sets a country that an item can be delivered to.
   * Must be an ISO 3166-1 country code (e.g., CH).
   * @param {String} value Country code
   */
  set country(value) {
    this.#country = value;
  }

  /**
   * Gets a flag indicating whether a tax is charged on shipping.
   * @returns {Boolean}
   */
  get taxShip() {
    return this.#taxShip;
  }

  /**
   * Sets a flag indicating whether a tax is charged on shipping.
   * @returns {Boolean}
   */
  set taxShip(value) {
    this.#taxShip = value;
  }

  /**
   * Gets a state, territory, or prefecture.
   * Must be an ISO 3166-1 country code without country prefix (e.g., CA, NSW, 03)
   * @returns {String}
   */
  get region() {
    return this.#region;
  }

  /**
   * Sets a state, territory, or prefecture.
   * Must be an ISO 3166-1 country code without country prefix (e.g., CA, NSW, 03)
   * @param {String} value Country code without country prefix
   */
  set region(value) {
    this.#region = value;
  }

  /**
   * Gets a postal code or postal code range.
   * @returns {String}
   */
  get postalCode() {
    return this.#postalCode;
  }

  /**
   * Sets a postal code or postal code range.
   * @param {String} value
   */
  set postalCode(value) {
    this.#postalCode = value;
  }

  /**
   * Gets a numeric criteria ID of a location defined by Google Ads API.
   * @returns {String}
   */
  get locationId() {
    return this.#locationId;
  }

  /**
   * Sets a numeric criteria ID of a location defined by Google Ads API.
   * @param {String} value
   */
  set locationId(value) {
    this.#locationId = value;
  }

  /**
   * Gets a location group that can be set up hrough Merchant Center settings.
   * @returns {String}
   */
  get locationGroupName() {
    return this.#locationGroupName;
  }

  /**
   * Sets a location group that can be set up hrough Merchant Center settings.
   * @returns {String}
   */
  set locationGroupName(value) {
    this.#locationGroupName = value;
  }
}

module.exports = ProductTax;
