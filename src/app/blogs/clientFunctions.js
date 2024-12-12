'use client';
import React from 'react';

export const ClientLink = ({ href, children, className }) => {
  const handleClick = () => {
    window.open(href, '_blank');
  };
  
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};