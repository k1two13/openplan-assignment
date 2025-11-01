import React from 'react';
import styles from './Skeleton.module.css';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  rounded?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  className = '',
  rounded = false,
}) => {
  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height)
    style.height = typeof height === 'number' ? `${height}px` : height;

  const classes = [styles.skeleton, rounded && styles.rounded, className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes} style={style} />;
};
