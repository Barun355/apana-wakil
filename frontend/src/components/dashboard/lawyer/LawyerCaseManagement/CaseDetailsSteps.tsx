import React, { useEffect } from 'react';
import { FileUp } from 'lucide-react';
import { CASE_STATUS, CaseType, HearingType, TimelineType } from '../../../../lib/types';

interface CaseDetailsStepProps {
  data: CaseType;
  update: React.Dispatch<Partial<{
    step: number;
    caseData: CaseType;
    hearings: HearingType[];
    timeline: TimelineType[];
}>>;
  onNext: () => void;
}

export default function CaseDetailsStep({ data, update, onNext }: CaseDetailsStepProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if(name === 'title'){
      update({ caseData: { title: value, status: data.status  || CASE_STATUS.ACTIVE} });
    } else if (name === 'email'){
      update({ caseData: { title: data.title, status: data.status  || CASE_STATUS.ACTIVE, client: { email: value }}})
    } else if (name === 'description') {
      update({ caseData: { title: data.title, description: value, status: data.status  || CASE_STATUS.ACTIVE}})
    } else if (name === 'status') {
      update({ caseData: { title: data.title, status: (value as CASE_STATUS) || CASE_STATUS.ACTIVE}})
    }
  };

  useEffect(() => {
    console.log(data)
  }, [data])
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Client Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={data.client?.email || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Case Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={data.title || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Case Description
          </label>
          <textarea
            name="description"
            id="description"
            rows={4}
            value={data.description || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Case Status
          </label>
          <select
            name="status"
            id="status"
            value={data.status || CASE_STATUS.ACTIVE}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {Object.values(CASE_STATUS).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Case Documents
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <FileUp className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="documents"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload files</span>
                  <input
                    id="documents"
                    name="documents"
                    type="file"
                    multiple
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">
                PDF, DOC, DOCX up to 10MB each
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </div>
    </form>
  );
}