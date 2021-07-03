import { Item } from "./items";

let storage : string[];
const storageName = 'divisionItems';

export function getStorage() : string[] {
    
    if (!storage) {
        const storageValue = localStorage.getItem(storageName);
        if (storageValue) {
            storage = JSON.parse(storageValue);
        } else {
            storage = [];
        }
    }
    return storage;
}

export function isOwned(item : Item) : boolean {
    return getStorage().includes(item.name);
}

export function setOwned(item : Item, owned : boolean) {
    if (!owned && isOwned(item)) {
        storage = storage.filter(e => e !== item.name);
    }
    if (owned && !isOwned(item)) {
        storage.push(item.name);
    }
    localStorage.setItem(storageName, JSON.stringify(storage));
}