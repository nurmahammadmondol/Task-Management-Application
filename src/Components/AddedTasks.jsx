import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { authContext } from '../Context/AuthProvider';
import { useQueryClient } from '@tanstack/react-query';
import { ClipboardPlus } from 'lucide-react';

const AddedTasks = () => {
  const { openAddFrom, setOpenAddFrom } = useContext(authContext);

  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const category = 'todo';
    const timestamp = new Date().toISOString();
    const newTask = { ...data, category, timestamp };

    axios
      .post(
        'https://task-management-application-backend-beta.vercel.app/tasks',
        newTask
      )
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Task added successfully!',
            showConfirmButton: false,
            timer: 1000,
          });

          // ✅ Proper way to refetch tasks
          queryClient.invalidateQueries(['tasks']);

          setOpenAddFrom(false);
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="mt-10 w-11/12 mx-auto">
      <h5 className="text-center text-2xl font-semibold text-teal-400 flex justify-center items-center gap-1">
        <span>Added a New Task......</span>
        <ClipboardPlus />
      </h5>

      <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
        <label className="text-sm font-bold">Title</label>
        <input
          className={`border p-2 ${errors.title ? 'border-red-500' : ''}`}
          {...register('title', {
            required: true,
            minLength: 5,
            maxLength: 50,
          })}
        />
        {errors.title && (
          <span className="text-red-500 text-xs">
            Title is required, minLength 5 to max 50 characters
          </span>
        )}

        <label className="text-sm font-bold mt-2">Description</label>
        <textarea
          className={`border p-2  ${
            errors.description ? 'border-red-500' : ''
          }`}
          {...register('description', {
            required: true,
            minLength: 50,
            maxLength: 200,
          })}
        />
        {errors.description && (
          <span className="text-red-500 text-xs">
            Description is required, minLength 50 to max 200 characters.
          </span>
        )}

        <button className="btn btn-outline text-teal-300 mt-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddedTasks;
