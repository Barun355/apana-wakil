import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Calendar, Download, CheckCircle, HelpCircle, Wallet, QrCode } from 'lucide-react';

interface PaymentDue {
  id: string;
  serviceName: string;
  lawyerName: string;
  dueDate: string;
  amount: number;
  status: 'pending' | 'overdue' | 'paid';
}

interface PaymentHistory {
  id: string;
  date: string;
  serviceName: string;
  amount: number;
  status: 'success' | 'failed' | 'processing';
  receiptUrl?: string;
}

const mockPaymentsDue: PaymentDue[] = [
  {
    id: '1',
    serviceName: 'Initial Consultation',
    lawyerName: 'Adv. Sarah Wilson',
    dueDate: '2024-03-20',
    amount: 150.00,
    status: 'pending',
  },
  {
    id: '2',
    serviceName: 'Case Filing Fee',
    lawyerName: 'Adv. Michael Brown',
    dueDate: '2024-03-15',
    amount: 300.00,
    status: 'overdue',
  },
];

const mockPaymentHistory: PaymentHistory[] = [
  {
    id: '1',
    date: '2024-03-01',
    serviceName: 'Document Review',
    amount: 200.00,
    status: 'success',
    receiptUrl: '#',
  },
];

export const ClientPaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState<PaymentDue | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayNow = (payment: PaymentDue) => {
    setSelectedPayment(payment);
  };

  const handleConfirmPayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setSelectedPayment(null);
    // Show success message
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'overdue':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'paid':
      case 'success':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-8"
      >
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Make a Payment</h1>
          <p className="text-gray-600">Settle your case-related fees quickly and securely</p>
        </div>

        {/* Outstanding Payments */}
        <div className="grid gap-6 mb-12">
          {mockPaymentsDue.map((payment) => (
            <motion.div
              key={payment.id}
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold">{payment.serviceName}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(payment.status)}`}>
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-600">{payment.lawyerName}</p>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar size={16} />
                    <span>Due: {payment.dueDate}</span>
                  </div>
                  <p className="text-xl font-bold text-gray-800">${payment.amount.toFixed(2)}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePayNow(payment)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Pay Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Form Modal */}
        <AnimatePresence>
          {selectedPayment && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full"
              >
                <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
                
                {/* Payment Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-gray-600 mb-2">{selectedPayment.serviceName}</p>
                  <p className="text-gray-600 mb-2">{selectedPayment.lawyerName}</p>
                  <p className="text-2xl font-bold text-gray-800">${selectedPayment.amount.toFixed(2)}</p>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-lg border flex flex-col items-center justify-center gap-2 transition-colors
                        ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                    >
                      <CreditCard size={24} />
                      <span className="text-sm">Card</span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-4 rounded-lg border flex flex-col items-center justify-center gap-2 transition-colors
                        ${paymentMethod === 'upi' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                    >
                      <QrCode size={24} />
                      <span className="text-sm">UPI</span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('netbanking')}
                      className={`p-4 rounded-lg border flex flex-col items-center justify-center gap-2 transition-colors
                        ${paymentMethod === 'netbanking' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                    >
                      <Wallet size={24} />
                      <span className="text-sm">Net Banking</span>
                    </button>
                  </div>
                </div>

                {/* Payment Form */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="text-center p-4">
                    <div className="bg-gray-100 p-4 rounded-lg inline-block mb-4">
                      <QrCode size={150} />
                    </div>
                    <p className="text-gray-600 mb-2">Scan QR code to pay</p>
                    <p className="text-sm text-gray-500">or enter UPI ID</p>
                    <input
                      type="text"
                      placeholder="username@upi"
                      className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Select Bank
                      </label>
                      <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option>Select your bank</option>
                        <option>Bank 1</option>
                        <option>Bank 2</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => setSelectedPayment(null)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleConfirmPayment}
                    disabled={isProcessing}
                    className={`px-6 py-2 bg-blue-600 text-white rounded-lg transition-colors
                      ${isProcessing ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                  >
                    {isProcessing ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Confirm Payment'
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Payment History */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Payment History</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockPaymentHistory.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.serviceName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${payment.amount.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                        {payment.status === 'success' && <CheckCircle size={12} className="mr-1" />}
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {payment.receiptUrl && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                          <Download size={16} className="mr-1" />
                          Download
                        </motion.button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center text-gray-600">
            <HelpCircle size={20} className="mr-2" />
            Need help with your payment?
          </div>
          <p className="mt-2 text-gray-500">
            Contact our support team at{' '}
            <a href="mailto:support@legalconnect.com" className="text-blue-600 hover:text-blue-800">
              support@legalconnect.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};