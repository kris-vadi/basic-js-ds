const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.nodeRoot = null;
  }

  root() {
    return this.nodeRoot;
  }

  add(data) {
    this.nodeRoot = addNode(this.nodeRoot, data);

    function addNode(node, data) {
      if (!node) return new Node(data);

      if (node.data === data) return node;

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    let node = this.nodeRoot;

    while (true) {
      if (node.data > data) {
        if (node.left) {
          node = node.left;
        } else {
          return false;
        }
      } else if (node.data < data) {
        if (node.right) {
          node = node.right;
        } else {
          return false;
        }
      }

      if (node.data === data) {
        return true;
      }
    }
  }

  find(data) {
    let curent = this.nodeRoot;

    while(curent.data !== data) {
      if (data < curent.data) {
        curent = curent.left;
      } else {
        curent = curent.right;
      }

      if (curent === null) {
        return null;
      }
    }

    return curent;
  }

  remove(data) {
    this.nodeRoot = removeNode(this.nodeRoot, data)

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }

      if (data > node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }

      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      let maxLeft = node.left;

      while(maxLeft.right) {
        maxLeft = maxLeft.right;
      }

      node.data = maxLeft.data;
      node.left = removeNode(node.left, maxLeft.data);

      return node;
    }
  }

  min() {
    if (!this.nodeRoot) {
      return null;
    }

    let node = this.nodeRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.nodeRoot) return null;

    let node = this.nodeRoot;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};