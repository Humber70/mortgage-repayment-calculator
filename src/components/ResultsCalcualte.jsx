export default function ResultsCalculate ({results}) {
    return (
        <section className="w-full lg:h-full lg:p-[1.2rem]">
            <div>
                <h1 className="text-[--slate-100] text-[1.2rem] font-[var(--font-w-500)]">Your results</h1>
                <p className="text-[--slate-300] pb-6 pt-3 font-[var(--font-500)]">Your results are shown below based on the information you provided. 
                To adjust the results, edit the form and click “calculate repayments” again.</p>
            </div>

            <div className="bg-[--slate-1000] border-t rounded border-[--primary-color-lime] border-t-4 p-7">
                <div className="py-[1rem]">
                    <h1 className="text-[--slate-300]">Your monthly repayments</h1>
                    <p className="py-[0.25rem] text-[--primary-color-lime] text-[2rem] lg:text-[3rem] font-[var(--font-w-700)]">£{results.resultMonthy}</p>
                </div>
                <hr className="my-[.5rem] border-t border-[--slate-700] border"/>
                <div className="py-[1rem]">
                    <h1 className="py-[0.5rem] text-[--slate-300]">Total you monthly reapyments</h1>
                    <p className="text-[1.3rem] text-[--white] font-[var(--font-w-700)]">£{results.resultTotal}</p>
                </div>
            </div>
        </section>
    )
}