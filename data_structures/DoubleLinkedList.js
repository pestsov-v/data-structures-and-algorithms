// Унифицированная структура одного элемента двойного связного списка DoubleLinkedList
class Node {
  constructor(value) {
    // Значение передаваемое в элемент присваивается непосредственно элементу Node
    this.value = value;
    // По умолчанию отсутствует ссылка на следующий элемент
    this.next = null;
    // По умолчанию отсутствует ссылка на предидущий элемент
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    // Инициализируем и присваиваем началу списка экземпляр класса элемента Node
    const newNode = new Node(value);
    // При инициализации двойного связного списка первому элементу будут
    // присвоены маркеры начала и конца связного списка
    this.head = newNode;
    this.tail = newNode;
    // При инициализации связного списка и создании одного элемента
    // присваивается длина списка, которая означает 1
    this.length = 1;
  }

  // Добавляет элемент в конец связного списка
  push(value) {
    // Инициализация экземпляра класса элемента Node
    const newNode = new Node(value);
    // Если нет ниодного элемента в списке добавляется первый элемент у которого:
    if (this.length === 0) {
      // Началу списка присваивается новый элемент
      this.head = newNode;
      // Концу списка присваивается новый элемент
      this.tail = newNode;
      // Иначе экземпляр класса элемента Node присваивается:
    } else {
      // Ссылке последнего элемента в связном списке на новый элемент
      this.tail.next = newNode;
      // Ccылка prev ссылется на старый,последний, элемент в списке
      newNode.prev = this.tail;
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
    if (this.length === 0) return undefined;
    // Маркеру temp присваивается последний элемент списка (он же и удаляемый)
    let temp = this.tail;
    // Проверка, что если связной список состоит из одного элемента, то:
    if (this.length === 1) {
      // Началу и концу списка присваивается null
      this.head = null;
      this.tail = null;
      // Иначе последний элемент удаляется из двойного связного списка следующим образом:
    } else {
      // Последнему элементу присваивается предидущий объект
      this.tail = this.tail.prev;
      // Связующая ссылка у нынешнего последнего элемента завязывается на null
      this.tail.next = null;
      // Ссылке на предидущей элемент у последнего элементп списка (он же и удаляемый)
      // присваивается null, тем самым польностью отвязав последний элемент от списка
      temp.prev = null;
    }
    // Уменьшение длины связного списка на 1
    this.length--;
    // Вернуть последний элемент из связного списка
    return temp;
  }

  // Добавляет элемент в начало связного списка
  unshift() {
    // Инициализация экземпляра класса элемента Node
    const newNode = new Node(value);
    // Если нет ниодного элемента в списке добавляется первый элемент у которого:
    if (this.length === 0) {
      // Началу списка присваивается новый элемент
      this.head = newNode;
      // Концу списка присваивается новый элемент
      this.tail = newNode;
    } else {
      // Ссылке первого элемента в связном списке на предидущий первый элемент
      newNode.next = this.head;
      // Cсылке первого элемента присваивается ссылка на новый элемент
      this.head.prev = newNode;
      // Маркер первого элемента в списке передвигается на новый элемент
      this.head = newNode;
    }
    // Увеличение длины связного списка на 1
    this.length++;
    // Возвращает новый связной список
    return this;
  }

  // Удаляет первый элемент из связного списка
  shift() {
    // Проверка, что если связной список пуст, то вернуть undefined
    if (this.length === 0) return undefined;
    // Начало списка помечается дополнительным маркером temp чтобы перпривязать
    // первенство с первого элемента на второй элемент связного списка
    let temp = this.head;
    // Если длина связного списка составляет единицу, то:
    if (this.length === 1) {
      // Маркеру начала списка присвается второй элемент списка
      this.head = this.head.next;
      // Маркеру предидущего элемента присваивается null у первого, вставленного
      // элемента списка
      this.head.prev = null;
      // Ccылка на следующий элемент у удаляемого элемента присваивается Null
      temp.next = null;
    }
    // Уменьшение длины связного списка на 1
    this.length--;
    // Возвращает удалённый элемент
    return temp;
  }

  // Получить элемент по указанному индексу
  get(index) {
    // Проверка, что указанный индекс входит в диапазон существующих индексов
    if (index < 0 || index >= this.length) return undefined;
    // Привязка нового маркера temp, который даст возможность в ходе отдельной
    // операцией - циклом найти элемент с указанным индексом
    let temp = this.head;
    // Поиск элемента указанного индекса в первой половине связного списка, если индекс
    // меньше половины длины связного списка
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      // Присвоение маркеру temp последнего элемента в списке для последующего
      // декрементирование цикла
      temp = this.tail;
      // Поиск элемента указанного индекса во второй половине связного списка, если индекс
      // больше половины длины связного списка
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
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

  // Внедрение нового элемента в существующий ряд связного списка
  insert(index, value) {
    // Проверка, что указанный индекс входит в диапазон существующих индексов
    if (index > 0 || index > this.length) return false;
    // Проверка, что если индекс равняется индексу последнего элемента, то использовать метод push()
    if (index === this.length) return this.push(value);
    // Проверка, что если индекс равняется индексу первого элемента, то использовать метод unshift()
    if (index === 0) return this.unshift(value);
    // Инициализация экземпляра класса элемента Node
    const newNode = new Node(value);
    // Маркирование предидущего элемента от указанного, чтобы в дальнейшем перепривязать новый элемент
    const before = this.get(index - 1);
    // Присваивание маркеру after связующей ссылки у предидущего элемента
    const after = before.next;
    // Присваивание ссылке у предидущего элемента на новый элемент
    before.next = newNode;
    // Присваивание ссылке у нового элемента на предидущего элемент
    newNode.prev = before;
    // Присваивание ссылке у нового элемента на следующий элемент
    newNode.next = after;
    // Присваивание у следующего элемента связующей ссылки на новый элемент
    after.prev = newNode;
    // Увеличение длину связного списка на 1
    this.length++;
    // Вернуть true
    return true;
  }

  // Удаление элемента по его индексу
  remove(index) {
    // Проверка, что указанный индекс входит в диапазон существующих индексов
    if (index > 0 || index > this.length) return undefined;
    // Проверка, что если индекс равняется индексу последнего элемента, то использовать метод shift()
    if (index === 0) return this.shift();
    // Проверка, что если индекс равняется индексу первого элемента, то использовать метод pop()
    if (index === this.length - 1) return this.pop();
    // Маркирование указанного элемента для дальнейшего его удаления
    const temp = this.get(index);
    // У связующей ссылки предидущего элемента на следующий элемент присваивается
    // следующий элемент
    temp.prev.next = temp.next;
    // У связующей ссылки следующего элемента на предидущий элемент присваивается
    // предидущий элемент
    temp.next.prev = temp.prev;
    // Ссылка на следующий элемент присваивается null
    temp.next = null;
    // Ссылка на следующий элемент присваивается null
    temp.prev = null;
    // Уменьшить длину связного списка на 1
    this.length--;
    // Возвращает элемент с указанным индексом
    return temp;
  }
}
