const ThemeCard = ({ theme, index, currentTheme, setCurrentTheme }) => {
  return (
    <div
      className={`w-[calc(33%-0.25rem)] md:w-[calc(20%-1rem)] ${index === 5 ? 'md:ml-[calc(10%+1rem)]' : ''} pl-2 pr-2 md:pl-6 md:pr-6 border-solid border-2 md:border-4 
      cursor-pointer inline-flex items-center justify-center m-0.5 md:m-2
      ${currentTheme === index ? 'border-b-amber-100 bg-gradient-to-r from-cyan-500 to-purple-500' : ''}`}
      onClick={() => setCurrentTheme(index)}
    >
      <div className="text-xs md:text-xl mb-3 mt-3 text-center">{theme.name}</div>
    </div>
  );
}

export default ThemeCard;
