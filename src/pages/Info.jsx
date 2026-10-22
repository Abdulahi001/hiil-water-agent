export default function Info(props) {



  const date = () => {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const weekday = now.toLocaleString('en-US', { weekday: 'short' });

  return `${dd}-${mm}-${now.getFullYear()} ${weekday}`;
};
    const tableData = props.tableData;
    const total = tableData.reduce((acc, data) => acc + data.total, 0);
    
    const dataMap = tableData.map((data, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.contact}</td> 
                <td>{data.amount}</td>
                <td>{data.countWithBottles}</td>
                <td>{data.paid}</td>
                <td>{data.total}</td>
                <td>{data.benefit}</td>
                <td>{data.dept}</td>
                <td>{data.location}</td>
                <td>{data.category}</td>
                <td>{date()}</td>
                <td><button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button></td>
            </tr>
        )
    }) 

    const handleDelete = (id) => {
        const updatedData = tableData.filter((data,index) => index !== id);
        localStorage.setItem("dataArray", JSON.stringify(updatedData));
       
        window.location.reload();
        
    }

   

    return (
        <table className="table">
           <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>contact</th>
                <th>Amount</th>
                <th>Count with Bottles</th>
                 <th>Paid</th>
                <th>Total</th>
                <th>Benefit</th>
                <th>Dept</th>
                <th>Location</th>
                <th>Category</th>
                <th>Date</th>
                <th>Delete</th>
            </tr>
           </thead>
           <tbody>
            {dataMap}
           </tbody>
        </table>
    )
}