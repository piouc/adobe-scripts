
type CMYK = {
  c: number,
  m: number,
  y: number,
  k: number
}
export const cmyk = (cmyk: Partial<CMYK>) => {
  const color = new CMYKColor()
  color.cyan = cmyk.c ?? 0
  color.magenta = cmyk.m ?? 0
  color.yellow = cmyk.y ?? 0
  color.black = cmyk.k ?? 0
  return color
}

type RGB = {
  r: number,
  g: number,
  b: number
}
export const rgb = (rgb: Partial<RGB>) => {
  const color = new RGBColor()
  color.red = rgb.r ?? 0
  color.green = rgb.g ?? 0
  color.blue = rgb.b ?? 0
  return color
}