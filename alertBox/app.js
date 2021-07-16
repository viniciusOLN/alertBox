import { createDivAlert} from './src/createDivAlert.js';
import { styleBox} from './src/styleAlertBox.js';

export function alertBox(){
    createDivAlert();
    styleBox(5, 4, 3, 2, 1);
}