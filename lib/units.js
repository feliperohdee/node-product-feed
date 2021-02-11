/* eslint-disable max-classes-per-file */

/**
 * Defines a base class for a value-unit pair.
 */
class ValueUnit {
  #value;
  #unit;
  /**
   * Creates an instance of a value-unit class.
   * @param {Number} value Numeric value
   * @param {String} unit Unit name. e.g. kg, ml.
   */
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  /**
   * Gets a numeric value
   * @returns {Number}
   */
  get value() {
    return this.#value;
  }

  /**
   * Sets a numeric value
   * @param {Number} value
   */
  set value(value) {
    this.#value = value;
  }

  /**
   * Gets a unit name.
   * @returns {String}
   */
  get unit() {
    return this.#unit;
  }

  /**
   * Sets a unit name.
   * @param {String} value
   */
  set unit(value) {
    this.#unit = value;
  }
}

class UnitPricingMeasure extends ValueUnit { }

class ShippingWeight extends ValueUnit { }

class ShippingDimension extends ValueUnit {}

module.exports = {
  ValueUnit,
  UnitPricingMeasure,
  ShippingWeight,
  ShippingDimension,
};
