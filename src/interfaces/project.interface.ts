import React from 'react';

export interface Project {
  id: string;
  name: string;
  description: string;
  sketch?: string;
  design?: string;
  html?: React.ReactNode;
}
