export default function FormCalculate ({data}) {

    const {handleChangeInterestRate, handleChangeRepayment, handleNumeric, handleClickCalulate, formatterValue, messageError,inputRefRate, inputRefYear} = data

    return (
        <form className="flex flex-col gap-2" onSubmit={handleClickCalulate}>
            <div>
                <label htmlFor="amount">Mortgage Ammount</label>
                <div className="flex items-besaline">
                    <span className="w-[10%] border p-[.5rem] text-center border-[var(--slate-700)] rounded border-r-0 rounded-l-2 rounded-r-none bg-[--slate-100] font-[--font-w-700] text-[--slate-500]">£</span>
                    <input className="w-full rounded-l-none border-l-0" type="text" name="amount" id="amount" onChange={handleNumeric} value={formatterValue}/>
                </div>
            </div>
            <span className={messageError.errorAmount ? "display text-red-800" : "hidden"}>{messageError.errorAmount && "this field is required"}</span>
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