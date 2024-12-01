import { project } from '../models/types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import data from '../assets/gdynia2024-akapity.json';

export const useMockProjects = () => {
    return JSON.parse(JSON.stringify(data)) as project;
}