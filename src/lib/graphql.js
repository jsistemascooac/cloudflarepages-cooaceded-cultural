import { GraphQLClient } from 'graphql-request'

const endpointExternal =  'http://181.204.14.21:4090/'
const endpointInternal =  'http://10.50.1.15:4090/'



export const clientInternal = new GraphQLClient(endpointInternal)
export const clientExternal = new GraphQLClient(endpointExternal)

console.log("GQ:",clientInternal)
const endpoint =  'http://181.204.14.21:4090/'

 export const client = new GraphQLClient(endpoint)
 export const clientB = new GraphQLClient(endpointInternal)
 console.log("GQB:",clientB)