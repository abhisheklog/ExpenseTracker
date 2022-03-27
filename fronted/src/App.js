import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseComponent from "./components/ExpenseComponent";
import ExpenseForm from "./components/ExpenseForm";



function App() {

  const [expense, setExpense] = useState([]);
  /*
  const apiData = async() => {
    try {
      const {data} = await axios.get("http://localhost:5000/api/user")
      console.log(data);
      const response = await data.json();
      setExpense(response)
      console.log(response)
      
    } catch (error) {
      console.log('error')
    }
  }
  console.log(expense)  */

  useEffect(() => {
    axios.get("http://localhost:5000/api/user")
    .then(res => {
      console.log(res)
      setExpense(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const saveExpenseData = (saveFormData) => {
    const updateExpense = [...expense, saveFormData]
    setExpense(updateExpense);
    console.log(updateExpense)
  }
  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseData}/>
      <ExpenseComponent expense={expense}/>
      
    </div>
    )
}

export default App;
