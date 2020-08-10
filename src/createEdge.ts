export const createEdge = (map, after) => (d, index: number) => {
  const node = map(d)
  const cursor = after + index

  return {node, cursor}
}

