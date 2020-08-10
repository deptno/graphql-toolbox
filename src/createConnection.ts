import {createEdges} from './createEdges'
import {createPageInfo} from './createPageInfo'

export const createConnection = <T>(input: Input<T>) => {
  const {after, first, map = d => d, data, totalCount} = input
  const edges = createEdges(map, after)(data)
  const pageInfo = createPageInfo({
    totalCount,
    edges,
    after,
    first
  })

  return {edges, pageInfo, totalCount}
}

type Input<T> = {
  map?<U>(d: T): U
  after: number
  first: number
  data: T[]
  totalCount: number
}
