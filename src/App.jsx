import { useRef, useState } from "react";
import { validate } from "./utils/validations";
import { calculateMortgage } from "./utils/calculateMortgage";

const intialData = {
  amount: 0,
  years: 0,
  rate: 0,
  resultMonthy: 0,
  resultTotal: 0,
}

function MortgageCalculator() {

  const [value, setValue] = useState("")
  const [formatterValue, setFormatterValue] = useState("");

  /* state of message */
  const [messageError, setMessageError] = useState({
    errorAmount: false,
    errorYears: false,
    errorRate: false,
    errorCategorie: false,
  });

  /* option select */
  const [categorie, setCategorie] = useState("");
  const [data, setData] = useState(intialData);

  // reference to inputs 
  const inputRefRate = useRef(null)
  const inputRefYear = useRef(null)

  
  function handleNumeric (e) {
    const numberValue = e.target.value;

    const numberClean = numberValue.replace(/[^0-9]/g, "")
    setValue(numberClean)
    
    if(numberClean) {
      
      const formatted = parseInt(numberClean, 10).toLocaleString("en-US")
      setFormatterValue(formatted)
    }else {
      setFormatterValue("")
      setValue("")
    }
  }
  
  function handleClickClearInptus () {
    // reset form field values
    setFormatterValue("")
    setValue("")
    if(inputRefRate.current || inputRefYear.current) {
      inputRefRate.current.value = ''
      inputRefYear.current.value = ''
    }
  }

  function handleChangeInterestRate(event) {
    setCategorie(event.target.value);
  }

  function handleChangeRepayment(event) {
    setCategorie(event.target.value);
  }

  function handleClickCalulate(event) {
    event.preventDefault();
    const target = event.target;
    const field = new FormData(target);

    //get data form
    const inputsFields = {
      amount: value,
      years: Number(field.get("years")),
      rate: Number(field.get("percent")),
    };
    console.log(inputsFields)

    // validation
    const validationErrors = validate(inputsFields);
    const isInvalidData = Object.values(validationErrors).some(e => e);
    if (isInvalidData) {
      return setMessageError(validationErrors);
    }

    // Clean message error of the fields
    setMessageError({});

    // calculates if you select the "repayment" option
    if (categorie === "repayment") {
      const results = calculateMortgage().calculateRepayment(inputsFields.amount, inputsFields.rate,inputsFields.years);

      setData((prev) => {
        return {
          ...prev,
          resultMonthy: Number(results.resultMonthyPayments.toFixed(2)).toLocaleString("en-US"),
          resultTotal: Number(results.totalPayment.toFixed(2)).toLocaleString("en-US"),
        };
      });
    }

    // calculates if you select the "interest only" option
    if (categorie === "interest") {
      const results = calculateMortgage().calculateInterestOnly(inputsFields.amount, inputsFields.rate, inputsFields.years);

      setData(prev => {
        return {
          ...prev,
          resultMonthy: Number(results.resultMonthyPayments.toFixed(2)).toLocaleString("en-US"),
          resultTotal: Number(results.totalPayment.toFixed(2)).toLocaleString("en-US"),
        };
      });
    }

  }

  return (
    <>
      <section className="max-w-[375px] m-auto flex flex-col gap-5">
        <header>
          <h1 className="text-[var(--slate-900)] font-[var(--font-w-700)]">Mortgage Calculator</h1>
          <button onClick={handleClickClearInptus}>Clear All</button>
        </header>
        
        <main>
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

          <section className="bg-[--slate-900] w-[100%] p-5">
            <div>
              <h1 className="text-[--slate-100] text-[1.2rem]">Your results</h1>
              <p className="text-[--slate-300] pb-6 pt-3">Your results are shown below based on the information you provided. 
              To adjust the results, edit the form and click “calculate repayments” again.</p>
            </div>

            <div className="bg-[--slate-1000] border-t rounded border-[--primary-color-lime] border-t-4 p-2">
              <div>
                <h1 className="text-[--slate-300]">Your monthly repayments</h1>
                <span className="text-[--primary-color-lime] text-3xl">{data.resultMonthy}</span>
              </div>
              <hr className="my-5 border-t border-[--slate-700] border-[1px]"/>
              <div>
                <h1 className="text-[--slate-300]">Total you monthly reapyments</h1>
                <span className="text-[1.4rem] text-[--white]">{data.resultTotal}</span>
              </div>
            </div>
          </section>
        </main>

        <footer>
        Challenge by Frontend Mentor. Coded by Your Name Here.
        </footer>
      </section>
    </>
  );
}

export default function App() {
  return <MortgageCalculator />;
}
