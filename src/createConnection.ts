import {createEdges} from './createEdges'
import {createPageInfo} from './createPageInfo'

export const createConnection = <T, _Cursor>(input: Input<T>) => {
  const {after, first, map = d => d, data, totalCount} = input
  const edges = createEdges(map, after)(data)
  const pageInfo = createPageInfo({
    totalCount,
    edges,
    after,
    first
  })

  return {
    edges,
    pageInfo,
    totalCount
  } as Connection<T, number>
}

type Input<T> = {
  map?<U>(d: T): T
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
