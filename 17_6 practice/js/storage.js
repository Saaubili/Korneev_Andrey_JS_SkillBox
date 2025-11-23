const StorageKey = 'warehouseItems';

export function getItems() {
    const data = localStorage.getItem(StorageKey);
    return data ? JSON.parse(data) : [];
}

export function saveItems(items) {
    localStorage.setItem(StorageKey, JSON.stringify(items));
}

export function addItem(item) {
    const items = getItems();
    items.push(item);
    saveItems(items);
}

export function deleteItem(index) {
    const items = getItems();
    items.splice(index, 1);
    saveItems(items);
}
