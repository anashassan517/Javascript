// If you are given the head node in a linked list, write a method that swaps each pair of nodes in the list, then returns the head node of the list.
// Example: if you are given a list ordered A,B,C,D the resulting list should be B,A,D,C.

// The list will be composed of Nodes of the following specification:

Javascript:


function swapPairs(head) {
    // your code here
if(head==null ||head.next==null){
    return head;

}
else{
    let dummy=new Node(0);
    dummy.next=head;
    let prev=dummy;
    while (head!=null && head.next!=null) {
        let first=head;
        let second=head.next;


        prev.next=second;
        first.next=second.next;
        second.next=first;


        prev=first;
        head=first.next;
    }
    return dummy.next;
}
}

