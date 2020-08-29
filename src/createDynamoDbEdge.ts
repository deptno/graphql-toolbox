export const createDynamoDbEdge = <T>(map: (d: T) => [T, string]) => (d) => {
  const [node, cursor] = map(d)

  return {node, cursor}
}

