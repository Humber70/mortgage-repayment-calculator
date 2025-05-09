export default function ResultsCalculate ({results}) {
    return (
        <section className="bg-[--slate-900] w-[100%] p-5 self-besaline">
            <div>
                <h1 className="text-[--slate-100] text-[1.2rem]">Your results</h1>
                <p className="text-[--slate-300] pb-6 pt-3">Your results are shown below based on the information you provided. 
                To adjust the results, edit the form and click “calculate repayments” again.</p>
            </div>

            <div className="bg-[--slate-1000] border-t rounded border-[--primary-color-lime] border-t-4 p-2">
                <div>
                <h1 className="text-[--slate-300]">Your monthly repayments</h1>
                <span className="text-[--primary-color-lime] text-3xl">{results.resultMonthy}</span>
                </div>
                <hr className="my-5 border-t border-[--slate-700] border-[1px]"/>
                <div>
                <h1 className="text-[--slate-300]">Total you monthly reapyments</h1>
                <span className="text-[1.4rem] text-[--white]">{results.resultTotal}</span>
                </div>
            </div>
        </section>
    )
}