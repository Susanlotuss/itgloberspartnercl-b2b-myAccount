declare module '*/saveAddress.gql' {
  import { DocumentNode } from 'graphql'
  import { MutationSaveAddressArgs as Args, Address } from 'vtex.store-graphql'

  interface Result {
    saveAddress: Pick<Address, 'id' | 'cacheId'>
  }

  const value: DocumentNode

  export { Args, Result }
  export default value
}
