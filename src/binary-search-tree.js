const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if(!data) return null;
    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, data) {
      if(!node) {
        return new Node(data);
      }
      
      if(data < node.data) {
        node.left = addWithin(node.left, data)
      }

      if(data > node.data) {
        node.right = addWithin(node.right, data)
      }

      if(data == node.data) {
        return node;
      }

      return node;
    }
  }

  has(data) {
    let node = this.rootNode;

    while(node) {
      if(data < node.data) {
        node = node.left;
      }else if(data > node.data){
        node = node.right;
      }else if(data == node.data) {
        return true;
      }
    }

    return false;
  }

  find(data) {
    let node = this.rootNode;

    while(node) {
      if(data < node.data) {
        node = node.left;
      }else if(data > node.data){
        node = node.right;
      }else if(data == node.data) {
        return node;
      }
    }

    return null;
  }

  remove(/*data*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(!this.rootNode) return null;

    let node = this.rootNode;
    let min = 0;

    while(node) {
      min = node.data;
      node = node.left
    }

    return min;
  }

  max() {
    if(!this.rootNode) return null;

    let node = this.rootNode;
    let max = 0;

    while(node) {
      max = node.data;
      node = node.right
    }

    return max;
  }
}

module.exports = {
  BinarySearchTree
};