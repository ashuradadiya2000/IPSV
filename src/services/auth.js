import instance from "./axios";

export const login = async (data) => {
    return await instance.post('auth/authenticate', data).then((res) => res)
}