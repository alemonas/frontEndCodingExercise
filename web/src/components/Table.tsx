import {useTable} from 'react-table'
import {Container} from 'theme-ui'

function Table({columns, data}: any) {
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable({
      columns,
      data,
    })

  return (
    <Container bg="muted">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
