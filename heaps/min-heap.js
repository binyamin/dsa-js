// left child: i * 2
// right child: (i * 2) + 1
// parent: i / 2

class MinHeap {
    constructor() {
        this.array = [null];
    }

    _swap(a, b) {
        let t = this.array[a];
        this.array[a] = this.array[b];
        this.array[b] = t;
    }

    insert(num) {
        // Add `num` to array
        this.array.push(num);
        
        // Reorder array (bubble up)
        // <1> find parent
        // <2> if parent is larger, swap parent & child
        let idx = this.array.length;

        while(idx > 2) {
            let parent = Math.floor(idx / 2);
            let child = idx - 1;

            if (this.array[parent] >= this.array[child]) {
                this._swap(parent, child);
            } else break;
        }
    }
}

const mh = new MinHeap();

mh.insert(15) // [null, 15]
mh.insert(4)  // [null, 4, 15]
mh.insert(23)  // [null, 4, 15]
console.log(mh.array)