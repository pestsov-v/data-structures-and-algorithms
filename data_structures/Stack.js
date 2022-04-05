// Унифицированная структура одного элемента связного списка LinkedList
class Node {
  constructor(value) {
    // Значение передаваемое в элемент присваивается непосредственно элементу Node
    this.value = value;
    // По умолчанию отсутствует ссылка на следующий элемент
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.length--;
    return temp;
  }
}
