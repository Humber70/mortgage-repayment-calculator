export default function IllustrationEmpty () {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div>
        <img src="/assets/images/illustration-empty.svg" alt="image-empty" />
      </div>
      <div>
        <h2 className="font-[--font-w-700] text-2xl text-[white] text-center">Results shown here</h2>
        <p className="py-3 text-center text-[var(--slate-500)]">{'Complete the form and click "calculate repayments" to see what your repayments would be.'}</p>
      </div>
    </section>
  )
}