import axios from 'axios';

import type { TodoData } from '@/types';

const { VITE_BASE_URL } = import.meta.env;

const http = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export const getAll = (activityId: string | undefined) => {
  return http.get('/todo-items?activity_group_id=' + activityId);
};

export const getDetail = (id: string | undefined) => http.get('/todo-items/' + id);

export const create = (data: TodoData) => http.post('/todo-items/', data);

export const update = (id: string | undefined, newData: TodoData) => {
  return http.patch('/todo-items/' + id, newData);
};

export const remove = (id: string) => http.delete('/todo-items/' + id);
