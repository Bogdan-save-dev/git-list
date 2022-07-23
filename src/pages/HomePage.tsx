import { useEffect, useState } from 'react'
import { useResolvedPath } from 'react-router-dom'
import { useDebounce } from '../hooks/debounce'
import { useSearchUsersQuery } from '../store/github/github.api'

export function HomePage() {
  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const debounced = useDebounce(search)
  const { isLoading, isError, data: users } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true, //reload after re-focus page
  })

  useEffect(() => {
    setDropdown(debounced.length > 3 && users?.length! > 0)
  }, [debounced, users])

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p>something went wrong</p>}

      <div className="relative w-[560px]">
        <input
          type="text"
          placeholder="search username"
          className="border py-2 px-4 w-full h[42px] mb-2"
          onChange={(e) => setSearch(e.target.value)}
        />

        {dropdown && (
          <ul className=" list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md overflow-y-scroll">
            {isLoading && <p className="text-center">Loading</p>}

            {users?.map((user) => (
              <li
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                key={user.id}
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
