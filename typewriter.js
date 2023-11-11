let timeChange = 50
const sentence = function (string) {
  for (const char of string) {
    setTimeout(() => {
    process.stdout.write(char);
    }, timeChange);
    timeChange += 50;
  }
  setTimeout(() => {
  process.stdout.write('\n');
  }, timeChange);
}

sentence("whatsup bro")