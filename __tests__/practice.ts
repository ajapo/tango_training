export class ShoppingList {
  public list: string[];

  constructor() {
    this.list = [];
  }

  addItem(item: string): void {
    this.list.push(item);
  }

  removeItem(item: string): void {
    const index = this.list.indexOf(item);
    if (index === -1) {
      throw new Error(`アイテム: ${item} は存在しません`);
    }
    this.list.splice(index, 1);
  }
}
