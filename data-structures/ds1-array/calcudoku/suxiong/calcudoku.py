class Calcudoku:
    def __init__(self):
        self.num_cages = 0
        self.cage_sums = []
        self.cages = []
        
    def read_cages(self, filename):
        """
        """
        with open(filename) as f:
            for i, line in enumerate(f):
                if i == 0:
                    self.num_cages = int(line)
                    continue
                
                for line.split()

    def solve(self):
        def helper(x, y):
            if x == self.size:
                return True

            next_x = x + 1 if y == self.size - 1 else x
            next_y = 0 if y == self.size - 1 else y + 1

            if self.board[x][y] != 0:
                return helper(next_x, next_y)

            for num in range(1, self.size + 1):
                if self.is_valid(x, y, num):
                    self.board[x][y] = num
                    self.row[x].add(num)
                    self.col[y].add(num)

                    for i, c in enumerate(self.cage):
                        if (x, y) in c:
                            self.cage[i].remove((x, y))

                            if not self.cage[i]:
                                if not helper(next_x, next_y):
                                    self.board[x][y] = 0
                                    self.row[x].remove(num)
                                    self.col[y].remove(num)
                                    self.cage[i].add((x, y))
                                else:
                                    return True

                    if helper(next_x, next_y):
                        return True

                    self.board[x][y] = 0
                    self.row[x].remove(num)
                    self.col[y].remove(num)

            return False

        return helper(0, 0)

    def __str__(self):
        return '\n'.join(' '.join(str(num) for num in row) for row in self.board)