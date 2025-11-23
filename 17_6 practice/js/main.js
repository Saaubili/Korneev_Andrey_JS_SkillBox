import { showLoader, hideLoader } from './loader.js';
import { loadWarehousePage } from './warehouse.js';
import { loadAddItemPage } from './addItem.js';

const mainDiv = document.getElementById('main');

export function navigateTo(page) {
    showLoader();
    setTimeout(() => {
        if (page === 'warehouse') {
            loadWarehousePage(mainDiv);
        } else if (page === 'addItem') {
            loadAddItemPage(mainDiv);
        }
        hideLoader();
    }, 300);
}

navigateTo('warehouse');
