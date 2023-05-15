import React, { FC } from 'react';

const TranslationJobListSkeleton: FC = () => (
  <div className="animate-pulse flex space-x-4 w-1/4">
    <div className="flex-1 space-y-6 py-1">
      <div className="h-4 bg-slate-200 rounded"></div>
      <div className="h-4 bg-slate-200 rounded"></div>
      <div className="h-4 bg-slate-200 rounded"></div>
    </div>
  </div>
);

export default TranslationJobListSkeleton;
