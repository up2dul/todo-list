import type { PriorityType } from '@/types';

type PriorityIndicatorProps = {
  priority: PriorityType;
};

export const PriorityIndicator = ({ priority }: PriorityIndicatorProps) => {
  let bgColor;

  switch (priority) {
    case 'very-high':
      bgColor = 'bg-p-very-high';
      break;
    case 'high':
      bgColor = 'bg-p-high';
      break;
    case 'medium':
      bgColor = 'bg-p-medium';
      break;
    case 'low':
      bgColor = 'bg-p-low';
      break;
    case 'very-low':
      bgColor = 'bg-p-very-low';
      break;
  }

  return (
    <div
      data-cy='todo-item-priority-indicator'
      className={`h-2.5 w-2.5 rounded-full ${bgColor}`}></div>
  );
};
