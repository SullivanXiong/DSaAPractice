import pytest
from calcudoku import Calcudoku

# Get the full path of the current test file (calcudoku-test.py)
current_directory = os.path.dirname(os.path.abspath(__file__))

# Directory where the test files are located (relative to the test script)
test_directory = os.path.join(current_directory, "../test")

@pytest.fixture
def calcudoku():
    """Fixture to initialize a new Calcudoku instance."""
    return Calcudoku()

import os
from calcudoku import Calcudoku

# Get the full path of the current test file (calcudoku-test.py)
current_directory = os.path.dirname(os.path.abspath(__file__))

# Directory where the test files are located (relative to the test script)
test_directory = os.path.join(current_directory, "test")

def test_calcudoku(calcudoku):
    """Loop through all test files in the test directory and check
       if Calcudoku can solve the puzzle correctly by comparing it to
       the expected output in the corresponding answer files.
    """
    test_files = [f for f in os.listdir(test_directory) if f.endswith('.test')]
    
    for test_file in test_files:
        # Get the base name (0, 1, 2, etc.) for corresponding answer files
        base_name = test_file.split('.')[0]
        test_file_path = os.path.join(test_directory, test_file)
        answer_file_path = os.path.join(test_directory, f"{base_name}.answer")

        # Read the expected answer
        with open(answer_file_path, 'r') as f:
            expected_answer = f.read().strip()

        # Load the cages from the test file
        calcudoku.read_cages(test_file_path)
        solved_matrix = calcudoku.solve()

        # Convert the solved matrix to the same format as the expected answer
        solved_output = '\n'.join(' '.join(map(str, row)) for row in solved_matrix)

        # Check if the solved output matches the expected answer
        assert solved_output == expected_answer, f"Failed for {test_file}. Expected {expected_answer}, got {solved_output}"
