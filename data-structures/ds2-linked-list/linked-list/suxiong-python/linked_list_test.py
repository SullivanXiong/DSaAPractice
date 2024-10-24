import pytest
from linked_list import LinkedList

@pytest.fixture
def linked_list():
    return LinkedList()

def test_unit_add_first(linked_list):
    linked_list.add_first("First")
    assert linked_list.get_first() == "First"

def test_unit_add_last(linked_list):
    linked_list.add_last("Last")
    assert linked_list.get_last() == "Last"

def test_unit_add(linked_list):
    linked_list.add("Middle", 0)
    assert linked_list.get(0) == "Middle"

def test_unit_remove(linked_list):
    linked_list.add_first("First")
    linked_list.add_last("Last")
    assert linked_list.remove(0) == "First"

def test_unit_get_size(linked_list):
    linked_list.add_first("First")
    linked_list.add_last("Last")
    assert linked_list.get_size() == 2

def test_integration_add_and_remove(linked_list):
    linked_list.add_first("First")
    linked_list.add_last("Last")
    linked_list.add("Middle", 1)
    assert linked_list.remove(0) == "First"
    assert linked_list.remove(0) == "Middle"
    assert linked_list.remove(0) == "Last"

def test_integration_add_and_get(linked_list):
    linked_list.add_first("First")
    linked_list.add_last("Last")
    linked_list.add("Middle", 1)
    assert linked_list.get(0) == "First"
    assert linked_list.get(1) == "Middle"
    assert linked_list.get(2) == "Last"

def test_integration_get_size(linked_list):
    linked_list.add_first("First")
    linked_list.add_last("Last")
    linked_list.add("Middle", 1)
    assert linked_list.get_size() == 3

def test_integration_is_empty(linked_list):
    assert linked_list.get_size() == 0
    linked_list.add_first("First")
    assert linked_list.get_size() != 0

def test_integration_add_and_set_and_remove(linked_list):
    linked_list.add_first("First")
    linked_list.add_last("Last")
    linked_list.add("Middle", 1)
    assert linked_list.get_size() == 3

    linked_list.set_node("NewFirst", 0)
    linked_list.set_node("NewMiddle", 1)
    linked_list.set_node("NewLast", 2)
    assert linked_list.get_size() == 3

    assert linked_list.remove_first() == "NewFirst"
    assert linked_list.get_size() == 2

    assert linked_list.remove_first() == "NewMiddle"
    assert linked_list.get_size() == 1

    assert linked_list.remove_first() == "NewLast"
    assert linked_list.get_size() == 0

def test_integration_add_and_set_and_remove_last(linked_list):
    linked_list.add_first("First")
    linked_list.add_last("Last")
    linked_list.add("Middle", 1)
    assert linked_list.get_size() == 3

    linked_list.set_node("NewFirst", 0)
    linked_list.set_node("NewMiddle", 1)
    linked_list.set_node("NewLast", 2)
    assert linked_list.get_size() == 3

    assert linked_list.remove_last() == "NewLast"
    assert linked_list.get_size() == 2

    assert linked_list.remove_last() == "NewMiddle"
    assert linked_list.get_size() == 1

    assert linked_list.remove_last() == "NewFirst"
    assert linked_list.get_size() == 0

def test_integration_add_and_set_and_remove_middle(linked_list):
    linked_list.add_first("First")
    linked_list.add_last("Last")
    linked_list.add("Middle", 1)
    assert linked_list.get_size() == 3

    linked_list.set_node("NewFirst", 0)
    linked_list.set_node("NewMiddle", 1)
    linked_list.set_node("NewLast", 2)
    assert linked_list.get_size() == 3

    assert linked_list.remove(1) == "NewMiddle"
    assert linked_list.get_size() == 2

    assert linked_list.remove(1) == "NewLast"
    assert linked_list.get_size() == 1

    assert linked_list.remove(0) == "NewFirst"
    assert linked_list.get_size() == 0

def test_integration_add_and_set_and_remove_out_of_bounds(linked_list):
    linked_list.add_first("First")
    linked_list.add_last("Last")
    linked_list.add("Middle", 1)
    assert linked_list.get_size() == 3

    linked_list.set_node("NewFirst", 0)
    linked_list.set_node("NewMiddle", 1)
    linked_list.set_node("NewLast", 2)
    assert linked_list.get_size() == 3

    with pytest.raises(IndexError):
        linked_list.remove(3)
    assert linked_list.get_size() == 3

    with pytest.raises(IndexError):
        linked_list.remove(-1)
    assert linked_list.get_size() == 3

def test_integration_add_and_set_and_remove_empty(linked_list):
    assert linked_list.get_size() == 0

    with pytest.raises(IndexError):
        linked_list.remove_first()
    assert linked_list.get_size() == 0

    with pytest.raises(IndexError):
        linked_list.remove_last()
    assert linked_list.get_size() == 0

    with pytest.raises(IndexError):
        linked_list.remove(0)
    assert linked_list.get_size() == 0

def test_integration_add_and_set_and_remove_one(linked_list):
    linked_list.add_first("First")
    assert linked_list.get_size() == 1

    assert linked_list.remove_first() == "First"
    assert linked_list.get_size() == 0

    linked_list.add_last("Last")
    assert linked_list.get_size() == 1

    assert linked_list.remove_last() == "Last"
    assert linked_list.get_size() == 0

    linked_list.add_first("First")
    assert linked_list.get_size() == 1

    assert linked_list.remove(0) == "First"
    assert linked_list.get_size() == 0
