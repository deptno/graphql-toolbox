export const createDynamoDbEdge = <T, U>(map: (d: T) => U) => (d) => {
  const node = map(d)

  return {node}
}

