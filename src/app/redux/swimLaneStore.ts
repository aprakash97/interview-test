/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import axios from 'axios';

type Swimlane = {
  id: number;
  title: string;
  status_id: number,
  main_status: string,
  sub_status: string,
  is_image: boolean
};

type SwimlaneState = {
  lanes: Swimlane[];
  loading: boolean;
  error: string | null;
  fetchLanes: () => Promise<void>;
};

export const useSwimlaneStore = create<SwimlaneState>((set) => ({
  lanes: [],
  loading: false,
  error: null,
  fetchLanes: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('/endpointData.json');
      set({ lanes: response.data.data, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));