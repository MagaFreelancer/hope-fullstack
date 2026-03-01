import React from 'react'
export const useFilters = () => {
  const [showAll, setShowAll] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return {
    showAll,
    setShowAll,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
  }
}
