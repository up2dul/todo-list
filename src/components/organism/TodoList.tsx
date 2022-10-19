import { ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import type { TodoData } from '@/types';
import { getAll, update } from '@/services/api/todo';
import { useAlertInformation, useModalDelete, useTodo } from '@/services/store';
import { Overlay } from '@/components/layouts';
import { AlertDelete, ModalDelete, TodoItem } from '@/components';

export const TodoList = () => {
  const { activityId } = useParams();

  const { todos, setTodos, updateTodoState } = useTodo((state) => state);

  const { isShow: isShowModalDelete, setModal, openModal } = useModalDelete((state) => state);
  const { isShow: isShowAlertDelete } = useAlertInformation((state) => state);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    await getAll(activityId)
      .then((res) => setTodos(res.data.data))
      .catch((err) => console.log('There is an error:', err.message));
  };

  const handleCheck = async (e: ChangeEvent<HTMLInputElement>, todoId: number, todo: TodoData) => {
    const newData: TodoData = todo;
    const { checked } = e.target;
    newData.is_active = !checked;

    await update(todoId + '', newData)
      .then((res) => updateTodoState(res.data))
      .catch((err) => console.log('There is an error:', err.message));
  };

  const handleDelete = (todoId: number, todoTitle: string) => {
    setModal(todoId, todoTitle);
    openModal();
  };

  return (
    <>
      <div className='mt-12 flex flex-col gap-2.5'>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todoId={todo.id}
            title={todo.title}
            priority={todo.priority}
            isActive={todo.is_active}
            onCheck={(e) => handleCheck(e, todo.id, todo)}
            onDelete={() => handleDelete(todo.id, todo.title)}
          />
        ))}
      </div>

      {isShowModalDelete && (
        <Overlay>
          <ModalDelete type='todo' />
        </Overlay>
      )}

      {isShowAlertDelete && (
        <Overlay>
          <AlertDelete type='todo' />
        </Overlay>
      )}
    </>
  );
};
