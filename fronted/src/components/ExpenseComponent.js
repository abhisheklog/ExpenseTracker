import ExpenseData from "./ExpenseData";

const ExpenseComponent = (props) => {
    return (
        <div>
           {props.expense.map(item => (
               <ExpenseData key={item._id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                
               />))}
            

        </div>
    )
}

export default ExpenseComponent;