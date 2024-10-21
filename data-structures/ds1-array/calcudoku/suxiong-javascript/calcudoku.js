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
  read_cages(filename) {
    let lines = fs.readFileSync(filename, "utf8").trim().split("\n");

    for (const [index, line] of lines.entries()) {
      if (index === 0) {
        this.num_cages = parseInt(line);
        continue;
      }

      let cage = [];
      line.split(" ").forEach((cage_detail, i) => {
        if (i === 0) {
          this.cage_sums.push(parseInt(cage_detail));
        } else {
          cage.push(parseInt(cage_detail));
        }
      });

      this.cages.push(cage);
    }
  }

  /**
   * Solve the Calcudoku puzzle by filling in the matrix with the correct
   * numbers.
   *
   * @returns {number[][]} - the solved matrix.
   */
  solve() {
    let row = 0;
    let col = 0;

    while (row < 5) {
      this.matrix[row][col] += 1;

      if (this.matrix[row][col] > 5) {
        this.matrix[row][col] = 0;
        col -= 1;
        if (col < 0) {
          col = 4;
          row -= 1;
        }
        continue;
      }

      if (this.check_constraints(row, col)) {
        if (col == 4) {
          col = 0;
          row += 1;
        } else {
          col += 1;
        }
      } else if (this.matrix[row][col] == 5) {
        this.matrix[row][col] = 0;
        if (col == 0) {
          row -= 1;
          col = 4;
        } else {
          col -= 1;
        }
      }
    }

    return this.matrix;
  }

  /**
   * Check if the row constraint is satisfied.
   *
   * @param {number} row - the row index.
   * @param {number} col - the column index.
   * @returns {boolean} - true if the row constraint is satisfied, false otherwise.
   */
  check_constraints(row, col) {
    return this.check_row(row) && this.check_col(col) && this.check_cages();
  }

  /**
   * Check if the row constraint is satisfied.
   *
   * @param {number} row - the row index.
   * @returns {boolean} - true if the row constraint is satisfied, false otherwise.
   */
  check_row(row) {
    for (let i = 0; i < 4; i++) {
      for (let j = i + 1; j < 5; j++) {
        if (this.matrix[row][i] === 0 || this.matrix[row][j] === 0) {
          continue;
        }

        if (this.matrix[row][i] === this.matrix[row][j]) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Check if the column constraint is satisfied.
   *
   * @param {number} col - the column index.
   * @returns {boolean} - true if the column constraint is satisfied, false otherwise.
   */
  check_col(col) {
    for (let i = 0; i < 4; i++) {
      for (let j = i + 1; j < 5; j++) {
        if (this.matrix[i][col] === 0 || this.matrix[j][col] === 0) {
          continue;
        }

        if (this.matrix[i][col] === this.matrix[j][col]) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Check if the cage constraint is satisfied.
   *
   * @returns {boolean} - true if the cage constraint is satisfied, false otherwise.
   */
  check_cages() {
    for (const [index, cage] of this.cages.entries()) {
      let sum = 0;
      let cage_completed = true;

      for (let cell of cage) {
        let row = Math.floor(cell / 5);
        let col = cell % 5;

        if (this.matrix[row][col] === 0) {
          cage_completed = false;
          break;
        }

        sum += this.matrix[row][col];
      }

      if (sum !== this.cage_sums[index] && cage_completed) {
        return false;
      }
    }

    return true;
  }

  /** format the matrix to a string that is easier to read
   *
   * @returns {string} - the formatted matrix
   */
  format_matrix() {
    return this.matrix.map((row) => row.join(" ")).join("\n") + "\n";
  }
}

// Export the Calcudoku class
module.exports = Calcudoku;

if (require.main === module) {
  const path = require("path");

  let calcudoku = new Calcudoku();
  // Get the full path of the current test file
  const currentDirectory = __dirname;

  // Directory where the test files are located (relative to the test script)
  const testDirectory = path.join(currentDirectory, "../test");

  calcudoku.read_cages(`${testDirectory}/0.test`);

  console.log(calcudoku.num_cages);
  console.log(calcudoku.cage_sums);
  console.log(calcudoku.cages);

  console.log(calcudoku.solve());
}
