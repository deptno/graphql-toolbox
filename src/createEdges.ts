import {createEdge} from './createEdge'

export const createEdges =
(map, after) =>
  <T>(list: T[]) => list.map(createEdge(map, after))

