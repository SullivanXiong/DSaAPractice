class Calcudoku:
    def __init__(self):
        self.matrix = [[0, 0, 0, 0, 0] for _ in range(5)]
        self.num_cages = 0
        self.cage_sums = []
        self.cages = []
        
    def read_cages(self, filename):
        """ Given a filename, such as a test input file, read the cages from
            the file and store them in the class.

            Set these arguments:
                self.num_cages: the number of cages in the puzzle
                self.cage_sums: a list of the sums for each cage
                self.cages: a list of the cells in each cage
            
            Args:
                filename: a string representing the name of the file to read
                
            Returns:
                None
        """
        
        with open(filename) as f:
            for i, line in enumerate(f):
                if i == 0:
                    self.num_cages = int(line)
                    continue                
                
                cage_split = line.strip().split()
                cage_sum = int(cage_split[0])
                cage = []
                for cage_detail in range(1, len(cage_split)):
                    cage.append(int(cage_split[cage_detail]))
                    
                self.cage_sums.append(cage_sum)
                self.cages.append(cage)
                

    def solve(self):
        """ Solve the Calcudoku puzzle by filling in the matrix with the
            correct numbers.
            
            Args:
                None

            Returns:
                The solved matrix. (self.matrix)
        """
        row = 0
        col = 0
        
        while row < 5:
            self.matrix[row][col] += 1
            print(self.format_matrix())
            
            if self.matrix[row][col] > 5:
                self.matrix[row][col] = 0
                if col == 0:
                    col = 4
                    row -= 1
                else:
                    col -= 1
                continue

            # validate row and column
            if (self.validate_row(row) and self.validate_col(col) and self.validate_cages()):
                if col == 4:
                    col = 0
                    row += 1
                else:
                    col += 1
            elif self.matrix[row][col] == 5:
                self.matrix[row][col] = 0
                if col == 0:
                    col = 4
                    row -= 1
                else:
                    col -= 1
                
        return self.matrix
    
    def validate_row(self, row):
        """ Validate the row of the matrix.
            
            Args:
                row: the row to validate

            Returns:
                True if the row is valid, False otherwise.
        """
        for i in range(4):
            for j in range(i + 1, 5):
                if self.matrix[row][i] == self.matrix[row][j] and self.matrix[row][i] != 0 and self.matrix[row][j] != 0:
                    return False
        return True
    
    def validate_col(self, column):
        """ Validate the column of the matrix.
            
            Args:
                col: the column to validate

            Returns:
                True if the column is valid, False otherwise.
        """
        for i in range(4):
            for j in range(i + 1, 5):
                if self.matrix[i][column] == self.matrix[j][column] and self.matrix[i][column] != 0 and self.matrix[j][column] != 0:
                    return False
        return True
    
    def validate_cages(self):
        """ Validate the cage of the matrix.
            
            Args:
                cage: the cage to validate

            Returns:
                True if the cage is valid, False otherwise.
        """
        for i in range(self.num_cages):
            cage_sum = self.cage_sums[i]
            cage = self.cages[i]
            cage_completed = True
            
            _sum = 0
            for cell in cage:
                if (self.matrix[cell // 5][cell % 5] == 0):
                    cage_completed = False
                    break

                _sum += self.matrix[cell // 5][cell % 5]
                
            if not cage_completed:
                continue
                
            if _sum != cage_sum:
                return False
            
        return True

    def format_matrix(self):
        return '\n'.join(' '.join(str(num) for num in row) for row in self.matrix) + '\n'

    def __str__(self):
        self.format_matrix()
    
    def __repr__(self):
        self.format_matrix()


if __name__ == "__main__":
    import os

    # Get the full path of the current test file (calcudoku-test.py)
    current_directory = os.path.dirname(os.path.abspath(__file__))

    # Directory where the test files are located (relative to the test script)
    test_directory = os.path.join(current_directory, "../test")

    calcudoku = Calcudoku()
    calcudoku.read_cages(test_directory + "/3.test")
    print(calcudoku.num_cages)
    print(calcudoku.cages)
    print(calcudoku.cage_sums)
    print(calcudoku.solve())