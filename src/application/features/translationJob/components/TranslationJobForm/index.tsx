import { useForm } from 'react-hook-form';

import React, { FC, useEffect } from 'react';

import { AddTranslatioJob } from '@/common/domain';
import { useCreateTranslationJobMutation } from '@/infrastructure/api/services';

const TranslationJobForm: FC = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddTranslatioJob>();
  const [createJob, { isLoading, isError, error, isSuccess }] =
    useCreateTranslationJobMutation();
  const onSubmitHandler = (values: AddTranslatioJob) => {
    createJob(values);
    console.log(`Submitted`);
  };

  // useEffect(() => {
  //   if (isSubmitting) {
  //     reset();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isSubmitting]);

  useEffect(() => {
    if (isSuccess) {
      console.log('Job created successfully');
    }

    if (isError) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="w-full max-w-lg m-auto py-10 mt-10 px-10 border"
    >
      <div className="m-4">
        <input
          {...register('customerName', { required: true })}
          placeholder="Customer name"
        />
        {errors.customerName != null && (
          <span className="ml-4 text-red-500">This field is required</span>
        )}
      </div>
      <div className="m-4">
        <input
          {...register('originalContent', { required: true })}
          placeholder="Content"
        />
        {errors.originalContent != null && (
          <span className="ml-4 text-red-500">This field is required</span>
        )}
      </div>
      <button
        className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default TranslationJobForm;
