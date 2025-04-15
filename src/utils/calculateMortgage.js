export const calculateMortgage = () => {
  return {
    calculateRepayment: function (ammount, interestRate, years) {
      if (interestRate === 0) {
        const paymentMonthly = ammount / (years * 12);
        const totalMonthly = paymentMonthly * (years * 12);

        return {
          resultMonthyPayments: paymentMonthly,
          totalPayment: totalMonthly,
        };
      }

      const rateMonths = interestRate / 100 / 12;
      const numbersOfPayments = years * 12;

      const MonthlyPayments =
        (ammount * (rateMonths * Math.pow(1 + rateMonths, numbersOfPayments))) /
        (Math.pow(1 + rateMonths, numbersOfPayments) - 1);

      const resultMonthyPayments = MonthlyPayments;
      const totalPayment = resultMonthyPayments * numbersOfPayments;
      console.log({
        a: Number(resultMonthyPayments.toFixed(2)).toLocaleString(),
        b: Number(totalPayment.toFixed(2)).toLocaleString(),
      });
      return {
        resultMonthyPayments,
        totalPayment,
      };
    },

    calculateInterestOnly: function (ammount, interestRate, years) {
        console.log(typeof interestRate);
        
      if (interestRate === 0) {
        return {
          resultMonthyPayments: 0,
          totalPayment: ammount,
        };
      }

      const interestMonthly = interestRate / 100 / 12;
      const numbersOfPayments = years * 12;

      const quoteMonthlyOnlyInterest = ammount * interestMonthly;
      const totalQuoteMonthlyOnlyInterest =
        quoteMonthlyOnlyInterest * numbersOfPayments;
      console.log({ quoteMonthlyOnlyInterest, totalQuoteMonthlyOnlyInterest });
      return {
        resultMonthyPayments: quoteMonthlyOnlyInterest,
        totalPayment: totalQuoteMonthlyOnlyInterest,
      };
    },
  };
};
