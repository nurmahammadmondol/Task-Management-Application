import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const UpdateTask = () => {
  const loaderData = useLoaderData(); // LoaderData থেকে আগের ডাটা আনছি
  console.log(loaderData);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      Title: loaderData?.title, // আগের ডাটা থাকলে সেট করো, না থাকলে ""
      description: loaderData?.description, // আগের ডাটা থাকলে সেট করো, না থাকলে ""
    },
  });

  const onSubmit = data => console.log(data);

  return (
    <div className="lg:w-2/3 mx-auto">
      <h5 className="text-center text-2xl font-semibold  mb-5 md:mb-10">
        Update Task......
      </h5>

      <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
        <label className="text-sm font-bold">Title</label>
        <input
          className="border p-2"
          {...register('Title', { required: true, maxLength: 50 })}
        />
        <label className="text-sm font-bold mt-4">Description</label>
        <textarea
          className="border p-2 h-44"
          {...register('description', { required: true, maxLength: 200 })}
        />

        <input className="btn btn-outline  text-teal-300 mt-10" type="submit" />
      </form>
    </div>
  );
};

export default UpdateTask;
