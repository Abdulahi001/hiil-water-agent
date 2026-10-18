export default function Info(props) {

    const tableData = props.tableData;
    const dataMap = tableData.map((data, index) => {
        return (
            <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.contact}</td> 
                <td>{data.price}</td>
                <td>{data.count}</td>
                <td>{data.total}</td>
                <td>{data.benefit}</td>
                <td>{data.location}</td>
                <td>{data.category}</td>
            </tr>
        )
    }) 

    return (
        <table className="table">
           <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>contact</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total</th>
                <th>Benefit</th>
                <th>Location</th>
                <th>Category</th>
            </tr>
           </thead>
           <tbody>
            {dataMap}
           </tbody>
        </table>
    )
}