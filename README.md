# graphql-toolbox

@wip

## install
```shell script
npm install graphql-toolbox
```

## api

### createConnection
currently, only `Int` type `Cursor` is supported.(hardcoded)

#### code
```graphql
schema {
  query: Query
}
type Query {
  aConnection(after: Cursor! first: Int!): AConnection!
}
type AConnection {
  totalCount: Int!
  pageInfo: PageInfo!
  edges: [A!]!
}
type PageInfo {
  endCursor: Cursor
  endPage: Int!
  itemsOnPage: Int!
  totalCount: Int!
  page: Int!
  hasNextPage: Boolean!
}

scalar A
scalar Cursor # Currently only Int type is supported
```

#### code
```ts
async function aConnection(parent, args, context) {
    const {after, first} = args
    const {filter} = parent
    const [data, totalCount] = await Promise.all([
      context.dataSources.db.getData({after, first, ...filter}),
      context.dataSources.db.getDataCount(filter),
    ])

    return createConnection<BookmarkConnection>({
      map: d => new A(d), // d => d
      after,
      first,
      data,
      totalCount,
    })
}
```
### bridge
> todo:

### bridgeArgs
> todo:

### createEdge
> todo:

### createEdges
> todo:

### createPageInfo
> todo:

## license
MIT
