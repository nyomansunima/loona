import {
  Client,
  Account,
  AppwriteException,
  Avatars,
  Databases,
  Functions,
  Graphql,
  ID,
  Locale,
  Permission,
  Query,
  Role,
  Storage,
  Teams
} from 'node-appwrite'

export interface UseAppwriteReturn {
  client: Client
  account: Account
  avatars: Avatars
  database: Databases
  functions: Functions
  graphql: Graphql
  locale: Locale
  storage: Storage
  teams: Teams
  Permission: typeof Permission
  Query: typeof Query
  Role: typeof Role
  AppwriteException: typeof AppwriteException
  ID: typeof ID
}

/**
 * # useAppwriteServer
 *
 * the appwrite helper to fetch data
 * to appwrite project using the server sdks,
 * @returns UseAppwriteReturn
 */
export default function useAppwrite(): UseAppwriteReturn {
  const config = useRuntimeConfig()

  // create the Appwrite client
  const client = new Client()
  client.setEndpoint('https://cloud.appwrite.io/v1')
  client.setProject(config.public.appwrite.project)
  client.setKey(config.public.appwrite.apiKey)

  return {
    client,
    account: new Account(client),
    avatars: new Avatars(client),
    database: new Databases(client),
    functions: new Functions(client),
    graphql: new Graphql(client),
    locale: new Locale(client),
    storage: new Storage(client),
    teams: new Teams(client),

    Permission,
    Query,
    Role,
    AppwriteException,
    ID
  }
}
