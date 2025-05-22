export default function IllustrationEmpty () {
  return (
    <section className="flex flex-col justify-center items-center bg-[--slate-900] p-[1.5rem] lg:h-full">
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