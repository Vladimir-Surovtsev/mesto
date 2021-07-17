export default class Section {
    constructor({
        items,
        renderer
    }, containerSelector) {
        this.renderedItems = items;
        this.renderer = renderer;
        this.container = document.querySelector(containerSelector);
    }

    addItem(cardElement) {
        this.container.append(cardElement);
    }

    renderItems() {
        this.renderedItems.forEach(item => {
            this.renderer(item);
        });
    }
}