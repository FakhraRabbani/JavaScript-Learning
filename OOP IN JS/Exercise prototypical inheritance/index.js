
function HtmlElement() {
    this.click = function () {
        console.log('click');
    }
}


HtmlElement.prototype.focus = function () {
    console.log('focus');
}


function HtmlSelectElement(items = []) {

    this.items = items;

    this.addItems = function (item) {
        this.items.push(item);
    }

    this.removeItems = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
   
}

HtmlSelectElement.prototype = new HtmlElement();

HtmlSelectElement.prototype.constructor = HtmlSelectElement();