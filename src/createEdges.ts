import {createEdge} from './createEdge'

export const createEdges =
(map, createCursor) =>
  (list: unknown[]) => list.map(createEdge(map, createCursor))

