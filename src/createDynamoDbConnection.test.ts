import {createDynamoDbConnection} from './createDynamoDbConnection'


class A {
  static of(item) {
    return new A(item)
  }
  constructor(item) {

  }
}

createDynamoDbConnection({
  map: A.of,
  endCursor: '',
  after: '',
  first: 5,
  data: [],
})
