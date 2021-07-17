export function injectCss(){
  var file = location.pathname.split( "/" ).pop()

  var link = document.createElement( "link" )
  link.href = "../alertBox/assets/css/app.css"
  link.type = "text/css"
  link.rel = "stylesheet"
  link.media = "screen,print"
    
   document.getElementsByTagName( "head" )[0].appendChild( link )
}
