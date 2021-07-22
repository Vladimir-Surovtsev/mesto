export default class Section {
    constructor({
        items,
        renderer
    }, containerSelector) {
        this._renderedItems = items;
        this.renderer = renderer;
        this.container = document.querySelector(containerSelector);
    }

    addItem(cardElement) {
        this.container.prepend(cardElement);
    }

    renderItems() {
        this._renderedItems.forEach(item => {
            this.renderer(item);
        });
    }
}