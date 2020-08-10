import {createEdge} from './createEdge'

export const createEdges =
(map, after) =>
  (list: unknown[]) => list.map(createEdge(map, after))

