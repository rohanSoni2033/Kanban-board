import storage from './storage.js';
import View from './view.js';
const main = document.querySelector('.main');

// GETTING ALL ITEM FROM THE LOCAL STORAGE
const kanbanItems = storage._getKanbanItems();

const handlers = {
  addNewItem: (itemText, category) => {
    storage._saveKanbanItem(itemText, category);
    refresh();
  },
  updateCardText: (id, text) => {
    console.log(id, text);
    storage._updateKanbanItem(id, text);
    refresh();
  },
  deleteItem: (id) => {
    storage._removeKanbanItem(id);
    refresh();
  },
};

const view = new View(main, handlers);
view._renderKanbanBoard(kanbanItems);

const refresh = () => {
  view._renderKanbanBoard(storage._getKanbanItems());
};
