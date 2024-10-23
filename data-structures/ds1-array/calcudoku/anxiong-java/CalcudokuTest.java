import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalcudokuTest {

    private Calcudoku calcudoku;

    // Get the test directory from a system property, or use a default path if not provided
    private static Path getTestDirectory() {
        // Check if a directory was provided via a flag, else use the default path
        String testDir = System.getProperty("testDir", "data-structures/ds1-array/calcudoku/test");
        Path testDirectory = Paths.get(testDir).normalize();
        System.out.println("Using test directory: " + testDirectory.toAbsolutePath());
        return testDirectory;
    }

    @BeforeEach
    public void setUp() {
        calcudoku = new Calcudoku();
    }

    @ParameterizedTest
    @MethodSource("getTestFiles")
    public void testCalcudoku(Path testFilePath) throws IOException {
        // Derive the corresponding answer file path
        String baseName = testFilePath.getFileName().toString().replace(".test", "");
        Path answerFilePath = testFilePath.getParent().resolve(baseName + ".answer");

        // Read the expected answer from the answer file
        String expectedAnswer = readFile(answerFilePath);

        // Load the cages from the test file and solve the puzzle
        calcudoku.readCages(testFilePath.toString());
        int[][] solvedMatrix = calcudoku.solve();

        // Convert the solved matrix into a string format for comparison
        String solvedOutput = matrixToString(solvedMatrix);

        // Compare the solved output with the expected answer
        assertEquals(normalize(expectedAnswer), normalize(solvedOutput), "Test failed for file: " + testFilePath.getFileName());
    }

    static Stream<Path> getTestFiles() throws IOException {
        Path testDirectory = getTestDirectory();
        System.out.println("Looking for test files in: " + testDirectory.toAbsolutePath());

        // Collect all .test files from the dynamically resolved test directory
        List<Path> files = Files.walk(testDirectory)
                .filter(Files::isRegularFile)
                .filter(path -> path.toString().endsWith(".test"))
                .collect(Collectors.toList());

        if (files.isEmpty()) {
            System.out.println("No .test files found!");
        } else {
            files.forEach(file -> System.out.println("Found test file: " + file));
        }

        return files.stream();
    }

    private String normalize(String input) {
        return input.replaceAll("\\s+", " ").trim();
    }

    private String readFile(Path filePath) throws IOException {
        return Files.readString(filePath, StandardCharsets.UTF_8).trim();
    }

    private String matrixToString(int[][] matrix) {
        StringBuilder sb = new StringBuilder();
        for (int[] row : matrix) {
            for (int num : row) {
                sb.append(num).append(" ");
            }
            sb.setLength(sb.length() - 1); // Remove last space
            sb.append("\n");
        }
        return sb.toString().trim();
    }
}
