import { useSearchUsersQuery } from '../store/github/github.api'

export function HomePage() {
  const { isLoading, isError, data } = useSearchUsersQuery('Bohdan')
  console.log(data)

  return <div>home</div>
}
