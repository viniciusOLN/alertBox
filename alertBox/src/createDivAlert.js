//creating a div to use and insert all type of data

export function createDivAlert(css_class) {
    let divCreator = function (class_css){
      let newElement = document.createElement("div")
      let newNode = document.body.appendChild(newElement)
      newNode.setAttribute("class", class_css)
    }
    
    divCreator(css_class)
}