import imageUrlBuilder from '@sanity/image-url';
import { projectId, dataset } from './env';

const builder = imageUrlBuilder({ projectId, dataset });

export const urlFor = (source: any) => builder.image(source);