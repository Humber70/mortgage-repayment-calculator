export default function FormCalculate ({data}) {

    const {handleChangeInterestRate, handleChangeRepayment, handleNumeric, handleClickCalulate, formatterValue, messageError,inputRefRate, inputRefYear, categorie} = data

    return (
        <form className="flex flex-col gap-2" onSubmit={handleClickCalulate}>
            <div>
                <label htmlFor="amount">Mortgage Ammount</label>
                <div className="flex items-besaline">
                    <span className="border p-[.5rem] text-center border-[var(--slate-700)] rounded border-r-0 rounded-l-2 rounded-r-none bg-[--slate-100] font-[--font-w-700] text-[--slate-700] px-5">£</span>
                    <input className="w-full rounded-l-none border-l-0" type="text" name="amount" id="amount" onChange={handleNumeric} value={formatterValue}/>
                </div>
            </div>
            <span className={messageError.errorAmount ? "display text-red-800" : "hidden"}>{messageError.errorAmount && "this field is required"}</span>
            <div>
                <label htmlFor="years">Mortgage Term</label>
                <div className="flex items-besaline">
                    <input className="w-full rounded-r-none border-r-0" type="number" name="years" id="years" ref={inputRefYear}/>
                    <span className="rounded rounded-l-none border border-l-0 border-[--slate-700] flex justify-center flex-col px-5 font-[--font-w-700] text-[--slate-700] bg-[--slate-100]">years</span>
                </div>
                <span className={messageError.errorYears ? "display text-red-800" : "hidden"}>
                {messageError.errorYears && "this field is required"}
                </span>
            </div>
            <div>
                <label htmlFor="percent">Interest Rate</label>
                <div className="flex">
                    <input
                    className="w-full rounded-r-none border-r-0"
                    type="number"
                    name="percent"
                    id="percent"
                    ref={inputRefRate}
                    step={0.01}
                    min={0}
                    max={100}
                    />
                    <span className="rounded rounded-l-none border border-l-0 border-[--slate-700] flex justify-center flex-col px-5 font-[--font-w-700] text-[--slate-700] bg-[--slate-100]">%</span>
                </div>
                <span
                className={
                    messageError.errorRate ? "display text-red-800" : "hidden"
                }
                >
                {messageError.errorRate && "this field is required"}
                </span>
            </div>

            <div className="flex flex-col gap-3">
                <label htmlFor="repayment">Mortagage Type</label>
                <div>
                    <label className={`flex items-center w-full border border-[--slate-700] rounded p-4 cursor-pointer font-[--font-w-700] text-[var(--slate-900)] ${categorie === 'repayment' && 'bg-[--light-yellow] border-[var(--primary-color-lime)]'}`} htmlFor="repayment">

                    <div className={`w-[1rem] h-[1rem] rounded-[50%] outline outline-offset outline-1 bg-[transparent] border border-2 border-[white] mr-4 ${categorie === 'repayment' && 'bg-[var(--primary-color-lime)] outline-[var(--primary-color-lime)] outline-2'}`}>
                    </div>

                    <input
                    className="sr-only"
                    type="radio"
                    name="categorie"
                    id="repayment"
                    value="repayment"
                    onChange={handleChangeRepayment}
                    />
                    Repayment
                    </label>
                </div>
                <div>
                    <div>
                        <label className={`flex items-center w-full border border-[--slate-700] rounded p-4 cursor-pointer font-[--font-w-700] text-[var(--slate-900)] ${categorie === 'interest' && 'bg-[--light-yellow] border-[var(--primary-color-lime)]'}`} htmlFor="interest">


                            <div className={`w-[1rem] h-[1rem] rounded-[50%] outline outline-offset outline-1 bg-[transparent] border border-2 border-[white] mr-4 ${categorie === 'interest' && 'bg-[var(--primary-color-lime)] outline-[var(--primary-color-lime)] outline-2'}`}>
                            </div>

                            <input
                            className="sr-only"
                            type="radio"
                            name="categorie"
                            id="interest"
                            value="interest"
                            onChange={handleChangeInterestRate}
                            />
                            Interest Only
                        </label>
                    </div>
                    <span
                    className={
                        messageError.errorCategorie ? "display text-red-800" : "hidden"
                    }
                    >
                    {messageError.errorCategorie && "this field is required"}
                    </span>
                </div>
            </div>
            <button className="flex justify-center gap-5 items-center bg-[--primary-color-lime] my-2 py-4">
                <img src="/assets/icons/icon-calculator.svg" alt="icon-calculator" />
                <span className="text-[--slate-900] font-[--font-w-700] ">Calculate Repayments</span>
            </button>
        </form>
    )
}