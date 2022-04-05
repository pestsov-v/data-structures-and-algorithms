// Унифицированная структура одного элемента связного списка LinkedList
class Node {
  constructor(value) {
    // Значение передаваемое в элемент присваивается непосредственно элементу Node
    this.value = value;
    // По умолчанию отсутствует ссылка на следующий элемент.
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // Инициализируем и присваиваем началу списка экземпляр класса элемента Node
    const newNode = new Node(value);
    this.head = newNode;
    // При инициализации одинарного связного списка первому элементу будут присвоены маркеры начала и конца связного списка.
    this.tail = this.head;
    // При инициализации связного списка и создании одного элемента присваивается длина списка, которая означает 1
    this.length = 1;
  }

  // Добавляет элемент в конец связного списка
  push(value) {
    // Инициализация экземпляра класса элемента Node
    const newNode = new Node(value);
    // Если нет ниодного элемента в списке добавляется первый элемент у которого:
    if (!this.head) {
      // Началу списка присваивается новый элемент
      this.head = newNode;
      // Концу списка присваивается новый элемент
      this.tail = newNode;
      // иначе экземпляр класса элемента Node присваивается:
    } else {
      // ссылке последнего элемента в связном списке на новый элемент
      this.tail.next = newNode;
      // маркер последнего элемента в списке передвигается на новый элемент
      this.tail = newNode;
    }
    // Увеличивается длина связного списка на 1
    this.length++;
    // Возвращает новый связной список
    return this;
  }

  // Удаляет последний элемент из связного списка
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  // Добавляет элемент в начало связного списка
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length--;

    return this;
  }

  // Удаляет первый элемент из связного списка
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;
    return temp;
  }

  // Получить элемент по указанному индексу
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  // Перезаписывает элемент указанного индекса на новое значение
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  //
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length) return this.shift(value);
    if (index === 0) return this.pop();

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i > this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }
}
