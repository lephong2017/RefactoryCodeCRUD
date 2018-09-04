
const columns= [
        {
            Header: "ID",
            id: "productCategoryCode",
            accessor: d => d.productCategoryCode,
            filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ["productCategoryCode"] }),
            filterAll: true
        },
        {
            Header: "Description",
            id: "productCategoryDescription",
            accessor: d => d.productCategoryDescription,
            filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value, { keys: ["productCategoryDescription"] }),
            filterAll: true
        },
        
        {
            Header: "Edit",
            accessor:"productCategoryCode",
            filterable:false,
            Cell: row => (
            <div className="button-table"> 
                <MyButton small aria_label='EDIT' 
                    ID={row.value}
                    obj="cate"
                    pagination={[
                        this.state.pageIndex,
                        this.state.pageSize,
                        this.state.iSearch
                ]}/>
            </div>
            )
        },
        {   
            Header: "Delete",
            accessor:"productCategoryCode",
            filterable:false,
            Cell: row => (
            <div className="button-table"> 
                <MyButton  size="small"  aria_label='DELETE' 
                    onClickComponent={()=>this.onDelete(row.value)}/> 
            </div>
            )
        }
    ] ;