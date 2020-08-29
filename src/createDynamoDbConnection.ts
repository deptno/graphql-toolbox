import {createDynamoDbEdges} from './createDynamoDbEdges'

export const createDynamoDbConnection = <T>(input: Input<T>) => {
  const {after, first, map = d => d, data, totalCount} = input
  const edges = createDynamoDbEdges(map)(data)
  const endCursor = edges[edges.length - 1]?.cursor

  return {
    edges,
    pageInfo: {
      endCursor,
      hasNextPage: Boolean(endCursor),
      endPage: 0,
      page: 0,
      totalCount: 0,
      itemsOnPage: first,
    },
    totalCount
  } as Connection<T, string>
}

type Input<T> = {
  map?<U>(d: T): [T, string]
  after: number
  first: number
  data: T[]
  totalCount: number
}
type Connection<T, C> = {
  totalCount: number
  pageInfo: {
    endCursor?: C
    endPage: number
    itemsOnPage: number
    totalCount: number
    page: number
    hasNextPage: boolean
  }
  edges: {
    node: T
    cursor: C
  }[]
}
