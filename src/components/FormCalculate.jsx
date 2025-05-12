export default function FormCalculate ({data}) {

    const {handleChangeInterestRate, handleChangeRepayment, handleNumeric, handleClickCalulate, formatterValue, messageError,inputRefRate, inputRefYear} = data

    return (
            <form onSubmit={handleClickCalulate}>
        <div>
            <label htmlFor="amount">Mortgage Ammount</label>
            <input type="text" name="amount" id="amount" onChange={handleNumeric} value={formatterValue}/>
        </div>
        <span
            className={
            messageError.errorAmount ? "display text-red-800" : "hidden"
            }
        >
            {messageError.errorAmount && "this field is required"}
        </span>
        <div>
            <label htmlFor="years">Years</label>
            <input type="number" name="years" id="years" ref={inputRefYear}/>
            <span
            className={
                messageError.errorYears ? "display text-red-800" : "hidden"
            }
            >
            {messageError.errorYears && "this field is required"}
            </span>
        </div>
        <div>
            <label htmlFor="percent">Interest Rate</label>
            <input
            type="number"
            name="percent"
            id="percent"
            ref={inputRefRate}
            step={0.01}
            min={0}
            max={100}
            />
            <span
            className={
                messageError.errorRate ? "display text-red-800" : "hidden"
            }
            >
            {messageError.errorRate && "this field is required"}
            </span>
        </div>
        <div>
            <label htmlFor="repayment">Repayment</label>
            <input
            type="radio"
            name="categorie"
            id="repayment"
            value="repayment"
            onChange={handleChangeRepayment}
            />
        </div>
        <div>
            <label htmlFor="interest">Interest Only</label>
            <input
            type="radio"
            name="categorie"
            id="interest"
            value="interest"
            onChange={handleChangeInterestRate}
            />
            <span
            className={
                messageError.errorCategorie ? "display text-red-800" : "hidden"
            }
            >
            {messageError.errorCategorie && "this field is required"}
            </span>
        </div>
        <button>Calculate Repayments</button>
    </form>
    )
}