const ProductPrice = require('./productPrice');

/**
 * Defines a monthly installment plan for a product.
 */
class ProductInstallment {
  #months;
  #amount;

  /**
   * Creates a new instance of ProductInstallment.
   * @param {Number} months Number of installments a user has to pay
   * @param {ProductPrice} amount Amount a user has to pay per month
   */
  constructor(months, amount) {
    this.months = months;
    this.amount = amount;
  }

  /**
   * Gets a number of installments a user has to pay
   * @returns {Number}
   */
  get months() {
    return this.#months;
  }

  /**
   * Sets a number of installments a user has to pay
   * @param {Number} value
   */
  set months(value) {
    this.#months = value;
  }

  /**
   * Gets amount a user has to pay per month
   * @returns {ProductPrice}
   */
  get amount() {
    return this.#amount;
  }

  /**
   * Sets amount a user has to pay per month
   * @param {ProductPrice} value
   */
  set amount(value) {
    if (!(value instanceof ProductPrice)) {
      throw new Error('amount expects instance of ProductPrice as argument.');
    }
    this.#amount = value;
  }
}

module.exports = ProductInstallment;
