/** @jsxImportSource theme-ui */

import React from 'react'
import {useFilters, useSortBy, useTable, useResizeColumns} from 'react-table'
import {Container, Input, Text} from 'theme-ui'

function DefaultColumnFilter({
  column: {filterValue, preFilteredRows, setFilter},
}: any) {
  const count = preFilteredRows.length

  return (
    <Input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined)
      }}
      placeholder={`Search ${count} records...`}
      variant="input.table"
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
      useSortBy,
      useResizeColumns,
    )

  const firstPageRows = rows.slice(0, 10)

  return (
    <Container bg="muted">
      <table {...getTableProps()} sx={{padding: 2}}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  sx={{padding: 1}}
                >
                  <Text>{column.render('Header')}</Text>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row: any) => {
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
