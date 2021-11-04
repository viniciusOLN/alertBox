import { createDivAlert } from './src/createDivAlert.js'
import { injectCss } from './src/injectCss.js'
import { success } from './src/success.js'

export class alertBox{
    
    constructor(){
      injectCss()
      createDivAlert("default-class")
    }
    
    success(message, duration){
      success(message, duration)
    }
}
