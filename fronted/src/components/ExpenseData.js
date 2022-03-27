import './ExpenseData.css'

const ExpenseData = (props) => {
    const Day = new Date(props.date).toLocaleString('en-US', {month: 'long'})
    const Month = new Date(props.date).toLocaleString('en-US', {day: '2-digit'})
    const Year = new Date(props.date).getFullYear();  
    return (
        <div className="expense-data">
            <div className="date">
               <div>{Day}</div>
               <div>{Month}</div>
               <div>{Year}</div>
            </div>   
            
            <div className="expense-detail">
                <h1 className="expense-title">{props.title}</h1>
                <div className="expense-amt">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseData;