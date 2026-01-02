
import React from 'react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  details: string[];
}

export interface Plan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}
