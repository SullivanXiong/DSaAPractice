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
        if index is not None and (index < 0 or index > self.size):
            raise IndexError("Index out of bounds")
        
        if index is None:
            self.add_last(value)
        elif index == 0:
            self.add_first(value)
        else:
            current = self.head
            for i in range(index - 1):
                current = current.next_node
            current.next_node = Node(value, current.next_node)
            self.size += 1

    def add_first(self, value: Any) -> None:
        """ Insert a new node as the new head of the list.
        
            Args:
                value: The value to be inserted in the linked list
                
            Returns:
                None
        """
        self.head = Node(value, self.head)
        self.size += 1

    def add_last(self, value: Any) -> None:
        """ Insert a new node at the end of the list.
        
            Args:
                value: The value to be inserted in the linked list
                
            Returns:
                None
        """
        if self.head is None:
            self.head = Node(value)
        else:
            current = self.head
            while current.next_node is not None:
                current = current.next_node
            current.next_node = Node(value)
        
        self.size += 1

    def remove(self, index: int = None) -> Any:
        """ Remove a node from the linked list at the specified index, if no index is provided, the last node is removed.
        
            Args:
                index: The index at which the value should be inserted
                
            Returns:
                The value of the node that was removed
        """
        if index < 0 or index >= self.size:
            raise IndexError("Index out of bounds")
        
        if index is None:
            return self.remove_last()
        elif index == 0:
            return self.remove_first()
        
        current = self.head
        for i in range(index - 1):
            current = current.next_node

        value = current.next_node.value
        current.next_node = current.next_node.next_node
        self.size -= 1
        return value

    def remove_first(self) -> Any:
        """ Remove the first node from the linked list.
                
            Returns:
                The value of the node that was removed
        """
        if self.size == 0:
            raise IndexError("Index out of bounds")
        
        value = self.head.value
        self.head = self.head.next_node
        self.size -= 1
        return value

    def remove_last(self) -> Any:
        """ Remove the last node from the linked list.
                
            Returns:
                The value of the node that was removed
        """
        if self.size == 0:
            raise IndexError("Index out of bounds")

        if self.head.next_node is None:
            value = self.head.value
            self.head = None
        else:
            current = self.head
            while current.next_node.next_node is not None:
                current = current.next_node
            value = current.next_node.value
            current.next_node = None
        
        self.size -= 1
        return value

    def get(self, index: int) -> Any:
        """ Get the value of the node at the specified index.
        
            Args:
                index: The index at which to get the value of
                
            Returns:
                The value of the node at the specified index
        """
        current = self.head
        for i in range(index):
            current = current.next_node
        return current.value

    def get_first(self) -> Any:
        """ Get the value of the first node in the linked list.
        
            Returns:
                The value of the first node in the linked list
        """
        return self.head.value

    def get_last(self) -> Any:
        """ Get the value of the last node in the linked list.
                
            Returns:
                The value of the last node in the linked list
        """
        current = self.head
        while current.next_node is not None:
            current = current.next_node
        return current.value

    def set_node(self, value: Any, index: int) -> None:
        """ Set the value of the node at the specified index.
        
            Args:
                value: The value to be set in the linked list
                index: The index at which the value should be set
        """
        current = self.head
        for i in range(index):
            current = current.next_node
        current.value = value

    def format_linked_list(self) -> str:
        """ Format the linked list as a string.
                
            Returns:
                The linked list as a string
                
            Example:
                For a linked list with values [1, 2, 3], the string representation would be "1 -> 2 -> 3"
        """
        current = self.head
        linked_list = ""
        while current is not None:
            linked_list += str(current.value) + " -> "
            current = current.next_node
        return linked_list[:-4]

    def get_size(self) -> int:
        """ Get the size of the linked list.
        
            Returns:
                The size of the linked list as an integer
        """
        return self.size
