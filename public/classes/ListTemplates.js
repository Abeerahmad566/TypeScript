export class ListTemplates {
    //to create li we have to pass it to container
    constructor(container) {
        this.container = container;
    }
    // item must has folling item in render parameter
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        // to display text in format we created in payments and invoice
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
