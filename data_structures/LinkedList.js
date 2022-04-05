// Унифицированная структура одного элемента связного списка LinkedList
class Node {
  constructor(value) {
    // Значение передаваемое в элемент присваивается непосредственно элементу Node
    this.value = value;
    // По умолчанию отсутствует ссылка на следующий элемент
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // Инициализируем и присваиваем началу списка экземпляр класса элемента Node
    const newNode = new Node(value);
    this.head = newNode;
    // При инициализации одинарного связного списка первому элементу будут присвоены маркеры начала и конца связного списка
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
      // Иначе экземпляр класса элемента Node присваивается:
    } else {
      // Ссылке последнего элемента в связном списке на новый элемент
      this.tail.next = newNode;
      // Маркер последнего элемента в списке передвигается на новый элемент
      this.tail = newNode;
    }
    // Увеличивается длина связного списка на 1
    this.length++;
    // Возвращает новый связной список
    return this;
  }

  // Удаляет последний элемент из связного списка
  pop() {
    // Проверка, что если связной список пуст, то вернуть undefined
    if (!this.head) return undefined;
    // Начало списка помечается двумя маркерами temp и pre
    let temp = this.head;
    let pre = this.head;
    // Чтобы в результате с помощью цикла промаркировать последний и предпоследний элементы списка
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    // Предпоследний элемент помечается как последний
    this.tail = pre;
    // Ссылке предпоследнего элемента (уже последнего) присваивается null
    this.tail.next = null;
    // Уменьшение длины связного списка на 1
    this.length--;
    // Проверка, что если длина связного списка равно нулю, то опустошить весь связной список
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // Вернуть последний элемент из связного списка
    return temp;
  }

  // Добавляет элемент в начало связного списка
  unshift(value) {
    // Инициализация экземпляра класса элемента Node
    const newNode = new Node(value);
    // Если нет ниодного элемента в списке добавляется первый элемент у которого:
    if (!this.head) {
      // Началу списка присваивается новый элемент
      this.head = newNode;
      // Концу списка присваивается новый элемент
      this.tail = newNode;
    } else {
      // Ссылке первого элемента в связном списке на предидущий первый элемент
      newNode.next = this.head;
      // Маркер первого элемента в списке передвигается на новый элемент
      this.head = newNode;
    }
    // Увеличивается длина связного списка на 1
    this.length++;
    // Возвращает новый связной список
    return this;
  }

  // Удаляет первый элемент из связного списка
  shift() {
    // Проверка, что если связной список пуст, то вернуть undefined
    if (!this.head) return undefined;
    // Начало списка помечается дополнительным маркером temp чтобы перпривязать
    // первенство с первого элемента на второй элемент связного списка
    let temp = this.head;
    this.head = this.head.next;
    // Уменьшить длину связного списка на 1
    this.length--;
    // Проверка, что если длина связного списка равно нулю, то опустошить весь связной список
    if (this.length === 0) {
      this.tail = null;
    }
    // Отвязать ссылку маркера temp, чтобы не смешивались никакие ссылки
    temp.next = null;
    // Вернуть первый элемент из связного списка
    return temp;
  }

  // Получить элемент по указанному индексу
  get(index) {
    // Проверка, что указанный индекс входит в диапазон существующих индексов
    if (index < 0 || index >= this.length) return undefined;
    // Привязка нового маркера temp, который даст возможность в ходе отдельной
    // операцией - циклом найти элемент с указанным индексом
    let temp = this.head;
    // Поиск элемента указанного индекса
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    // Возвращает элемент с указанным индексом
    return temp;
  }

  // Перезаписывает элемент указанного индекса на новое значение
  set(index, value) {
    // Получение элемента с указанным индексом с помощью метода Get
    let temp = this.get(index);
    // Заменяет элемент у найденого элемента на введённое значение value и возвращает true
    if (temp) {
      temp.value = value;
      return true;
    }
    // Если такого элемента по указанному индексу нет, то возвращает false
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
