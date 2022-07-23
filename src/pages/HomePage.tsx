import { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/debounce'
import { useSearchUsersQuery } from '../store/github/github.api'

export function HomePage() {
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  })

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

        <div className="absolute top-[42px] left-0 right-0 max-h[200px] shadow-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          aspernatur.
        </div>
      </div>
    </div>
  )
}
