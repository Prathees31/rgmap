import React from 'react';
class DataTable extends React.Component {
    constructor(props) {
        super (props);
    }
    render() {
        // Data
        let dataColumns = this.props.data.columns;
        let dataRows = this.props.data.rows;
    
        let tableHeaders = (<thead>
              <tr>
                {dataColumns.map(function(column) {
                  return <th key={column.id}>{column.name}</th>; })}
              </tr>
          </thead>);
        let tableBody = dataRows.map(function(row) {
          return (
            <tr key={row.id}>
              {dataColumns.map(function(column) {
                return <td key={column.id}>{row[column.id]}</td>; })}
            </tr>); 
        });
         
        // Decorate with Bootstrap CSS
        return (<table className="table table-bordered table-hover" width="100%">
            {tableHeaders}
            <tbody>
            {tableBody}
            </tbody>
          </table>);
    }
};
export default DataTable;