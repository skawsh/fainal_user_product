import React, { useState } from 'react';
import { ArrowLeft, Receipt, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PaymentOptions } from '../../components/payment/PaymentOptions';
import { DeliveryInfo } from '../../components/payment/DeliveryInfo';
import { OrderConfirmation } from '../../components/payment/OrderConfirmation';

export function PaymentPage() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = async () => {
    if (!selectedPayment) return;
    
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return <OrderConfirmation />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex items-center p-4">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="text-gray-800" />
          </button>
          <h1 className="ml-4 text-xl font-bold">Payment</h1>
        </div>
      </div>

      <div className="p-4 space-y-4 max-w-lg mx-auto pb-24">
        <DeliveryInfo
          address="vatsalya men's PG 3rd floor room number 306"
          name="Chetan"
          phone="+91-8197739892"
        />

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Receipt className="text-gray-600" size={20} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold line-through text-gray-400">₹870.25</span>
                  <span className="text-lg font-bold">₹840.25</span>
                </div>
                <p className="text-sm text-emerald-600">You saved ₹30</p>
                <p className="text-sm text-gray-500">Incl. taxes and charges</p>
              </div>
            </div>
            <ChevronRight className="text-gray-400" />
          </div>
        </div>

        <PaymentOptions
          selectedOption={selectedPayment}
          onSelect={setSelectedPayment}
        />

        <div className="fixed bottom-4 left-4 right-4 max-w-lg mx-auto">
          <button
            onClick={handlePlaceOrder}
            disabled={!selectedPayment || isProcessing}
            className="w-full py-4 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Processing...' : 'Place your order'}
          </button>
        </div>
      </div>
    </div>
  );
}