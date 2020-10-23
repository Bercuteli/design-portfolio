import React from 'react';

export interface Project {
  id: string;
  name: string;
  description: string;
  preview?: string;
  sketch?: string;
  design?: string;
  html?: React.ReactNode;
}
