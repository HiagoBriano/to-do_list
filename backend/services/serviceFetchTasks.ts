import fetchTasks from "../models/fetchTasks";

const serviceFetchTasks =  async (id: number) => {
  return await fetchTasks(id);
};

export default serviceFetchTasks;