const fs = require("fs");
const path = require("path");
const Calcudoku = require("./calcudoku"); // Assuming the Calcudoku class is in calcudoku.js

function normalizeJavascript(_str) {
  return _str.replace(/\r\n/g, "\n").trim();
}

// Directory where test files are located
const testDirectory = path.join(__dirname, "../test");

// Utility function to read a file's content synchronously
const readFile = (filepath) => {
  return fs.readFileSync(filepath, "utf8").trim();
};

// Get all test files (those ending with `.test`) from the test directory
const getTestFiles = () => {
  return fs.readdirSync(testDirectory).filter((f) => f.endsWith(".test"));
};

describe("Calcudoku Test Suite", () => {
  const testFiles = getTestFiles();

  testFiles.forEach((testFile) => {
    const baseName = path.basename(testFile, ".test"); // Example: '0' from '0.test'
    const testFilePath = path.join(testDirectory, `${baseName}.test`);
    const answerFilePath = path.join(testDirectory, `${baseName}.answer`);

    test(`Testing file: ${testFile}`, () => {
      // Initialize Calcudoku
      const calcudoku = new Calcudoku();

      // Load the cages from the test file
      calcudoku.read_cages(testFilePath);

      // Solve the puzzle
      const solvedMatrix = calcudoku.solve();

      // Read the expected output from the answer file
      const expectedAnswer = readFile(answerFilePath);

      // Convert the solved matrix to a string format
      const solvedOutput = solvedMatrix.map((row) => row.join(" ")).join("\n");

      // Compare the solved output with the expected output
      expect(normalizeJavascript(solvedOutput)).toEqual(normalizeJavascript(expectedAnswer));
    });
  });
});
