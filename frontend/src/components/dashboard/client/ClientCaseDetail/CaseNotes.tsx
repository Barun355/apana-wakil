import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

export const CaseNotes = () => {
  const [expandedNote, setExpandedNote] = useState<string | null>(null);

  const notes: Note[] = [
    {
      id: '1',
      title: 'Initial Consultation Notes',
      content: 'Discussed the primary aspects of the case and gathered initial documentation. Client provided all necessary identification and property papers.',
      date: '2024-01-15',
      author: 'Adv. Jason Smith'
    },
    {
      id: '2',
      title: 'Pre-hearing Preparation',
      content: 'Reviewed all submitted documents. Prepared initial arguments and identified key points to be presented during the first hearing.',
      date: '2024-01-30',
      author: 'Adv. Jason Smith'
    },
    {
      id: '3',
      title: 'First Hearing Summary',
      content: 'Court heard initial arguments. Opposition requested time to file counter-arguments. Next hearing scheduled for document verification.',
      date: '2024-02-01',
      author: 'Adv. Jason Smith'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Case Notes</h3>
      
      <div className="space-y-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-blue-200"
          >
            <button
              onClick={() => setExpandedNote(expandedNote === note.id ? null : note.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
            >
              <div>
                <h4 className="text-sm font-medium text-gray-900">{note.title}</h4>
                <p className="text-xs text-gray-500 mt-1">
                  {note.date} by {note.author}
                </p>
              </div>
              {expandedNote === note.id ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            
            {expandedNote === note.id && (
              <div className="px-4 pb-4 animate-fade-in">
                <p className="text-sm text-gray-600">{note.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};