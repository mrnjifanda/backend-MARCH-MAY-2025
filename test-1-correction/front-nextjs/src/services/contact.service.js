import { api } from './api.service';

export const getAllContact = async () => {
    return await api('contact/lists');
}

export const getOneContact = async (id) => {
    return await api('contact/lists/' + id);
}

export const createContact = async (data) => {
    return await api('contact/create', 'POST', data);
}

export const updateContact = async (id, data) => {
    return await api('contact/update/' + id, 'PUT', data);
}

export const deleteContact = async (id) => {
    return await api('contact/delete/' + id, 'DELETE', data);
}
