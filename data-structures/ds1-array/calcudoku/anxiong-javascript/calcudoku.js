const fs = require("fs");

class Calcudoku {
  constructor() {
    this.matrix = [];
    for (let i = 0; i < 5; i++) {
      this.matrix.push(new Array(5).fill(0));
    }

    this.num_cages = 0;
    this.cage_sums = [];
    this.cages = [];
  }

  /**
   * Calculates the total cost of items.
   *
   * Set these arguments:
   *      this.num_cages: the number of cages in the puzzle
   *      this.cage_sums: a list of the sums for each cage
   *      this.cages: a list of the cells in each cage
   *
   * @param {string} filename - a string representing the name of the file
   * to read.
   */
  read_cages(filename) {}

  /**
   * Solve the Calcudoku puzzle by filling in the matrix with the correct
   * numbers.
   *
   * @returns {number[][]} - the solved matrix.
   */
  solve() {}
}

// Export the Calcudoku class
module.exports = Calcudoku;
