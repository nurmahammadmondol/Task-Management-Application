import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { FilePenLine, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const fetchTasks = async () => {
  const res = await fetch('http://localhost:3000/tasks');
  return res.json();
};

const TaskBoard = () => {
  const queryClient = useQueryClient();

  // Fetch Data
  const {
    data: tasksData,
    isLoading,
    error,
  } = useQuery({ queryKey: ['tasks'], queryFn: fetchTasks });

  // **Optimistic State**
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasksData) {
      setTasks(tasksData);
    }
  }, [tasksData]);

  // **Update Task Mutation**
  const updateTaskMutation = useMutation({
    mutationFn: async ({ taskId, newCategory }) => {
      return fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: newCategory,
          updateTime: new Date().toISOString(),
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <small className="text-center mb-1">Loading...</small>
        <progress className="progress w-56"></progress>
      </div>
    );
  if (error) return <p>Error fetching tasks</p>;

  // **Handle Drag & Drop**
  const handleDragEnd = result => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Moved Task
    const movedTask = tasks.find(task => task._id === result.draggableId);
    const newCategory = destination.droppableId;

    // **Optimistic UI Update**
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task._id === movedTask._id
          ? {
              ...task,
              category: newCategory,
              updateTime: new Date().toISOString(),
            }
          : task
      )
    );

    // **Update Database**
    updateTaskMutation.mutate(
      { taskId: movedTask._id, newCategory },
      {
        onError: () => {
          // যদি API call fail হয়, আগের UI restore করবো
          setTasks(prevTasks =>
            prevTasks.map(task =>
              task._id === movedTask._id
                ? { ...task, category: source.droppableId }
                : task
            )
          );
        },
      }
    );
  };

  const handleDeleteTask = ID => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        console.log(ID);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  };

  // **Format Tasks**
  const formattedTasks = { todo: [], inProgress: [], done: [] };
  tasks.forEach(task => {
    formattedTasks[task.category].push(task);
  });

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.entries(formattedTasks).map(([columnId, columnTasks]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`w-full bg-teal-200 p-4 rounded-lg shadow-md ${
                  columnId === 'done' ? 'md:col-span-2' : ''
                }`}
              >
                <h2 className="text-xl font-bold text-center border-b-2 border-white text-white capitalize mb-4 pb-1">
                  {columnId.replace(/([A-Z])/g, ' $1')}
                </h2>
                <div>
                  {columnTasks.length === 0 ? (
                    <p className="text-center text-gray-500">No Tasks</p>
                  ) : (
                    columnTasks.map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {provided => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-3 my-2 bg-white shadow-md rounded-lg cursor-pointer relative"
                          >
                            <h3 className="font-bold">{task.title}</h3>
                            <p className="text-xs mt-1 mr-5 md:mr-3">
                              {task.description}
                            </p>
                            <div className="mt-4">
                              <p className="text-sm text-gray-600">
                                Created Tasks:{' '}
                                {new Date(task.timestamp).toLocaleString()}
                              </p>
                              {task.updateTime && (
                                <p className="text-sm text-blue-500">
                                  Updated Tasks:{' '}
                                  {new Date(task.updateTime).toLocaleString()}
                                </p>
                              )}
                            </div>

                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                              {task?.category === 'inProgress' && (
                                <Link to={`/updateTask/${task._id}`}>
                                  <button>
                                    <FilePenLine />
                                  </button>
                                </Link>
                              )}

                              {task?.category !== 'todo' && (
                                <button
                                  onClick={() => handleDeleteTask(task._id)}
                                >
                                  <Trash2 />
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))
                  )}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
