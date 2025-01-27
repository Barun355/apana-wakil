import { Plus, Trash2 } from "lucide-react";
import {
  CaseType,
  HearingType,
  TIME_LINE_STATUS,
  TimelineType,
} from "../../lib/types";

interface TimelineStepProps {
  timeline: TimelineType[];
  update: React.Dispatch<
    Partial<{
      step: number;
      caseData: CaseType;
      hearings: HearingType[];
      timeline: TimelineType[];
    }>
  >;
  onBack: () => void;
  onComplete: () => void;
}

export default function TimelineStep({
  timeline,
  update,
  onBack,
  onComplete,
}: TimelineStepProps) {
  const addTimelineItem = () => {
    const newItem: TimelineType = {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      status: TIME_LINE_STATUS.ACTIVE,
      createdAt: new Date(),
    };
    update({ timeline: [...timeline, newItem] });
  };

  const removeTimelineItem = (id: string) => {
    update({ timeline: timeline.filter((item) => item.id !== id) });
  };

  const updateTimelineItem = (id: string, updates: TimelineType) => {
    update({
      timeline: timeline.map((item) => (item.id === id ? updates : item)),
    });
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-lg font-medium text-gray-900">Timeline</h2>
        <p className="mt-1 text-sm text-gray-500">
          Add timeline events for this case (optional)
        </p>
      </div>

      <div className="space-y-4">
        {timeline.map((item) => (
          <div key={item.id} className="bg-gray-50 p-4 rounded-lg relative">
            <button
              onClick={() => removeTimelineItem(item.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) =>
                    updateTimelineItem(item.id, {
                      title: e.target.value,
                      description: item.description,
                      id: item.id,
                      status: item.status,
                      createdAt: item.createdAt,
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={item.description}
                  onChange={(e) =>
                    updateTimelineItem(item.id, {
                      description: e.target.value,
                      id: item.id,
                      status: item.status,
                      title: item.title,
                      createdAt: item.createdAt,
                    })
                  }
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  value={item.status}
                  onChange={() =>
                    updateTimelineItem(item.id, {
                      description: item.description,
                      id: item.id,
                      status: item.status,
                      title: item.title,
                      createdAt: item.createdAt,
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  {Object.entries(TIME_LINE_STATUS)
                    .filter(([key]) => isNaN(Number(key)))
                    .map(([key, value]) => (
                      <option key={key} value={value}>
                        {key}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addTimelineItem}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Timeline Event
        </button>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onComplete}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          {timeline.length > 0 ? "Create Case" : "Skip"}
        </button>
      </div>
    </div>
  );
}
