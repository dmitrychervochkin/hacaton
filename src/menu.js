import {Menu} from './core/menu'
import {Module} from './core/module'

export class ContextMenu extends Menu {
    constructor(selector){
        super(selector)
    }

    open() {
        document.body.addEventListener('contextmenu', event => {
            event.preventDefault();
            this.el.style.top = `${event.clientY}px`;
            this.el.style.left = `${event.clientX}px`;
            this.el.classList.add('open');
        })
    }
    
    close() {
        document.body.addEventListener('click', event => {
            event.preventDefault();
            if (event.target.classList[0] === 'menu-item'){
                // trigger();
                this.el.classList.remove('open');
            }
            this.el.classList.remove('open');
        })
    }
    
    add(type, text) {
        const newModule = new Module(type, text);
        return this.el.insertAdjacentHTML("beforeend", newModule.toHTML());
    }

}

export class ModuleMenu extends Module{
    constructor(type, text) {
        super(type, text)
    }
}

