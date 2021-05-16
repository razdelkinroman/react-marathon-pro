import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

enum ButtonColor {
  green = 'green',
  blue = 'blue',
  yellow = 'yellow',
}

enum ButtonSize {
  large = 'large',
  middle = 'middle',
  small = 'small',
}

type ButtonColorType = keyof typeof ButtonColor;
type ButtonSizeType = keyof typeof ButtonSize;

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color: ButtonColorType;
  size: ButtonSizeType;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color, size }) => {
  const classes = cn(s.button, s[color], s[size]);

  return (
    <button className={classes} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
