import React from 'react'
import {Badge, Text} from 'theme-ui'
import {getSampleItems} from 'utils/api-client'

import Table from './Table'

function ContentCreatorTable() {
  const data = React.useMemo(() => getSampleItems(), [])

  const columns: any = React.useMemo(
    () => [
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
    ],
    [],
  )

  return (
    <>
      <Text>Content Creator Table</Text>
      <Table columns={columns} data={data} />
    </>
  )
}

export default ContentCreatorTable
