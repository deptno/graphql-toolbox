import {createEdges} from './createEdges'
import {createPageInfo} from './createPageInfo'

export const createConnection = ({after, first, map, data, totalCount}: Input) => {
  const edges = createEdges(map, (index) => after + index)(data)
  const pageInfo = createPageInfo({
    totalCount,
    edges,
    after,
    first
  })

  return {edges, pageInfo, totalCount}
}

type Input = {
  map<T, U>(d: T): U
  after: number
  first: number
  data: unknown[]
  totalCount: number
}
