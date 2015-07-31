(function(){
	'use strict';

	/**
	 * Nodes to be used as elements of a max-heap.
	 * @param {Number} value
	 */
	var Node = function(value) {
		this.val = value;

		this.getParent = function(arr) {
			if (this.isRoot(arr)) {
				return undefined;
			} else {
				debugger;
				return arr[Math.floor((arr.indexOf(this)) / 2)];
			}
		};

		this.left = function(arr) {
			return arr[2*arr.indexOf(this)];
		};

		this.right = function(arr) {
			return arr[(2*arr.indexOf(this)) + 1];
		};

		this.isRoot = function(arr) {
			return (arr.indexOf(this) === 1 ? true : false);
		};

		this.hasLeftChild = function(arr) {
			return (this.left(arr) !== undefined ? true : false);
		};

		this.hasRightChild = function(arr) {
			return (this.right(arr) !== undefined ? true : false);
		};
	};

	/**
	 * Max-heap implementation
	 */
	var Heap = function() {
		// Will hold all nodes.
		this.arr = [undefined];

		this.insert = function(node) {
			var parent;

			// Tack node onto end of array.
			this.arr.push(node);

			// Creating some syntactic sugar.
			parent = node.getParent(this.arr);

			// If not the root, sift 'node' up the tree to its proper position. With each swap, re-get the proper parent to 'node'.
			while (!node.isRoot(this.arr) && node.val > parent.val) {
				this.swap(node, parent);
				parent = node.getParent(this.arr);
			}
		};

		this.swap = function(child, parent) {
			var childIndex = this.arr.indexOf(child);
			var parentIndex = this.arr.indexOf(parent);

			var temp = this.arr[childIndex];

			// console.log("(" + child.index + ":" + child.val + ") > (" + parent.index + ":" + parent.val + ")");
			// this.print("PRE");

			this.arr[childIndex] = this.arr[parentIndex];
			this.arr[parentIndex] = temp;

			// this.print("POST");		
		}

		this.extractMax = function() {
			var lastNode = this.arr[this.arr.length - 1];
			var max = this.arr[1].val;

			// Overwrite 'root' with last (rightmost) node, remove last node
			this.arr[1] = lastNode;
			this.arr.pop();

			// Sift 'root' down to proper position
			this.reheap(this.arr[1]);

			// Return the original root value
			return max;
		};

		this.reheap = function(node) {
			var left = node.left(this.arr);
			var right = node.right(this.arr);

			// While our node has a left or right child with a greater value, swap with that child
			while ((node.hasLeftChild(this.arr) && node.val < left.val) || (node.hasRightChild(this.arr) && node.val < right.val)) {
				if (node.right(this.arr).val > node.left(this.arr).val) {
					this.swap(node.right(this.arr), node);
				} else {
					this.swap(node.left(this.arr), node);
				}

				// Re-get left and right children after swap
				left = node.left(this.arr);
				right = node.right(this.arr);
			}
		};

		this.print = function(tag) {
			console.log(tag);

			var printString = "[ ";

			this.arr.forEach(function(c) {
				printString = printString + c.index + ":" + c.val + " ";
			});

			printString += "]";

			console.log(printString);
		};
	};

})();