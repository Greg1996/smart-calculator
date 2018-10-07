class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
  }
  add(number) {
    this.value += number;
    return this.value;
  }
  subtract(number) {
    this.value -= number;
    return this.value;
  }
  multiply(number) {
    this.value *= number;
    return new SmartCalculator(this.value);
  }
  devide(number) {
    this.value /= number;
    return this.value;
  }
  pow(number) {
    this.value = Math.pow(this.value, number);
    return this.value;
  }
}
module.exports = SmartCalculator;
