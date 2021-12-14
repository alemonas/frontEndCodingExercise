/** @jsxImportSource theme-ui */

import React from 'react'
import {Badge, Box, Select, Text} from 'theme-ui'
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
    <Select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined)
      }}
      sx={{width: 100}}
    >
      <option value="">All</option>
      {options.map((option: any, i: any) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </Select>
  )
}

function getTableColumns() {
  return [
    {
      Header: 'FIRSTNAME',
      accessor: 'firstName',
      disableSortBy: true,
      disableFilters: true,
    },
    {
      Header: 'LASTNAME',
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
        return tags.map((item: any) => <Badge variant="tags">{item}</Badge>)
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
