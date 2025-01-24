import { FileText, Download, Eye } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
}

export const DocumentGrid = () => {
  const documents: Document[] = [
    {
      id: '1',
      name: 'Property Deed.pdf',
      type: 'PDF',
      size: '2.5 MB',
      uploadDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Evidence Photos.zip',
      type: 'ZIP',
      size: '15 MB',
      uploadDate: '2024-01-20'
    },
    {
      id: '3',
      name: 'Court Notice.pdf',
      type: 'PDF',
      size: '1.2 MB',
      uploadDate: '2024-02-01'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Documents</h3>
        <button className="text-sm text-blue-900 hover:text-blue-700">
          Upload New
        </button>
      </div>

      <div className="grid gap-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{doc.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {doc.size} • Uploaded on {doc.uploadDate}
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="p-1 text-gray-400 hover:text-blue-900 transition-colors duration-200">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-400 hover:text-blue-900 transition-colors duration-200">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};