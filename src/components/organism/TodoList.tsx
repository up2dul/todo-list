import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';

import type { TodoData } from '@/types';
import { getAll, update } from '@/services/api/todo';
import { useAlertInformation, useModalDelete, useTodo } from '@/services/store';
import { Overlay } from '@/components/layouts';
import { AlertDelete, ModalDelete, TodoItem } from '@/components';

export const TodoList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { activityId } = useParams();

  const { todos, setTodos, updateTodoState } = useTodo((state) => state);

  const { isShow: isShowModalDelete, setModal, openModal } = useModalDelete((state) => state);
  const { isShow: isShowAlertDelete } = useAlertInformation((state) => state);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    setIsLoading(true);

    await getAll(activityId)
      .then((res) => setTodos(res.data.data))
      .catch((err) => console.log('There is an error:', err.message))
      .finally(() => setIsLoading(false));
  };

  const handleCheck = async (e: ChangeEvent<HTMLInputElement>, todoId: number, todo: TodoData) => {
    setIsLoading(true);
    const newData: TodoData = todo;
    const { checked } = e.target;
    newData.is_active = !checked;

    await update(todoId + '', newData)
      .then((res) => updateTodoState(res.data))
      .catch((err) => console.log('There is an error:', err.message))
      .finally(() => setIsLoading(false));
  };

  const handleDelete = (todoId: number, todoTitle: string) => {
    setModal(todoId, todoTitle);
    openModal();
  };

  if (isLoading)
    return (
      <div className='mt-20 flex justify-center'>
        <SpinnerCircular
          size={50}
          thickness={170}
          speed={150}
          color='#16ABF8'
          secondaryColor='#ffffff'
        />
      </div>
    );

  return (
    <>
      <div className='mt-12 flex flex-col gap-2.5'>
        {todos?.map((todo, i) => (
          <TodoItem
            key={todo.id}
            todoId={todo.id}
            cy={i}
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
