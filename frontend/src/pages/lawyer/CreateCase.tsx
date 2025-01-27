import { useState } from "react";
import { CaseType, HearingType, TimelineType } from "../../lib/types";
import CaseDetailsStep from "../../components/dashboard/lawyer/LawyerCaseManagement/CaseDetailsSteps";
import HearingsStep from "../../components/dashboard/lawyer/LawyerCaseManagement/HearingsStep";
import TimelineStep from "./TimelineStep";
import useReducerPlus from "../../hooks/useReducerPlus";
import { createCase } from "../../lib/api";
import { toast } from "react-toastify";
import { globalState } from "../../store/store";

export default function CreateCase() {
  const [step, setStep] = useState(1);

  const { user } = globalState()

  const [state, update] = useReducerPlus({
    step: 1 as number,
    caseData: {} as CaseType,
    Hearings: [] as HearingType[],
    Timeline: [] as TimelineType[],
    isLoading: false,
    error: '',
  });

  console.log(user)
  const handleComplete = async () => {
    try {
      const completeCase: CaseType = {
        ...(state.caseData as CaseType),
        Hearings: state.Hearings,
        Timeline: state.Timeline,
      };

      // Here you would typically make an API call to create the case
      try {
        update({
          isLoading: true,
        });
        const [data, err] = await createCase(completeCase);
        if (err) {
          update({
            error: err.message,
            isLoading: false,
          });
          console.log(err);
          toast.error(err?.message);
          return;
        }
        // update({
         console.log('Create Case Frontend 46: ', data) 
        // });
      } catch (error: any) {
        console.log(error);
        toast.error(error?.message);
      } finally {
        update({
          isLoading: false,
        });
      }
      console.log("Creating case:", completeCase);
      // After successful creation, you might want to redirect or show a success message
    } catch (error) {
      console.error("Error creating case:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              Create New Case
            </h2>
            <div className="mt-2">
              <nav className="flex space-x-4">
                {["Case Details", "Hearings", "Timeline"].map(
                  (stepName, index) => (
                    <button
                      key={stepName}
                      onClick={() => setStep(index + 1)}
                      disabled={index + 1 > step}
                      className={`px-3 py-2 text-sm font-medium rounded-md ${
                        step === index + 1
                          ? "bg-indigo-100 text-indigo-700"
                          : index + 1 < step
                          ? "text-gray-500 hover:text-gray-700"
                          : "text-gray-300"
                      }`}
                    >
                      {stepName}
                    </button>
                  )
                )}
              </nav>
            </div>
          </div>

          <div className="px-8 py-6">
            {step === 1 && (
              <CaseDetailsStep
                data={state.caseData as CaseType}
                update={update}
                onNext={() => setStep(2)}
              />
            )}

            {step === 2 && (
              <HearingsStep
                hearings={state.Hearings as HearingType[]}
                update={update as any}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
                lawyerId={(user?.Lawyer?.id as string)}
              />
            )}

            {step === 3 && (
              <TimelineStep
                timeline={state.Timeline as TimelineType[]}
                update={update as any}
                onBack={() => setStep(2)}
                onComplete={handleComplete}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
