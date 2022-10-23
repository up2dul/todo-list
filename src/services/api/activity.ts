import axios from 'axios';

const { VITE_BASE_URL, VITE_EMAIL } = import.meta.env;

const http = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  params: { email: VITE_EMAIL }
});

type InitData = {
  title: string;
  email: string;
};

const initData: InitData = {
  title: 'New activity',
  email: VITE_EMAIL
};

export const getAll = () => http.get('activity-groups');

export const getDetail = (id: string | undefined) => http.get('activity-groups/' + id);

export const create = () => http.post('activity-groups', initData);

export const update = (id: string | undefined, newData: { title: string }) => {
  return http.patch('activity-groups/' + id, newData);
};

export const remove = (id: string) => http.delete('activity-groups/' + id);
