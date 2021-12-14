import React from 'react'
import {Badge, Box, Text} from 'theme-ui'
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
        Cell: function PaidExperienceRenderItem({value: tags}: any) {
          return tags.map((item: any) => (
            <Badge padding={1} mr={1}>
              {item}
            </Badge>
          ))
        },
      },
      {
        Header: 'PREVIOUS PAID EXPERIENCE',
        accessor: 'previousPaidExperience',
        Cell: function PaidExperienceRenderItem({value}: any) {
          const paidExperienceEntries = Object.entries(value)
          return paidExperienceEntries
            .filter((entry) => {
              const [, entryValue] = entry
              return entryValue
            })
            .map((item) => <Box>{item}</Box>)
        },
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
