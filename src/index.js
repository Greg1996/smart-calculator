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
    return this.value;
  }
  devide(number) {
    this.value /= number;
    return this.value;
  }
  pow(number) {
    this.value = Math(this.value, number);
    return this.value;
  }
}
module.exports = SmartCalculator;
