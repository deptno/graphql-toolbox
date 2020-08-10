import {createConnection} from './createConnection'

describe('createConnection', function () {
  test('createConnection', () => {
    const expected = {
      edges: [
        { node: 'a', cursor: 0 },
        { node: 'b', cursor: 1 },
        { node: 'c', cursor: 2 }
      ],
      pageInfo: {
        endCursor: 2,
        hasNextPage: false,
        endPage: 1,
        page: 1,
        totalCount: 3,
        itemsOnPage: 5
      },
      totalCount: 3
    }
    const result = createConnection({
      after: 0,
      first: 5,
      data : ['a', 'b', 'c'],
      totalCount: 3
    })

    expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
  })
})
