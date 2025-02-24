import React, { useContext } from 'react';
import TaskBoard from '../Components/TaskBoard';
import { authContext } from '../Context/AuthProvider';
import AddedTasks from '../Components/AddedTasks';

const Dashboard = () => {
  const { openAddFrom, setOpenAddFrom } = useContext(authContext);

  return (
    <div>
      {openAddFrom && (
        <div className="">
          <AddedTasks></AddedTasks>
        </div>
      )}
      <TaskBoard></TaskBoard>
    </div>
  );
};

export default Dashboard;
