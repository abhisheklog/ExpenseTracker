import axios from "axios";
import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const[title, setTitle] = useState(' ');
    const[date, setDate] = useState(' ');
    const[amount, setAmount] = useState(' ');

    function titleHandler(event) {
        setTitle(event.target.value)
    }
    function dateHandler(event) {
        setDate(event.target.value)
    }
    function priceHandler(event) {
        setAmount(event.target.value)
    }
    function submitHandler(event) {
        event.preventDefault();

        const formData = {
            title: title,
            date: new Date(date),
            amount: amount
        }

        props.onSaveExpenseData(formData);

        console.log(formData);

        axios.post("http://localhost:5000/api/user", formData)
          .then(res => {
              console.log(res.data)
          })



        setTitle(' ');
        setDate(' ');
        setAmount(' ');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="expense-form">
            <label>Title</label>
            <input type='text'  value={title} onChange={titleHandler}/>
            </div>

            <div className="expense-form">
            <label>Date</label>
            <input type='date'  value={date} onChange={dateHandler}/>
            </div>

            <div className="expense-form">
            <label>Price</label>
            <input type='amount'  value={amount} onChange={priceHandler}/>
            </div>

            <div className="btn-action">
                <button type="submit" >Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm;