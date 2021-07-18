import { createDivAlert } from './src/createDivAlert.js'
import { styleBox } from './src/styleAlertBox.js'
import { injectCss } from './src/injectCss.js'

//aqui tem que ser uma classe e o resto que tem que ser funções que vão ser chamadas aqui dentro.

export class alertBox{
    
    constructor(){
      createDivAlert('default_class')
    }
    
    style(a, b, c, d){
      if(a && b && c && d){
        styleBox()
      }else{
          injectCss()
      }
    }

    
    // usar essa função quando o usuário não passar nenhum parâmetro de estilo pro alertBox, assim vai ficar salvo um padrão dentro desse app.css
    //
}