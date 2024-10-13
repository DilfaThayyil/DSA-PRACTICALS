function insertAt (value) {
    const node = new Node(value);

    if (!this.head) {
        this.head = node;
        this.size++;
        return;
    }

    let curr = this.head;
    let prev = null;
    while (curr) {
        if (curr.value === value) {
            if (prev) {
                prev.next = curr.next;
            } else {
                this.head = curr.next;
            }
            node.next = this.head;
            this.head = node;
            return;
        }
        prev = curr;
        curr = curr.next;
    }
    curr = this.head;
    while (curr.next) {
        curr = curr.next;
    }
    curr.next = node;
    this.size++;
}
