import React from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const OrderTable = (props) => {
    const tableOptions = {
        page: 1,  // which page you want to show as default
      sizePerPageList: [ {
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: 'All', value: props.data.length
      } ], // you can change the dropdown list for size per page
      sizePerPage: 5,  // which size per page you want to locate as default
      pageStartIndex: 0, // where to start counting the pages
      paginationSize: 3,  // the pagination bar size.
        prePage: <i className='glyphicon glyphicon-chevron-left' />,
        nextPage: <i className='glyphicon glyphicon-chevron-right' />,
        firstPage: <i className='glyphicon glyphicon-step-backward' />,
        lastPage: <i className='glyphicon glyphicon-step-forward' />
      };

    return (
        <div>
            {props.isFetching? '' : 
            <BootstrapTable 
            pagination={ true } 
            data={props.data}
            options={ tableOptions }>
                {/* <TableHeaderColumn isKey dataField='id'>Id</TableHeaderColumn> */}
                <TableHeaderColumn isKey dataField='orderNumber'>Order Number</TableHeaderColumn>
                <TableHeaderColumn dataField='orderTotal'>Total</TableHeaderColumn>
                <TableHeaderColumn dataField='customerName'>Customer</TableHeaderColumn>
            </BootstrapTable>}

            <p>{props.isFetching ? 'Fetching orders...' : ''}</p>
        </div>


    );
}

export default OrderTable