import pytest
import os
from calcudoku import Calcudoku

# Get the full path of the current test file (calcudoku-test.py)
current_directory = os.path.dirname(os.path.abspath(__file__))

# Directory where the test files are located (relative to the test script)
test_directory = os.path.abspath(os.path.join(current_directory, "../test"))

def get_test_files():
    """Collect all .test files in the test directory."""
    return [f for f in os.listdir(test_directory) if f.endswith('.test')]

@pytest.mark.parametrize("test_file", get_test_files())
def test_calcudoku(test_file):
    """Run a separate test for each file in the test directory."""

    # Get the base name (0, 1, 2, etc.) for corresponding answer files
    base_name = test_file.split('.')[0]
    test_file_path = os.path.join(test_directory, test_file)
    answer_file_path = os.path.join(test_directory, f"{base_name}.answer")

    # Read the expected answer
    with open(answer_file_path, 'r') as f:
        expected_answer = f.read().strip()

    # Initialize Calcudoku
    calcudoku = Calcudoku()

    # Load the cages from the test file
    calcudoku.read_cages(test_file_path)

    # Attempt to solve the puzzle
    solved_matrix = calcudoku.solve()

    # Convert the solved matrix to the same format as the expected answer
    solved_output = '\n'.join(' '.join(map(str, row)) for row in solved_matrix)

    # Check if the solved output matches the expected answer
    assert solved_output == expected_answer, f"Failed for {test_file}. Expected {expected_answer}, got {solved_output}"
