    // User defined class node
    class Node 
    {
        // constructor
        constructor(element)
        {
            this.element = element;
            this.next = null
        }
    }
        
    // linkedlist class
    class linkedList {
        constructor()
        {
            this.head = null;
            this.size = 0;
        }
    // isEmpty() – it returns true if the list is empty.
        // checks the list for empty
        isEmpty()
        {
            return this.size == 0;
        }
    // add(element) – It adds an element at the end of list.
    // adds an element at the end
    // of list

    add(element)
    {
        // creates a new node
        var node = new Node(element);
    
        // to store current node
        var current;
    
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
    
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
    
            // add node
            current.next = node;
        }
        this.size++;
    }
    //insertAt(element, index) – It inserts an element at the given index in a list.
    // insert element at the position index
    // of the list
    insertAt(element, index)
    {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;
    
            curr = this.head;
    
            // add the element to the
            // first index
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
    
                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
    
                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }


    //removeFrom(index) – It removes and returns an element from the list from the specified index
    // removes an element from the
    // specified location
    removeFrom(index)
    {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
    
            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
    
                // remove the element
                prev.next = curr.next;
            }
            this.size--;
    
            // return the remove element
            return curr.element;
        }
    }

    //removeElement(element) – This method removes element from the list. It returns the removed element, or if its not found it returns -1.
    // removes a given element from the
    // list
    removeElement(element)
    {
        var current = this.head;
        var prev = null;
    
        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    //indexOf(element) – it returns the index of a given element, if the element is in the list.
    // finds the index of element
    indexOf(element)
    {
        var count = 0;
        var current = this.head;
    
        // iterae over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }
    
        // not found
        return -1;
    }
    //size_of_list() – It returns the size of list
    // gives the size of the list
    size_of_list()
    {
        console.log(this.size);
    }
    //printList() – It prints the contents of the list.
    // prints the list items
    printList()
    {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
        return str;
    }
     sort(array)  
    { 
        // Initialize sorted linked list 
        var sorted = null; 
        var current = headref; 
        // Traverse the given linked list and insert every 
        // node to sorted 
        while (current != null)  
        { 
            // Store next for next iteration 
            var next = current.next; 
            // insert current in sorted linked list 
            sortedInsert(current); 
            // Update current 
            current = next; 
        } 
        // Update head_ref to point to sorted linked list 
        head = sorted;  array; 
        return 
    } 

    }
    module.exports = linkedList


