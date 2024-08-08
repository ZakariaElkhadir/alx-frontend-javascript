import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  get amount() { return this._amount; }

  set amount(value) { this._amount = value; }

  get currency() { return this._currency; }

  set currency(value) { return this._currency = value; }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullPrice()}`;
  }
}
export default Pricing;
