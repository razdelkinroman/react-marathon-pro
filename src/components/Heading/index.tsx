import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

enum TagName {
  title1 = 'h1',
  title2 = 'h2',
  title3 = 'h3',
  title4 = 'h4',
  title5 = 'h5',
  title6 = 'h6',
  body1 = 'p',
}

type HeadingVariant = keyof typeof TagName;

interface HeadingProps {
  variant: HeadingVariant;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, variant, className }) => {
  const Tag = TagName[variant] || 'p';
  const classes = cn(s.Heading, s[variant], className);

  return <Tag className={classes}>{children}</Tag>;
};

export default Heading;
