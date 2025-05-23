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
            for i, line in enumerate(f):         #enumerate: places iterable in indexed list
                if i == 0:                       #if index == 0, then set self.num_cages as int
                    self.num_cages = int(line)
                    continue

            

            


    def solve(self):
        """ Solve the Calcudoku puzzle by filling in the matrix with the
            correct numbers.
            
            Args:
                None

            Returns:
                The solved matrix. (self.matrix)
        """
        pass

    def __str__(self):
        return '\n'.join(' '.join(str(num) for num in row) for row in self.matrix)
    
    def __repr__(self):
        return '\n'.join(' '.join(str(num) for num in row) for row in self.matrix)