const ParticipateAdvantage = ({icon, heading, description}) => {
  return (
    <div className="flex flex-col items-center w-[calc(50%%-2rem)] md:w-[calc(33%-2rem)] my-6 md:my-8 mx-4">
      <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
        <img src={icon} alt="icon" className="w-10 h-10 md:w-12 md:h-12"/>
      </div>
      <div className="text-xl md:text-2xl mt-4 text-slate-200 text-center">{heading}</div>
      <div className="text-xs md:text-base mt-4 text-slate-200 text-center">{description}</div>
    </div>
  )
}

export default ParticipateAdvantage;
