export interface ITask {
  id: number;
  task: string;
  status: 'done' | 'in progress' | 'pending';
  createIn: any;
  updatedAt: any;
}

export interface IFetchTasks {
  id: number;
  name: string;
  email: string;
  Task: ITask[];
  message?: string;
}
