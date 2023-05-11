/// <reference types="types-for-adobe/Illustrator/2015.3"/>
type RGB = {
  r: number,
  g: number,
  b: number
}
const rgb = (rgb: Partial<RGB>) => {
  const color = new RGBColor()
  color.red = rgb.r ?? 0
  color.green = rgb.g ?? 0
  color.blue = rgb.b ?? 0
  return color
}

(() => {
  const doc = app.activeDocument
  const artboards = Array.from(doc.artboards)
  artboards.forEach(artbord => {
    const text = doc.textFrames.add()
    const rect = artbord.artboardRect
    text.contents = `${artbord.name} ${Math.round(rect[2] - rect[0])}x${Math.round(rect[1] - rect[3])}`
    text.textRange.characterAttributes.size = 40
    text.textRange.characterAttributes.fillColor = rgb({r: 255, g: 255, b: 255})
    text.left = rect[0]
    text.top = rect[1] + text.controlBounds[1] + 20
  })
})()
