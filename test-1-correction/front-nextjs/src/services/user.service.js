import { api } from './api.service';

export const getAllUser= async () => {
    return await api('users/lists');
}

export const createUser = async (data) => {
    return await api('users/create', 'POST', data);
}
