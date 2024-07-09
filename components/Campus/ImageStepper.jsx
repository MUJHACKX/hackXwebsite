import React from 'react';


function StepLine({ label, completed, index, totalSteps }) {
  const baseColor = '#ddd'; // Gray for incomplete steps
  const completedColor = '#008000'; // Green for completed steps
  const circleRadius = 10; // Increased circle radius
  const lineMargin = 20; // Adjust margin between lines and circles
  const stepHeight = 100; // Increased height for each step

  const centerY = index * stepHeight + 20; // Calculate center Y position

  const strokeColor = completed ? completedColor : baseColor;
  const strokeWidth = completed ? 2 : 1; // Adjust line thickness for completed steps
  const circleFill = completed ? completedColor : baseColor;

  return (
    <g key={index}>
      {/* Circle for step */}
      <circle cx="50" cy={centerY} r={circleRadius} fill={circleFill} stroke={strokeColor} strokeWidth={strokeWidth} />
      {/* Line connecting steps (except for the last step) */}
      {index < totalSteps - 1 && (
        <line
          x1="50"
          y1={centerY + circleRadius}
          x2="50"
          y2={centerY + stepHeight - circleRadius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      )}
      {/* Text label for step */}
      <rect x="70" y={centerY - 15} width="200" height="30" fill={completed ? 'purple' : '#333'} rx="5" ry="5" />
      <text x="80" y={centerY} dy=".3em" fontSize="16" textAnchor="start" fill="white"> {/* Increased font size */}
        {label}
      </text>
    </g>
  );
}

function ImageStepper({ steps,className }) {
  const svgHeight = steps.length * 100; // Adjust height based on number of steps

  return (
<svg width="100%" height={svgHeight} viewBox={`0 0 300 ${svgHeight}`} className={className}>
      {steps.map((step, index) => (
        <StepLine key={index} label={step.label} completed={step.completed} index={index} totalSteps={steps.length} />
      ))}
    </svg>
  );
}

export default ImageStepper;
