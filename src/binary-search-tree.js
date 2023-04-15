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
    this.root = addNode(this.nodeRoot, data);

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
    return searchNode(this.nodeRoot, data);

    function searchNode(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
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

      if (curent === null) return null;
    }

    return curent;
  }

  remove(data) {
    this.nodeRoot = removeNode(this.nodeRoot, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let minRight = node.rigth;

      while(minRight.left) {
        minRight = minRight.data;
      }
      node.data = minRight.data;

      node.right = removeNode(node.right, minRight.data);

      return node;
    }
  }

  min() {
    if (!this.ronodeRootot) return null;

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