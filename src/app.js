import './styles.css'
import { ContextMenu } from './menu'

const newContextMenu = new ContextMenu('ul');
newContextMenu.open();
newContextMenu.close();
newContextMenu.add('menu_module-1', 'Считать клики (за 3 секунды)');
newContextMenu.add('menu_module-2', 'Создать фигуру');
newContextMenu.add('menu_module-3', 'Поменять цвет');
newContextMenu.add('menu_module-4', 'Вызвать сообщение');