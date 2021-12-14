import React from 'react'
import {Badge, Box, Text} from 'theme-ui'
import {getSampleItems} from 'utils/api-client'

import Table from './Table'

function ContentCreatorTable() {
  const data = React.useMemo(() => getSampleItems(), [])

  const columns: any = React.useMemo(() => getTableColumns(), [])

  return (
    <>
      <Text>Content Creator Table</Text>
      <Table columns={columns} data={data} />
    </>
  )
}

function SelectColumnFilter({
  column: {filterValue, setFilter, preFilteredRows, id},
}: any): JSX.Element {
  const options: any = React.useMemo(() => {
    const setOptions = new Set()
    preFilteredRows.forEach((row: any) => {
      setOptions.add(row.values[id])
    })

    return Array.from(setOptions)
  }, [id, preFilteredRows])

  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option: any, i: any) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

function getTableColumns() {
  return [
    {
      Header: 'FIRST NAME',
      accessor: 'firstName',
      disableSortBy: true,
      disableFilters: true,
    },
    {
      Header: 'LAST NAME',
      accessor: 'lastName',
      disableSortBy: true,
      disableFilters: true,
    },
    {
      Header: 'GENDER',
      accessor: 'gender',
      Filter: SelectColumnFilter,
      filter: 'equals',
      disableSortBy: true,
    },
    {
      Header: 'TAGS',
      accessor: 'tags',
      Cell: function TagsRenderItem({value: tags}: any) {
        return tags.map((item: any) => (
          <Badge padding={1} mr={1}>
            {item}
          </Badge>
        ))
      },
      disableSortBy: true,
    },
    {
      Header: 'EXPERIENCE',
      accessor: 'previousPaidExperience',
      Cell: function PaidExperienceRenderItem({value}: any) {
        return value.map((item: any) => <Box>{item}</Box>)
      },
      disableSortBy: true,
    },
    {
      Header: 'SKILL SET',
      accessor: 'skillSet',
      Cell: function SkillSetRenderItem({value}: any) {
        return value.map((item: any) => {
          return <Box>{item}</Box>
        })
      },
      disableSortBy: true,
    },
    {
      Header: 'YEARS OF EXPERIENCE',
      accessor: 'yearsOfExperience',
      disableFilters: true,
    },
  ]
}

export default ContentCreatorTable
