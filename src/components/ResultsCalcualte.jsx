export default function ResultsCalculate ({results}) {
    return (
        <section className="bg-[--slate-900] w-[100%] p-5 self-besaline">
            <div>
                <h1 className="text-[--slate-100] text-[1.2rem] font-[var(--font-w-500)]">Your results</h1>
                <p className="text-[--slate-300] pb-6 pt-3 font-[var(--font-500)]">Your results are shown below based on the information you provided. 
                To adjust the results, edit the form and click “calculate repayments” again.</p>
            </div>

            <div className="bg-[--slate-1000] border-t rounded border-[--primary-color-lime] border-t-4 py-3 px-4">
                <div>
                <h1 className="text-[--slate-300]">Your monthly repayments</h1>
                <p className="py-1 text-[--primary-color-lime] text-[2rem] font-[var(--font-w-700)]">£{results.resultMonthy}</p>
                </div>
                <hr className="my-2 border-t border-[--slate-700] border-[1px]"/>
                <div>
                <h1 className="py-2 text-[--slate-300]">Total you monthly reapyments</h1>
                <p className="text-[1.3rem] text-[--white] font-[var(--font-w-700)]">£{results.resultTotal}</p>
                </div>
            </div>
        </section>
    )
}