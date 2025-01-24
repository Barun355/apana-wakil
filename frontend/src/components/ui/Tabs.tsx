import { createContext, useContext, useState } from 'react';

const TabsContext = createContext<{
  value: string;
  onChange: (value: string) => void;
}>({ value: '', onChange: () => {} });

export const Tabs = ({ children, defaultValue }: { children: React.ReactNode; defaultValue: string }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, onChange: setValue }}>
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {children}
    </div>
  );
};

export const TabsTrigger = ({ children, value, className = '' }: { children: React.ReactNode; value: string; className?: string }) => {
  const { value: selectedValue, onChange } = useContext(TabsContext);

  return (
    <button
      onClick={() => onChange(value)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        selectedValue === value
          ? 'bg-blue-900 text-white'
          : 'text-gray-600 hover:bg-gray-100'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children, className, value }: { children: React.ReactNode; className: string;value: string }) => {
  const { value: selectedValue } = useContext(TabsContext);

  if (selectedValue !== value) return null;

  return <div className={`mt-4 animate-fade-in ${className}`}>{children}</div>;
};