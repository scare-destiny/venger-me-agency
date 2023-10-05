import React from 'react';

interface ConditionalIconProps {
  condition: boolean;
  trueIcon?: JSX.Element;
  falseIcon?: JSX.Element;
}

const ConditionalIcon: React.FC<ConditionalIconProps> = ({ condition, trueIcon, falseIcon }) => {
  return <>{condition ? trueIcon : falseIcon}</>;
};

export default ConditionalIcon;
