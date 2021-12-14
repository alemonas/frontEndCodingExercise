import React from 'react'
import {Badge, Text} from 'theme-ui'
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
    },
    {
      Header: 'LAST NAME',
      accessor: 'lastName',
    },
    {
      Header: 'GENDER',
      accessor: 'gender',
      Filter: SelectColumnFilter,
      filter: 'equals',
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
    },
    {
      Header: 'EXPERIENCE',
      accessor: 'previousPaidExperience',
      Cell: function PaidExperienceRenderItem({value}: any) {
        const paidExperienceEntries = Object.entries(value)
        return paidExperienceEntries
          .filter((entry) => {
            const [, entryValue] = entry
            return entryValue
          })
          .map((item) => item[0])
      },
    },
    {
      Header: 'SKILL SET',
      accessor: 'skillSet',
      Cell: function SkillSetRenderItem({value}: any) {
        return value.map((item: any) => {
          return item.label
        })
      },
    },
    {
      Header: 'YEARS OF EXPERIENCE',
      accessor: 'yearsOfExperience',
    },
  ]
}

export default ContentCreatorTable
