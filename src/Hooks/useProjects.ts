import {mockProjects, project} from '../models/types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import data from '../assets/gdynia2024-akapity.json';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import data2 from '../assets/projects.json';

export const useMockProject = () => {
    return JSON.parse(JSON.stringify(data)) as project;
}

export const useMockProjects = () => {
    return JSON.parse(JSON.stringify(data2)) as mockProjects[];
}