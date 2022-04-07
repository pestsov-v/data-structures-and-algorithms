class Graph {
  constructor() {
    // Инициализация пустого смежного листа в котором
    // в дальнейшем будут находится узлы и массив связей с другими узлами
    this.adjacencyList = {};
  }

  // Добавление вершины или непосредственно самого узла
  addVertex(vertex) {
    // Если данной вершины узла нет - инициализировать пустой
    // массив со ключей, который равняется названию этой вершины
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      // Если вершина была успешно добавлена - вернуть true
      return true;
    }
    // Иначе вернуть false
    return false;
  }

  // Добавление узла путём связывания его с уже существующими вершинами графа
  addEdge(vertex1, vertex2) {
    // Добавление может быть произведено, только если существуют обе вершины
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      // Если узел был успешно добавлен - вернуть true
      return true;
    }
    // Иначе вернуть false
    return false;
  }

  // Удаление узла путём удаления связей с другими вершинами графа
  removeEdge(vertex1, vertex2) {
    // Удаление может быть произведено, только если существуют обе вершины
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // С помощью метода filter оставить все связующие ссылки у вершины 1, кроме ссылки на элемент 2
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      // С помощью метода filter оставить все связующие ссылки у вершины 2, кроме ссылки на элемент 1
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
      // Если узел был успешно удалён - вернуть true
      return true;
    }
    // Иначе вернуть false
    return false;
  }

  // Удаление вершины или непосредственно самого узла
  removeVertex(vertex) {
    // Проверка, что если такой вершины нет, то вернуть undefined
    if (!this.adjacencyList[vertex]) return undefined;
    // В цикле пробежатся, чтобы найти необходимый ключ, после чего - удалить его.
    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      // При удалении вершины также удаляются и её связи с другими вершинами.
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}
