import { languages } from '../languages';
import { MergedResources } from './merged-resourses';
declare const resources: Record<keyof typeof languages, MergedResources>;
export default resources;
