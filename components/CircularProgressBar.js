function CircularProgressBar({
                               size = 130,
                               progress = 0,
                               trackWidth = 14,
                               trackColor = `#ddd`,
                               indicatorWidth = 16,
                               indicatorColor = `#663DFF`,
                               indicatorCap = `square`,
                               label = ``,
                               labelColor = `#eee`,
                               spinnerMode = false,
                               spinnerSpeed = 1,
                             customStyles = ''}) {
  const center = size / 2,
    radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * (1 - progress);
  return (
    <div className={customStyles}>
      <div
        className="svg-pi-wrapper"
        style={{width: size, height: size, position: 'relative'}}
      >
        <svg
          className="svg-pi"
          style={{width: size, height: size, transform: 'rotate(-90deg)'}}
        >
          <circle
            className="svg-pi-track"
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={trackColor}
            strokeWidth={trackWidth}
          />
          <circle
            className={`svg-pi-indicator ${
              spinnerMode ? "svg-pi-indicator--spinner" : ""
            }`}
            style={{animationDuration: spinnerSpeed * 1000}}
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={indicatorColor}
            strokeWidth={indicatorWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap={indicatorCap}
          />
        </svg>

        <div
          className="svg-pi-label"
          style={{
            color: labelColor,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
            <span className="svg-pi-label__loading" style={{display: 'block'}}>
              {label}
            </span>
        </div>
      </div>
    </div>
  )
}

export default CircularProgressBar;
