import React from 'react';
import { ImageSizes } from '../enums/imageSizes';

export type ImageSet = Record<ImageSizes, string>;

export interface Project {
  id: string;
  name: string;
  description: string;
  preview?: string;
  sketch?: ImageSet;
  design?: ImageSet;
  html?: React.ReactNode;
}
