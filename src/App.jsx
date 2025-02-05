import { useState } from 'react'

function MortgageCalculator () {

  const [messageError, setMessageError] = useState(false)
  
  const [ data, setData ] = useState({
    amount: 0,
    years: 0,
    rate: 0,
    type: ''
  })

  function handleClickCalulate (event) {
    event.preventDefault()
    const target = event.target;
    const field = new FormData(target)

    const inputsFields = {
      amount: Number(field.get('amount')),
      years: Number(field.get('years')),
      rate: Number(field.get('percent')),
      type: field.get('categorie'),
    }
    console.log(typeof inputsFields.amount)
    if(typeof inputsFields.amount === 'string' || inputsFields.amount <= 0) {
      return setMessageError(true)
    }else {
      setMessageError(false)
    }

    setData({
      amount: inputsFields.amount,
      years: inputsFields.years,
      rate: inputsFields.rate,
      type: inputsFields.type
    })

  }

  return (
    <>
      <h1>Mortgage Calculator</h1>
      <form onSubmit={handleClickCalulate}>
        <div>
          <label htmlFor='amount'>Mortgage Ammount</label>
          <input type='number' name='amount' id='amount'/>
        </div>
        <span className={messageError ? 'display text-red-800' : 'hidden'}>{messageError &&'this field is required'}</span>
        <div>
          <label htmlFor="years">Years</label>
          <input type='number' name='years' id='years'/>
        </div>
        <div>
          <label htmlFor='percent'>Interest Rate</label>
          <input type='number' name='percent' id='percent'/>
        </div>
        <div>
          <label htmlFor='repayment'>Repayment</label>
          <input type='radio' name='categorie' id='repayment' value={'repayment'} defaultChecked/>
        </div>
        <div>
          <label htmlFor="interest">Interest Only</label>
          <input type='radio' name='categorie' id='interest' value={'interest'}/>
        </div>
        <button>Calculate Repayments</button>
      </form>

      <section>
        results: amount: ${data.amount} interest rate: %{data.rate} years: {data.years} categories: {data.categorie}
      </section>
    </>
  )
}

export default function App () {
  return (
    <MortgageCalculator />
  )
}