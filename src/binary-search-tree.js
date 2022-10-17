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

  remove(data) {
    if(this.rootNode == null) return null;
    let parentNode = this.rootNode;
    let current = this.rootNode;

    while(current) {
      if(data < current.data) {
        parentNode = current;
        current = current.left
      }else if(data > current.data) {
        parentNode = current;
        current = current.right;
      }else if(data == current.data) {
        if(current == this.rootNode) {
          if(!current.left && !current.right) {
            this.rootNode = null;
          }else if(!current.left && current.right) {
            this.rootNode = current.right;
          }else if(!current.right && current.left) {
            this.rootNode = current.left;
          }else if(current.left && current.right) {
            let minFromRight = current.right;

            while(minFromRight.left) {
              minFromRight = minFromRight.left;
            }

            minFromRight.left = this.rootNode.left;
            minFromRight.right.right = this.rootNode.right

            this.rootNode = minFromRight;

            let checkNode = this.rootNode.right;
            while(checkNode.left && checkNode.left !== this.rootNode) {
              checkNode = checkNode.left;
            }

            checkNode.left = null;
          }
        }else{
          if(!current.left && !current.right) {
            if(parentNode.left == current) {
              parentNode.left = null;
            }
            if(parentNode.right == current) {
              parentNode.right = null;
            }
          }else if(!current.left && current.right) {
            if(parentNode.left == current) {parentNode.left = current.right;}
            if(parentNode.right == current) {parentNode.right = current.right;}
          }else if(!current.right && current.left) {
            if(parentNode.left == current) {parentNode.left = current.left;}
            if(parentNode.right == current) {parentNode.right = current.left;}
          }else if(current.left && current.right){
            let minFromRight = current.right;
  
            while(minFromRight.left) {
              minFromRight = minFromRight.left;
            }
  
            minFromRight.left = current.left;
  
            if(parentNode.left == current) {parentNode.left = minFromRight;}
            if(parentNode.right == current) {parentNode.right = minFromRight;}
          }
        }
        current = null;
      }
    }
    // throw new NotImplementedError('Not implemented');
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