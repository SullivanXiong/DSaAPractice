import java.io.BufferedReader;
import java.io.FileReader;

public class Calcudoku {
    int[][] matrix = new int[5][5];
    int numberOfCages = 0;
    int[][] cages;
    int[] cageSum;

    public Calcudoku() {
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    public void readCages(String filename) {
        try {
            BufferedReader br = new BufferedReader(new FileReader(filename));

            // read in the first line for the number of cages
            String line = br.readLine();
            numberOfCages = Integer.parseInt(line);

            cages = new int[numberOfCages][];
            cageSum = new int[numberOfCages];

            for (int i = 0; i < numberOfCages; i++) {
                line = br.readLine();

                String[] parts = line.split(" ");
                int[] cage = new int[parts.length - 1];

                for (int j = 1; j < parts.length; j++) {
                    cage[j - 1] = Integer.parseInt(parts[j]);
                }
                cages[i] = cage;
                cageSum[i] = Integer.parseInt(parts[0]);
            }

            br.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public int[][] solve() {
        int row = 0;
        int col = 0;

        while (row < 5) {
            matrix[row][col] += 1;

            if (matrix[row][col] > 5) {
                matrix[row][col] = 0;

                if (col == 0) {
                    col = 4;
                    row -= 1;
                }
                else {
                    col -= 1;
                }

                continue;
            }

            if (isValid(row, col)) {
                if (col == 4) {
                    col = 0;
                    row += 1;
                }
                else {
                    col += 1;
                }
            } else if (matrix[row][col] == 5) {
                matrix[row][col] = 0;
                if (col == 0) {
                    col = 4;
                    row -= 1;
                }
                else {
                    col -= 1;
                }
            }
        }

        return matrix;
    }

    private boolean isValid(int row, int col) {
        return isRowValid(row) && isColValid(col) && isCageValid(row, col);
    }

    private boolean isRowValid(int row) {
        for (int i = 0; i < 4; i++) {
            for (int j = i + 1; j < 5; j++) {
                if (matrix[row][i] == matrix[row][j] && matrix[row][i] != 0 && matrix[row][j] != 0) {
                    return false;
                }
            }
        }

        return true;
    }

    private boolean isColValid(int col) {
        for (int i = 0; i < 4; i++) {
            for (int j = i + 1; j < 5; j++) {
                if (matrix[i][col] == matrix[j][col] && matrix[i][col] != 0 && matrix[col][i] != 0) {
                    return false;
                }
            }
        }

        return true;
    }

    private boolean isCageValid(int row, int col) {
        for (int i = 0; i < numberOfCages; i++) {
            int sum = 0;
            boolean cageCompleted = true;

            for (int cell : cages[i]) {
                if (matrix[cell / 5][cell % 5] == 0) {
                    cageCompleted = false;
                    break;
                }

                sum += matrix[cell / 5][cell % 5];
            }

            if (!cageCompleted) {
                continue;
            }

            if (sum != cageSum[i]) {
                return false;
            }
        }

        return true;
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

    public static void main(String[] args) {
        Calcudoku calcudoku = new Calcudoku();
        calcudoku.readCages("data-structures/ds1-array/calcudoku/test/0.test");
        calcudoku.solve();
        // int[][] solvedMatrix = calcudoku.solve();
        // System.out.println(calcudoku.matrixToString(solvedMatrix));
    }
}