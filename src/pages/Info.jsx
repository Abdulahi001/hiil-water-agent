export default function Info(props) {

    const tableData = props.tableData;
    const total = tableData.reduce((acc, data) => acc + data.total, 0);
    console.log("Total:", total);
    const dataMap = tableData.map((data, index) => {
        return (
            <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.contact}</td> 
                <td>{data.count}</td>
                <td>{data.countWithBottles}</td>
                <td>{data.paid}</td>
                <td>{data.total}</td>
                <td>{data.benefit}</td>
                <td>{data.dept}</td>
                <td>{data.location}</td>
                <td>{data.category}</td>
                <td><button className="delete-btn" onClick={() => handleDelete(data.id)}>Delete</button></td>
            </tr>
        )
    }) 

    const handleDelete = (id) => {
        const updatedData = tableData.filter((data) => data.id !== id);
        localStorage.setItem("dataArray", JSON.stringify(updatedData));
        
    }

    return (
        <table className="table">
           <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>contact</th>
                <th>Count</th>
                <th>Count with Bottles</th>
                 <th>Paid</th>
                <th>Total</th>
                <th>Benefit</th>
                <th>Dept</th>
                <th>Location</th>
                <th>Category</th>
                <th>Delete</th>
            </tr>
           </thead>
           <tbody>
            {dataMap}
           </tbody>
        </table>
    )
}