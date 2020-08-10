export const createPageInfo =
  <T>(args: Input<T>) => {
    const {totalCount, after, first, edges} = args
    const endCursor = Math.max(totalCount - 1, 0)
    const hasNextPage = edges[edges.length - 1]?.cursor < endCursor
    const endPage = Math.ceil(totalCount / first)
    const page = Math.ceil(after / first) + 1

    return {
      endCursor,
      hasNextPage,
      endPage,
      page,
      totalCount,
      itemsOnPage: first,
    }
  }

type Input<T> = {
  totalCount: number
  after: number
  first: number
  edges: {node: T, cursor: unknown}[]
}
