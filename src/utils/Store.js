const storage = window.localStorage;

class Store {

    constructor(){

    }

    setStorage(storageKey, value){
        storage.setItem({
            storageKey: value
        });
    }

    getStoredInformation(storageKey){
        return storage.getItem(storageKey);
    }
}

module.exports = Store;