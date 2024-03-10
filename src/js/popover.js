export default class Popover {
    constructor(container) {
        this.popover = null;
        this.container = container;
        this.button = container.querySelector('.widget-button');
        this.togglePopover = this.togglePopover.bind(this);
        this.button.addEventListener('click', this.togglePopover);
    }

    togglePopover() {
        const popover = this.container.querySelector('.popover-widget');
        if (popover) {
            popover.remove();
        } else {
            this.createPopover();
        }
    }

    createPopover() {
        const popover = document.createElement('div');
        popover.classList.add('popover-widget');

        const title = document.createElement('h3');
        title.classList.add('popover-title');
        title.textContent = 'Popover title';

        const popbody = document.createElement('div');
        popbody.classList.add('popover-body');
        popbody.textContent = `And here's some amazing content. It's very engaging. Right?`;

        popover.appendChild(title);
        popover.appendChild(popbody);
        this.container.appendChild(popover);
    }
}
