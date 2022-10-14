/* eslint-disable no-unused-vars */
import create from 'zustand';

type State = {
  id: number;
  title: string;
  created_at: Date;
};

type Activities = {
  activities: State[];
  detailActivity: State;
  setActivities: (data: State[]) => void;
  setDetailActivity: (data: State) => void;
  addActivityState: (data: State) => void;
  updateActivityState: (newData: State) => void;
  deleteActivityState: (id: number) => void;
};

export const useActivity = create<Activities>((set) => ({
  activities: [],
  detailActivity: {
    id: 0,
    title: '',
    created_at: new Date()
  },

  setActivities: (data: State[]) => {
    set({ activities: data });
  },

  setDetailActivity: (data: State) => {
    set({ detailActivity: data });
  },

  addActivityState: (newData: State) => {
    set((state) => ({
      activities: [newData, ...state.activities]
    }));
  },

  updateActivityState: (newData: State) => {
    const updateTitle = (activities: State[]) => {
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
