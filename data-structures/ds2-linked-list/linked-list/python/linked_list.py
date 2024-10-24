from typing import Any, Optional


class Node:
    def __init__(self, value: Any, next_node=None):
        self.value : Any = value
        self.next_node : Optional[Node] = next_node

class LinkedList:
    def __init__(self):
        self.size : int = 0
        self.head : Optional[Node] = None
    
    def add(self, value: Any, index: int = None) -> None:
        """ Insert a new node at the specified index of the linked list,
            if no index is provided, the value is inserted at the end of the
            linked list.
        
            Args:
                value: The value to be inserted in the linked list
                index: The index at which the value should be inserted. If None,
                       the value is inserted at the end of the linked list.
                
            Returns:
                None
        """
        pass

    def add_first(self, value: Any) -> None:
        """ Insert a new node as the new head of the list.
        
            Args:
                value: The value to be inserted in the linked list
                
            Returns:
                None
        """
        pass

    def add_last(self, value: Any) -> None:
        """ Insert a new node at the end of the list.
        
            Args:
                value: The value to be inserted in the linked list
                
            Returns:
                None
        """
        self.add(value)

    def remove(self, index: int = None) -> Any:
        """ Remove a node from the linked list at the specified index, if no index is provided, the last node is removed.
        
            Args:
                index: The index at which the value should be inserted
                
            Returns:
                The value of the node that was removed
        """
        pass

    def remove_first(self) -> Any:
        """ Remove the first node from the linked list.
                
            Returns:
                The value of the node that was removed
        """
        pass

    def remove_last(self) -> Any:
        """ Remove the last node from the linked list.
                
            Returns:
                The value of the node that was removed
        """
        pass

    def get(self, index: int) -> Any:
        """ Get the value of the node at the specified index.
        
            Args:
                index: The index at which to get the value of
                
            Returns:
                The value of the node at the specified index
        """
        pass

    def get_first(self) -> Any:
        """ Get the value of the first node in the linked list.
        
            Returns:
                The value of the first node in the linked list
        """
        pass

    def get_last(self) -> Any:
        """ Get the value of the last node in the linked list.
                
            Returns:
                The value of the last node in the linked list
        """
        pass

    def set(self, value: Any, index: int) -> None:
        """ Set the value of the node at the specified index.
        
            Args:
                value: The value to be set in the linked list
                index: The index at which the value should be set
        """
        pass

    def format_linked_list(self) -> str:
        """ Format the linked list as a string.
                
            Returns:
                The linked list as a string
                
            Example:
                For a linked list with values [1, 2, 3], the string representation would be "1 -> 2 -> 3"
        """
        pass

    def size(self) -> int:
        """ Get the size of the linked list.
        
            Returns:
                The size of the linked list as an integer
        """
        pass
