// Унифицированная структура одного элемента cтэка Stack
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
    // Инициализируем и присваиваем началу списка экземпляр класса элемента Node
    const newNode = new Node(value);
    // При инициализации стэка первому элементу будут присвоены маркер начала стэка
    this.top = newNode;
    // При инициализации стэка и создании одного элемента присваивается длина стэка, которая означает 1
    this.length = 1;
  }

  // Добавляет элемент в начало стэка
  push(value) {
    // Инициализация экземпляра класса элемента Node
    const newNode = new Node(value);
    // Проверка, что если стэк пустой, то первый элемент будет самым верхним
    if (this.length === 0) {
      this.top = newNode;
      // Если элементы в стэке уже есть, то новый элемент будет самым верхним,
      // а связывающая ссылка на следующий элемент у нового элемента будет ссылатся на старый, нижний элемент.
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    // Увеличение длины стэка на 1
    this.length++;
    // Возвращает новый стэк
    return this;
  }

  // Удаляет первый элемент из стэка
  pop() {
    // Проверка, что если стєк пустой, то возвращается undefined
    if (this.length === 0) return undefined;
    // Присваивается маркеру temp текущую вершину стэка
    let temp = this.top;
    // Переприсваивается нижнему элементу стека - маркер вершины или первого элемента
    this.top = this.top.next;
    // Присваивание связующей ссылки null, таким образом убирая связующую ссылку с предидущим верхним элементом.
    // Без ссылок на объект, этот объект стирается сборщиком мусора JavaScript
    temp.next = null;
    // Уменьшение длины стэка на 1
    this.length--;
    // Возвращает текущий, верхний, элемент
    return temp;
  }
}
