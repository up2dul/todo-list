import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';

import { getAll } from '@/services/api/todo';
import { useTodo } from '@/services/store';
import { TodoItem } from '@/components';

export const TodoList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { activityId } = useParams();

  const { todos, setTodos } = useTodo((state) => state);

  useEffect(() => {
    getActivities();
  }, []);

  const getActivities = async () => {
    setIsLoading(true);

    await getAll(activityId)
      .then((res) => setTodos(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
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
    <div className='mt-12 flex flex-col gap-2.5'>
      {todos?.map(({ id, title, priority }) => (
        <TodoItem key={id} title={title} priority={priority} />
      ))}
    </div>
  );
};
