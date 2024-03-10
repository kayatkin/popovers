import Popover from './popover.js';

export default class Widget {
    constructor() {
        this.button = null;
        this.container = document.querySelector('.container');
        this.widget = this.createWidgetElement();
        this.button = this.createButtonElement();
        this.widget.appendChild(this.button);
        this.container.appendChild(this.widget);
        this.popover = new Popover(this.widget);
    }

    createWidgetElement() {
        const widget = document.createElement('div');
        widget.classList.add('widget');
        return widget;
    }

    createButtonElement() {
        const button = document.createElement('button');
        button.classList.add('widget-button');
        button.textContent = 'Click to toggle popover';
        return button;
    }
}
