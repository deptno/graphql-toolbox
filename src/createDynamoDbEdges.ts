import {createDynamoDbEdge} from './createDynamoDbEdge'

export const createDynamoDbEdges = (map) => <T>(list: T[]) => list.map(createDynamoDbEdge(map))

