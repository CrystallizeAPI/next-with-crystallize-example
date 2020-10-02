import React from 'react'

import Story from './story'

const renderer = (item) => {
  //Instead of type, lets return based on Shape name so we can have different renderes for each shape
  // (i.e differentiate on a Story and a Blog)
  const shapeTypes = {
    Product: <div>Product</div>,
    Folder: <div>Folder</div>,
    Story: <Story {...item} />,
  }
  return shapeTypes[item.shape.name]
}

const MicroFormats = (item) => renderer(item)

export default MicroFormats
