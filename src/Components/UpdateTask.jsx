import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTask = () => {
  const loaderData = useLoaderData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: loaderData?.title,
      description: loaderData?.description,
    },
  });

  const onSubmit = async data => {
    const updateTime = new Date().toISOString();
    const Data = { ...data, updateTime };

    try {
      const response = await axios.patch(
        `http://localhost:3000/tasks/${loaderData?._id}`,
        Data
      );

      if (response?.data?.modifiedCount > 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Task update success',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="lg:w-2/3 mx-auto">
      <h5 className="text-center text-2xl font-semibold  mb-5 md:mb-10">
        Update Task......
      </h5>

      <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
        <label className="text-sm font-bold">Title</label>
        <input
          className={`border p-2 ${errors.title ? 'border-red-500' : ''}`}
          {...register('title', { required: true, maxLength: 50 })}
        />
        {errors.title && (
          <span className="text-red-500 text-xs">
            Title is required, max 50 characters
          </span>
        )}

        <label className="text-sm font-bold mt-4">Description</label>
        <textarea
          className={`border p-2 h-44 ${
            errors.description ? 'border-red-500' : ''
          }`}
          {...register('description', { required: true, maxLength: 200 })}
        />
        {errors.description && (
          <span className="text-red-500 text-xs">
            Description is required, max 200 characters.
          </span>
        )}

        <input className="btn btn-outline text-teal-300 mt-10" type="submit" />
      </form>
    </div>
  );
};

export default UpdateTask;
