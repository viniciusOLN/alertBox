import { createDivAlert } from './src/createDivAlert.js';
import { styleBox } from './src/styleAlertBox.js';
import { injectCss } from './src/injectCss.js';

export function alertBox(){
    let a = new createDivAlert();
    styleBox(5, 4, 3, 2, 1);
    // usar essa função quando o usuário não passar nenhum parâmetro de estilo pro alertBox, assim vai ficar salvo um padrão dentro desse app.css
    injectCss();
}