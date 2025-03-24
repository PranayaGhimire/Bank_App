import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
const App = () => {
  const [balance,setBalance] = useState(1000);
  const [isOpen,setIsOpen] = useState(false);
  const [message,setMessage] = useState(null);
  const handleDeposit = ()=>{
    const amount = Number(prompt("Enter Amount to Deposit:"));
    if(isNaN(amount))
    {
      alert("Invalid Amount! Please enter a valid amount");
      return;
    }
    setBalance(balance+amount);
    setMessage(`NPR ${amount} deposited successfully!`);
  }
  const handleWithdraw = ()=>{
    const amount=Number(prompt("Enter Amount to Withdraw:"));
    if(isNaN(amount))
      {
        alert("Invalid Amount! Please enter a valid amount");
        return;
      }
    if(balance<amount){
      alert("Sorry You don't have enough funds to Withdraw!")
      return;
    }
    setBalance(balance-amount);
    setMessage(`NPR ${amount} withdrawn successfully!`);
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-tl from-zinc-700 to-zinc-900 text-white'>
      <div className='flex flex-col items-center justify-center space-y-6'>
        <h1 className='text-3xl font-bold'>Bank App</h1>
        <div className='flex space-x-5 items-center'>
            <h1 className='text-2xl font-bold'>{`Balance: NPR ${isOpen?balance:'XXXX.XX'}`}</h1>
            <FontAwesomeIcon icon={isOpen?faEyeSlash:faEye} 
             onClick={()=>setIsOpen(!isOpen)} className={`p-2 rounded-full text-2xl cursor-pointer ${isOpen?'bg-red-700':'bg-violet-600'}`}/>
        </div>
        
        <div className='space-x-5'>
        <button
        onClick={handleDeposit}
        className='bg-blue-600 p-2 rounded-bl-lg hover:bg-blue-700 cursor-pointer'>Deposit</button>
        <button
        onClick={handleWithdraw}
        className='bg-green-600 p-2 rounded-br-lg hover:bg-green-700 cursor-pointer'>Withdraw</button>
        </div>
        {message && <p className='text-xl'>{message}</p>}       
      </div>
    </div>
  )
}

export default App
