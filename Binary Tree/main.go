// Binary Tree in Golang
package main

import (
	"fmt"
	"io"
	"os"
)

type BinarySeed struct {
	left  *BinarySeed
	right *BinarySeed
	key   int
}

type BinaryTree struct {
	root *BinarySeed
}

func (t *BinaryTree) insert(key int) *BinaryTree {
	if t.root == nil {
		t.root = &BinarySeed{key: key, left: nil, right: nil}
	} else {
		t.root.insert(key)
	}
	return t
}

func (n *BinarySeed) insert(key int) {
	if n == nil {
		return
	} else if key <= n.key {
		if n.left == nil {
			n.left = &BinarySeed{key: key, left: nil, right: nil}
		} else {
			n.left.insert(key)
		}
	} else {
		if n.right == nil {
			n.right = &BinarySeed{key: key, left: nil, right: nil}
		} else {
			n.right.insert(key)
		}
	}
}

func print(w io.Writer, seed *BinarySeed, ns int, ch rune) {
	if seed == nil {
		return
	}

	for i := 0; i < ns; i++ {
		fmt.Fprint(w, " ")
	}
	fmt.Fprintf(w, "%c:%v\n", ch, seed.key)
	print(w, seed.left, ns+2, 'l')
	print(w, seed.right, ns+2, 'r')
}

func main() {
	tree := &BinaryTree{}
	tree.insert(20).
		insert(-2).
		insert(-5).
		insert(-15).
		insert(-6).
		insert(5).
		insert(6).
		insert(55).
		insert(85).
		insert(15).
		insert(5).
		insert(-1)
	print(os.Stdout, tree.root, 0, 'M')
}
