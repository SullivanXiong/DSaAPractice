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

    public void readCages(String filename) {    }

    public int[][] solve() {
        return matrix;
    }

    public static void main(String[] args) {
        
    }
}