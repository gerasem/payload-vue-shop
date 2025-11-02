export type ILink =
  | {
      label?: string | null | undefined
      type?: 'reference' | 'custom' | null | undefined
      newTab?: boolean | null | undefined

      reference?:
        | {
            value?:
              | {
                  id: number | null
                  slug?: string | null | undefined
                }
              | null
              | undefined
          }
        | null
        | undefined

      url?: string | null | undefined
    }
  | null
  | undefined
