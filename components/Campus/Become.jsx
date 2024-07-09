
export default function Become() {
  return(
<div className="w-full h-full flex justify-center p-36 " >
<div className="flex flex-col  lg:flex-row justify-center border-solid border drop-shadow-2xl h-full border-indigo-500/100  p-10 lg:p-10" style={{ backgroundColor: '#000' }}>
  <div className="flex flex-col justify-center items-center w-full h-full  lg:w-1/2 gap-8 font-mono">
    <h1 className="font-mono text-4xl text-white text-center">Become a Campus Ambassador</h1>
  <p className="text-center text-white">Becoming a campus ambassador offers networking, skill
development, exclusive perks, leadership opportunities,
resume enhancement, and unique experiences, making
college life exciting.</p>
  </div>
  <div className="w-full lg:w-1/2 justify-center flex items-center pt-3">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfss23Obg5nU9yuWBPXFOPvXrLfmb43mCBFU9hyZjhbxtjWTg/viewform" target="_blank" rel="noreferrer">
  <button className=" bg-violet-600 text-white w-auto rounded-full p-1 lg:pl-10 lg:pr-7">Apply Now. Registration closes soon.</button>
  </a>
  </div>
</div>

</div>

  )
}