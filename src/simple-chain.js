const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: "",

  getLength() {
    if (this.chain !== "") {
      return this.chain.split("~~").length;
    } else {
      return 0;
    }
  },

  addLink(value = " ") {
    if (this.chain !== "") {
      this.chain = this.chain + `~~( ${value} )`;
    } else {
      this.chain = `( ${value} )`;
    }
    return this;
  },

  removeLink(position) {
    if (
      position < 1 ||
      position > this.chain.split("~~").length - 1 ||
      typeof position !== "number"
    ) {
      this.chain = "";
      throw new Error("You can't remove incorrect link!");
    } else {
      const updatedChain = [];
      this.chain.split("~~").forEach((link, i) => {
        if (i + 1 !== position) {
          updatedChain.push(link);
        }
      });
      this.chain = updatedChain.join("~~");
      return this;
    }
  },

  reverseChain() {
    const reversedChain = this.chain.split("~~").reverse().join("~~");
    this.chain = reversedChain;
    return this;
  },

  finishChain() {
    const finishedChain = this.chain;
    this.chain = "";
    return finishedChain;
  },
};

module.exports = {
  chainMaker,
};
