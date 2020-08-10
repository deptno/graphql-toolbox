export const createEdge = (map, createCursor) => (d, index: number) => {
  const node = map(d)
  const cursor = createCursor(index)

  return {node, cursor}
}

