declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const value: DocumentNode
  export default value
}

declare module '*.graphql?raw' {
  const content: string
  export default content
}

declare module '*.gql' {
  import { DocumentNode } from 'graphql'
  const value: DocumentNode
  export default value
}

declare module '*.gql?raw' {
  const content: string
  export default content
}
