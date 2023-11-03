import './styles.css'
import { ContextMenu } from './menu'
import { ContextModule } from './menu'

const newContextMenu = new ContextMenu('ul');
const NewModule = new ContextModule()

newContextMenu.open();
newContextMenu.close();

newContextMenu.add([
    {type:'menu_module-1', text: 'Считать клики (за 3 секунды)'},
    {type: 'menu_module-2', text:'Создать фигуру'},
    {type: 'menu_module-3', text: 'Поменять цвет'},
    {type: 'menu_module-4', text: 'Вызвать сообщение'}
])
NewModule.trigger();