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
      <section className="h-screen flex flex-col justify-between">
        <header className="px-[20px]">
          <h1 className="text-[1.5rem] text-[var(--slate-900)] font-[var(--font-w-700)]">Mortgage Calculator</h1>
          <button className="bg-transparent text-[var(--slate-500)] underline" onClick={handleClickClearInptus}>Clear All</button>
        </header>
        
        <main className="px-[20px]">
          <FormCalculate data={{formatterValue, messageError, inputRefRate, inputRefYear, categorie, handleChangeRepayment, handleChangeInterestRate, handleNumeric, handleClickCalulate}}/>
        </main>
        
        <footer>
          {messageError ? <IllustrationEmpty /> : <ResultsCalculate results={data}/>}
        </footer>
      </section>
    </>
  );
}

export default function App() {
  return <MortgageCalculator />;
}
