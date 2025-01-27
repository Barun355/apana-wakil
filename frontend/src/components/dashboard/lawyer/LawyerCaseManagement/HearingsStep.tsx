import { Calendar, Plus, Trash2 } from "lucide-react";
import {
  CaseType,
  HEARING_STATUS,
  HearingType,
  TimelineType,
} from "../../../../lib/types";

interface HearingsStepProps {
  hearings: HearingType[];
  update: React.Dispatch<
    Partial<{
      step: number;
      caseData: CaseType;
      hearings: HearingType[];
      timeline: TimelineType[];
    }>
  >;
  onBack: () => void;
  onNext: () => void;
  lawyerId: string;
}

export default function HearingsStep({
  hearings,
  update,
  onBack,
  onNext,
  lawyerId,
}: HearingsStepProps) {
  const addHearing = () => {
    const newHearing: HearingType = {
      id: crypto.randomUUID(),
      client_id: "",
      date: new Date(),
      status: HEARING_STATUS.UPCOMING,
      lawyer_id: lawyerId,
    };
    update({ hearings: [...hearings, newHearing] });
  };

  const removeHearing = (id: string) => {
    update({ hearings: hearings.filter((hearing) => hearing.id !== id) });
  };

  const updateHearing = (id: string, updates: HearingType) => {
    update({
      hearings: hearings.map((hearing) =>
        hearing.id === id ? updates : hearing
      ),
    });
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-lg font-medium text-gray-900">Hearings</h2>
        <p className="mt-1 text-sm text-gray-500">
          Add upcoming hearings for this case (optional)
        </p>
      </div>

      <div className="space-y-4">
        {hearings.map((hearing) => (
          <div key={hearing.id} className="bg-gray-50 p-4 rounded-lg relative">
            <button
              onClick={() => removeHearing(hearing.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="datetime-local"
                    value={hearing.date.toISOString().slice(0, 16)}
                    onChange={(e) =>
                      updateHearing(hearing.id, {
                        date: new Date(e.target.value),
                        client_id: hearing.client_id,
                        lawyer_id: hearing.lawyer_id,
                        status: hearing.status,
                        id: hearing.id,
                      })
                    }
                    className="pl-10 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  value={hearing.status}
                  onChange={(e) =>
                    updateHearing(hearing.id, {
                      status: (e.target.value as HEARING_STATUS),
                      date: hearing.date,
                      client_id: hearing.client_id,
                      lawyer_id: hearing.lawyer_id,
                      id: hearing.id,
                    })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  {Object.entries(HEARING_STATUS)
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
          onClick={addHearing}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Hearing
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
          onClick={onNext}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          {hearings.length > 0 ? "Next" : "Skip"}
        </button>
      </div>
    </div>
  );
}
