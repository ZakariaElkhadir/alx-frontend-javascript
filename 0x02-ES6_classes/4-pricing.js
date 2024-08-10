import Currency from './3-currency';

/**
 * Represents a pricing object.
 *
 * @class
 * @constructor
 * @param {number} amount - The amount of the pricing.
 * @param {object} currency - The currency of the pricing.
 * @param {string} currency.name - The name of the currency.
 * @param {string} currency.code - The code of the currency.
 */
class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  get currency() { return this._currency; }

  set currency(value) { return this._currency = value; }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
export default Pricing;
