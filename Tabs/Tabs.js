
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;


    this.itemElements = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    console.log(this.itemElements);

    this.tabItem = new TabItem(this.itemElements)

    this.element.addEventListener('click' ,()=> {
      this.select();
    });
  };

  select = () => {
    const links = document.querySelectorAll('.tabs-link');

    links.forEach(element => {
      element.classList.remove('tabs-link-selected');
    });

    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
    
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select =_=> {
    const items = document.querySelectorAll('.tabs-item');

    items.forEach( element => {
      element.classList.remove('tabs-item-selected');
    })
    this.element.classList.add('tabs-item-selected');
  }
}

let links = document.querySelectorAll('.tabs-link').forEach(element => {
  new TabLink(element);
});
