import { IRepo, ServerResponse, User } from './../../models/models'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<User[], string>({
      query: (search: string) => ({
        url: `search/users`,
        params: {
          q: search,
          per_page: 20,
        },
      }),
      transformResponse: (res: ServerResponse<User>) => res.items,
    }),
    getUserRepos: build.query<IRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
})

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi
