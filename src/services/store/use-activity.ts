/* eslint-disable no-unused-vars */
import create from 'zustand';

import type { Todo } from '@/types';

export type Activity = {
  id: number;
  title: string;
  created_at: Date;
  todo_items: Todo[];
};

type Activities = {
  activities: Activity[];
  detailActivity: Activity;
  setActivities: (data: Activity[]) => void;
  setDetailActivity: (data: Activity) => void;
  updateActivityState: (newData: Activity) => void;
  deleteActivityState: (id: number) => void;
};

export const useActivity = create<Activities>((set) => ({
  activities: [],
  detailActivity: {
    id: 0,
    title: '',
    created_at: new Date(),
    todo_items: []
  },

  setActivities: (data: Activity[]) => {
    set({ activities: data });
  },

  setDetailActivity: (data: Activity) => {
    set({ detailActivity: data });
  },

  updateActivityState: (newData: Activity) => {
    const updateTitle = (activities: Activity[]) => {
      activities.forEach((a) => {
        if (a.id === newData.id) a.title = newData.title;
      });
      return activities;
    };
    set((state) => ({
      activities: updateTitle(state.activities)
    }));
  },

  deleteActivityState: (id: number) => {
    set((state) => ({
      activities: state.activities.filter((a) => a.id !== id)
    }));
  }
}));
