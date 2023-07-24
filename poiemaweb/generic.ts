class Queue<T> {
  protected data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

const numberQueue = new Queue<number>();
numberQueue.push(0);
// numberQueue.push('1'); // error~

function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

