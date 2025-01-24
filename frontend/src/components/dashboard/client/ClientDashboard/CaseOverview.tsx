import { ArrowRight } from 'lucide-react';

interface CaseStatProps {
  number: number | string;
  label: string;
  details?: string;
  onClick?: () => void;
}

const CaseStat = ({ number, label, details, onClick }: CaseStatProps) => (
  <div className="bg-amber-400 rounded-lg p-6 text-blue-900 hover:bg-amber-300 transition-colors duration-200 cursor-pointer" onClick={onClick}>
    <div className="text-4xl font-bold mb-2">{number}</div>
    <div className="text-sm font-medium mb-1">{label}</div>
    {details && (
      <div className="flex items-center text-xs text-blue-800">
        <span>{details}</span>
        <ArrowRight size={14} className="ml-1" />
      </div>
    )}
  </div>
);

export const CaseOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <CaseStat
        number={57}
        label="Number of ongoing cases"
        details="View details"
      />
      <CaseStat
        number="Next"
        label="hearing date(s) and details"
        details="View details"
      />
      <CaseStat
        number="View"
        label="Lawyer assigned to each case"
        details="View details"
      />
      <CaseStat
        number="Quick"
        label="links to view full case details"
        details="View details"
      />
    </div>
  );
};