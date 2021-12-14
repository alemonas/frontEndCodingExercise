import React from 'react'
import {Text} from 'theme-ui'

// import {getItems} from 'utils/api-client'
import Table from './Table'

function ContentCreatorTable() {
  // const allItems = React.useMemo(() => getItems())
  const data = React.useMemo(
    () => [
      {
        _id: '619d411b5429558b838c0eeb',
        firstName: 'Norris',
        lastName: 'Mcmahon',
        imageUrl: 'https://loremflickr.com/1080/1080',
        gender: 'male',
        email: 'norrismcmahon@wrapture.com',
        phone: '+1 (993) 458-2000',
        about:
          'Anim magna irure nulla irure eiusmod incididunt laborum aliqua non ea veniam proident ut ad.',
        tags: [
          'fugiat',
          'eu',
          'exercitation',
          'fugiat',
          'pariatur',
          'eu',
          'elit',
        ],
        previousPaidExperience: {
          video: false,
          photography: true,
          socialPost: false,
        },
        skillSet: [
          {
            label: 'Social Posts',
            yearsOfExperience: 8,
          },
          {
            label: 'Video Creation',
            yearsOfExperience: 5,
          },
        ],
      },
      {
        _id: '619d411b5d8b9b79e1d82725',
        firstName: 'Romero',
        lastName: 'Hoover',
        imageUrl: 'https://loremflickr.com/1080/1080',
        gender: 'male',
        email: 'romerohoover@wrapture.com',
        phone: '+1 (980) 592-3858',
        about:
          'Labore dolore duis nostrud occaecat dolore ipsum aliquip esse officia.',
        tags: [
          'cupidatat',
          'proident',
          'nisi',
          'mollit',
          'commodo',
          'occaecat',
          'ullamco',
        ],
        previousPaidExperience: {
          video: true,
          photography: false,
          socialPost: true,
        },
        skillSet: [
          {
            label: 'Video Creation',
            yearsOfExperience: 0,
          },
          {
            label: 'Unboxing Products',
            yearsOfExperience: 3,
          },
        ],
      },
    ],
    [],
  )

  const columns: any = React.useMemo(
    () => [
      {
        Header: 'First name',
        accessor: 'firstName',
      },
      {
        Header: 'Last name',
        accessor: 'lastName',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'Tags',
        accessor: 'tags',
      },
      {
        Header: 'Previous Paid Experience',
        accessor: 'previousPaidExperience',
        Cell: function PreviousPaidExperienceRenderItem({value}: any) {
          const entries = Object.entries(value)
          return entries.map((item) => <span>{item[0]}</span>)
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
