export const createEdge = <T>(map: (d: T) => T, after) => (d, index: number) => {
  const node = map(d)
  const cursor = after + index

  return {node, cursor}
}

