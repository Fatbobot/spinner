let timeChange = 100;
let linePosition = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];

const spinner = (somethingToSpin) => {
  for (const item of somethingToSpin) {
    setTimeout(() => {
      process.stdout.write(item);
    }, timeChange);
    timeChange += 100
  }
}
spinner(linePosition)