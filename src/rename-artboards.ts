/// <reference types="types-for-adobe/Illustrator/2015.3"/>

(() => {

  const win = new Window('dialog', 'rename', undefined)

  const artboards = Array.from(app.activeDocument.artboards)
  const names = artboards.map((artbord) => artbord.name)
  
  const textarea = win.add("edittext", [30, 30, 400, 1000], names.join('\n'), {multiline: true})
  const button = win.add("button", [50, 30, 150, 60], "Rename")
  
  button.onClick = () => {
    const names = textarea.text.split('\n')
    if(names.length < artboards.length){
      alert('less')
    } else {
      artboards.map((artbord, i) => {
        artbord.name = names[i]
      })
      win.close()
    }
  }
  
  win.center()
  win.show()
})()