
export default function FormCalculate ({data}) {

    const {handleChangeInterestRate, handleChangeRepayment, handleNumeric, handleClickCalulate, formatterValue, messageError,inputRefRate, inputRefYear, categorie} = data

    return (
        <form className="flex flex-col gap-2" onSubmit={handleClickCalulate}>
            <div>
                <label htmlFor="amount">Mortgage Ammount</label>
                <div className="flex flex-row-reverse">
                    <input className={`w-full rounded-l-none outline-none border-l-0 text-xl focus:border-[--primary-color-lime] ${messageError.errorAmount && 'inputError'}`} type="text" name="amount" id="amount" onChange={handleNumeric} value={formatterValue}/>

                    <span className={`focus:bg-[yellow] border p-[.5rem] text-center border-[var(--slate-500)] rounded border-r-0 rounded-l-2 rounded-r-none bg-[--slate-100] font-[--font-w-700] text-[--slate-700] px-5 flex justify-center items-center text-[1.2rem] ${messageError.errorAmount && 'bg-[var(--primary-color-red)] text-[var(--white)] inputError'}`}>£</span>
                </div>
            </div>
            <span className={messageError.errorAmount ? "display text-red-800" : "hidden"}>{messageError.errorAmount && "This field is required"}</span>

            <div className="lg:flex lg:gap-4">
                <div className="lg:w-full">
                    <label htmlFor="years">Mortgage Term</label>
                    <div className="flex">
                        <input className={`w-full rounded-r-none border-r-0 text-xl focus:border-[--primary-color-lime] ${messageError.errorYears && 'inputError'}`} type="number" name="years" id="years" ref={inputRefYear}/>
                        <span className={`rounded rounded-l-none border border-l-0 border-[--slate-700] flex justify-center flex-col px-5 font-[--font-w-700] text-[--slate-700] bg-[--slate-100] text-[1.2rem] ${messageError.errorYears && 'bg-[var(--primary-color-red)] text-[var(--white)] inputError'}`}>years</span>
                    </div>
                    <span className={messageError.errorYears ? "display text-red-800" : "hidden"}>
                    {messageError.errorYears && "This field is required"}
                    </span>
                </div>
                <div className="lg:w-full">
                    <label htmlFor="percent">Interest Rate</label>
                    <div className="flex">
                        <input
                        className={`w-full rounded-r-none border-r-0 text-xl focus:border-[--primary-color-lime] ${messageError.errorRate && 'inputError'}`}
                        type="number"
                        name="percent"
                        id="percent"
                        ref={inputRefRate}
                        step={0.01}
                        min={0}
                        max={100}
                        />
                        <span className={`rounded rounded-l-none border border-l-0 border-[--slate-700] flex justify-center flex-col px-5 font-[--font-w-700] text-[1.2rem] text-[--slate-700] bg-[--slate-100] ${messageError.errorRate && 'bg-[var(--primary-color-red)] text-[var(--white)] inputError'}`}>%</span>
                    </div>
                    <span
                    className={
                        messageError.errorRate ? "display text-red-800" : "hidden"
                    }
                    >
                    {messageError.errorRate && "This field is required"}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <label className="p-0" htmlFor="repayment">Mortagage Type</label>
                <div>
                    <label htmlFor="repayment" className={`flex items-center w-full border border-[--slate-500] hover:border-[var(--primary-color-lime)] rounded p-4 cursor-pointer font-[--font-w-700] text-[var(--slate-900)] ${categorie === 'repayment' && 'bg-[--light-yellow] border-[var(--primary-color-lime)]'}`}>

                    <span className={`w-[1rem] h-[1rem] rounded-[50%] outline outline-offset outline-1 bg-[transparent] border border-2 border-[white] mr-4 ${categorie === 'repayment' && 'bg-[var(--primary-color-lime)] outline-[var(--primary-color-lime)] outline-2'}`}>
                    </span>

                    Repayment
                    </label>
                    <input
                    className="sr-only"
                    type="radio"
                    name="categorie"
                    id="repayment"
                    value="repayment"
                    onChange={handleChangeRepayment}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="interest" className={`flex items-center w-full border border-[--slate-500] hover:border-[var(--primary-color-lime)] rounded p-4 cursor-pointer font-[--font-w-700] text-[var(--slate-900)] ${categorie === 'interest' && 'bg-[var(--light-yellow)] border-[var(--primary-color-lime)]'}`}>


                            <span className={`w-[1rem] h-[1rem] rounded-[50%] outline outline-offset outline-1 bg-[transparent] border border-2 border-[white] mr-4 ${categorie === 'interest' && 'bg-[var(--primary-color-lime)] outline-[var(--primary-color-lime)] outline-2'}`}>
                            </span>

                            Interest Only
                        </label>
                            <input
                            className="sr-only"
                            type="radio"
                            name="categorie"
                            id="interest"
                            value="interest"
                            onChange={handleChangeInterestRate}
                            />
                    </div>
                    <span
                    className={
                        messageError.errorCategorie ? "display text-red-800" : "hidden"
                    }
                    >
                    {messageError.errorCategorie && "This field is required"}
                    </span>
                </div>
            </div>
            <button type="submit" className="my-7 flex justify-center gap-5 items-center bg-[--primary-color-lime] my-2 py-4 rounded-3xl hover:bg-[#f5f586]">
                <img src="/assets/icons/icon-calculator.svg" alt="icon-calculator" />
                <span className="text-[--slate-900] font-[--font-w-700] ">Calculate Repayments</span>
            </button>
        </form>
    )
}