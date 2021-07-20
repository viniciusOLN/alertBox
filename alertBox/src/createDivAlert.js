//creating a div to use and insert all type of data

export function createDivAlert(class_css) {
    const divCreator = function (class_css){
      let newElement = document.createElement("div")
      let newNode = document.body.appendChild(newElement)
      let closeElement = document.createElement("span")
      let messageElement = document.createElement("p")
      
      //newNode.appendChild(closeElement)
      newNode.appendChild(messageElement)

      closeElement.setAttribute("class", "close-notification")
      messageElement.setAttribute("class", "text-notification")
      newNode.setAttribute("class", class_css)
    }
    
    divCreator(class_css)
}