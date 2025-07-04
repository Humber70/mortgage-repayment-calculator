import { useRef, useState } from "react";
import { validate } from "./utils/validations";
import { calculateMortgage } from "./utils/calculateMortgage";

// components
import ResultsCalculate from "./components/ResultsCalcualte";
import FormCalculate from "./components/FormCalculate";
import IllustrationEmpty from "./components/IllustrationEmpty";

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
    setCategorie("")
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
      categorie: categorie
    };

    // validation
    const validationErrors = validate(inputsFields);
    const isInvalidData = Object.values(validationErrors).some(e => e);
    if (isInvalidData) {
      return setMessageError(validationErrors);
    }

    // Clean message error of the fields
    setMessageError(false);

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
      <section className="h-screen flex flex-col lg:justify-center items-center lg:max-w-[64rem] lg:mx-auto">
        
        <main className="lg:flex lg:items-center lg:gap-4 bg-[var(--white)] lg:rounded-l-lg lg:shadow-lg lg:shadow-gray-500/30">
          <section className="px-[1.25rem] flex flex-col lg:w-[50%]">
            <header className="my-[1.75rem] lg:flex lg:flex-row lg:items-center w-fuldl lg:justify-between">
              <div>
                <h1 className="text-[1.5rem] text-[var(--slate-900)] font-[var(--font-w-700)]">Mortgage Calculator</h1>
              </div>
              <button type="reset" className="bg-transparent text-[var(--slate-500)] underline" onClick={handleClickClearInptus}>Clear All</button>  
            </header>
            
            <FormCalculate data={{formatterValue, messageError, inputRefRate, inputRefYear, categorie, handleChangeRepayment, handleChangeInterestRate, handleNumeric, handleClickCalulate}}/>
          </section>
          
          <section className="bg-[--slate-900] p-[1rem] lg:h-full lg:rounded-r-lg lg:rounded-bl-[5rem] flex items-center lg:w-[50%]">
            {messageError ? <IllustrationEmpty /> : <ResultsCalculate results={data}/>}
          </section>
        </main>
      </section>
    </>
  );
}

export default function App() {
  return <MortgageCalculator />;
}
