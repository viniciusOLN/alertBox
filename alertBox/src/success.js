export function success(message, duration){
    const classDefault = document.querySelector('.default-class')
    const text = document.querySelector('.text-notification')
    
    text.innerText = message    
    classDefault.style.display = "block"
    classDefault.setAttribute("class", "default-class success")
    
    setTimeout(() =>{    
        classDefault.style.display = "none"
    }, duration)
}