////function getStorage() {

////    let storageName = (document.getElementById("local").checked == true) ? "localStorage" : "sessionStorage";

////    if (storageName in window && window[storageName] != null) {
////        return window[storageName];
////    } else {
////        return null;
////    }

////}

////function save() {
////    let storage = getStorage();
////    let key = document.getElementById("storageKey").value;
////    let value = document.getElementById("storageValue").value;
////    storage.setItem(key, value);
////}
