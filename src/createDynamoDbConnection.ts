import {createDynamoDbEdges} from './createDynamoDbEdges'

export const createDynamoDbConnection = <T>(input: Input<T>) => {
  const {first, endCursor, map = d => d, data} = input
  const edges = createDynamoDbEdges(map)(data)

  return {
    edges,
    pageInfo: {
      endCursor,
      hasNextPage: !!endCursor,
      endPage: -1,
      page: -1,
      totalCount: -1,
      itemsOnPage: first,
    },
    totalCount: -1
  }
}

type Input<T> = {
  map?(d: T): any
  after: string
  first: number
  data: T[]
  endCursor: string
}
