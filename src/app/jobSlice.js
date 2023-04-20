import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  filtredJobs: [],
  initialized: false,
};

const jobSlice = createSlice({
  name: 'jobSlice',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.filtredJobs = action.payload;
      state.initialized = true;
    },

    handleInputChange: (state, action) => {
      // inputa yazılana göre filtreleme
      const filtredByQuery = state.jobs.filter((job) => {
        const selectedJob = job.company.toLowerCase();
        const query = action.payload.toLowerCase();

        return selectedJob.includes(query);
      });
      // oluşan filtrelenmiş diziyi state'e aktardık
      state.filtredJobs = filtredByQuery;
    },

    handleStatusChange: (state, action) => {
      // gelen aksiyon bverisine göre durumu filtreleme
      const filtredByStatus = state.jobs.filter(
        (job) => job.status === action.payload
      );
      // oluşan filtrelenmiş diziyi state'e aktardık
      state.filtredJobs = filtredByStatus;
    },

    handleSortChange: (state, action) => {
      switch (action.payload) {
        case 'a-z':
          state.filtredJobs.sort((a, b) => {
            if (a.company < b.company) return -1;
            if (a.company > b.company) return 1;

            return 0;
          });
          break;

        case 'z-a':
          state.filtredJobs.sort((a, b) => {
            if (a.company < b.company) return 1;
            if (a.company > b.company) return -1;

            return 0;
          });
          break;

        case 'Önce-Yeni':
          state.filtredJobs.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;

        case 'Önce-Eski':
          state.filtredJobs
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .reverse();
          break;

        default:
          break;
      }
    },

    handleReset: (state) => {
      state.filtredJobs = state.jobs;
    },
  },
});

export const {
  setJobs,
  addJob,
  handleInputChange,
  handleStatusChange,
  handleSortChange,
  handleReset,
} = jobSlice.actions;
export default jobSlice.reducer;