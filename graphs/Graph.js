const { TextEncoder } = require('util');
const Node = require("./Node");

const encoding = new TextEncoder();

class Graph {

    constructor(edgeDirection = Graph.DIRECTED) {
        this.vertices = new Map();
        this.edgeDirection = edgeDirection;
    }

    addEdge(from, to) {
        from.addAdjacent(to);

        if (this.edgeDirection === Graph.UNDIRECTED) {
            to.addAdjacent(from);
        }
    }

    /**
     * @see https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function#FNV-1a_hash
     * @param {*} key 
     */
    hash(key) {
        const bytes = encoding.encode(key);
        const { length } = bytes;

        let hash = 2166136261; // FNV_offset_basis (32 bit)

        for (let i = 0; i < length; i++) {
            hash ^= bytes[i]; // XOR
            hash *= 16777619; // 32 bit FNV_prime
        }

        return (hash >>> 0) % (this.vertices.size);
    }

    addVertex(value) {
        const vertex = new Node(value);
        this.vertices.set(this.hash(value), vertex)
    }
}

Graph.UNDIRECTED = Symbol('directed graph'); // two-ways edges
Graph.DIRECTED = Symbol('undirected graph'); // one-way edges

module.exports = Graph;