const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  direct = true;

  constructor(direct = true) {
    this.direct = direct;
  }

  checkInput(message, key) {
    if (!message || !key) {
      throw Error("Incorrect arguments!");
    }
  }

  encrypt(message, key) {
    this.checkInput(message, key);

    let index = -1;
    return message.split("").reduce((str, letter) => {
      const value = this.getValue(letter);
      if (value == null) {
        return this.combine(str, letter);
      }

      index++;
      const keyValue = this.getValue(key.charAt(index % key.length));
      return this.combine(str, this.getEnctyptValue(value, keyValue));
    }, "");
  }

  decrypt(message, key) {
    this.checkInput(message, key);

    let index = -1;
    return message.split("").reduce((str, letter) => {
      const value = this.getValue(letter);
      if (value == null) {
        return this.combine(str, letter);
      }

      index++;
      const keyValue = this.getValue(key.charAt(index % key.length));
      return this.combine(str, this.getDectyptValue(value, keyValue));
    }, "");
  }

  getEnctyptValue(value, keyValue) {
    return String.fromCharCode(((value + keyValue) % 26) + 65);
  }

  getDectyptValue(value, keyValue) {
    let diff = value - keyValue;
    return String.fromCharCode((diff < 0 ? diff + 26 : diff) + 65);
  }

  getValue(char) {
    const code = char.charCodeAt(0);
    if (code < 65) {
      return null;
    } else if (code < 91) {
      return code - 65;
    } else if (code < 97) {
      return null;
    } else if (code < 123) {
      return code - 97;
    }
    return null;
  }

  combine(str, letter) {
    return this.direct ? str + letter : letter + str;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
