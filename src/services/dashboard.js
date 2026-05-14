import instance from "./axios";

export const getProjects =  async () => {
    return await instance.get('projects/getProjects').then((res) => res)
}


export const getProjectsById =  async (id) => {
    return await instance.get('projects/'+id).then((res) => res)
}

export const createProject = async (data) => {
    return await instance.post('projects/create', data).then((res) => res)
}

export const getFrequencyList = async () => {
    return await instance.get('app/frequency/all').then((res) => res)
}

export const getFilterList = async () => {
    return await instance.get('app/filter/all').then((res) => res)
}