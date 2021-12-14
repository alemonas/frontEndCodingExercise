import React from 'react'
import {useFilters, useGlobalFilter, useTable} from 'react-table'
import {Container} from 'theme-ui'

function DefaultColumnFilter({
  column: {filterValue, preFilteredRows, setFilter},
}: any) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined)
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

function Table({columns, data}: any) {
  const defaultColumn: any = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    [],
  )

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable(
      {
        columns,
        data,
        defaultColumn,
      },
      useFilters,
      useGlobalFilter,
    )

  return (
    <Container bg="muted">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}

export default Table
