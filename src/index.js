module.exports = function toReadable(number) {
  const readOne = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const readTen = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) return 'zero';

  const hundreds = Math.floor(number / 100);
  const tens = number - hundreds * 100;
  const tenL = Math.floor(tens / 10);
  const tenR = tens % 10;

  const result = [];
  if (hundreds > 0) {
    result.push(`${readOne[hundreds - 1]} hundred`);
  }

  if (tenL > 1) {
    result.push(`${readTen[tenL - 2]}`);

    if (tenR > 0) {
      result.push(`${readOne[tenR - 1]}`);
    }
  } else {
    if (readOne[tens - 1]) result.push(`${readOne[tens - 1]}`);
  }

  return result.join(' ');
}
