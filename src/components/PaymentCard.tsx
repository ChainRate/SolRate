import React from 'react';
import Link from 'next/link';

interface PaymentCardProps {
  title: string; // 为 title 添加类型
}

const PaymentCard: React.FC<PaymentCardProps> = ({ title }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full">
    <h2 className="text-2xl font-bold mb-6 text-black">{title}</h2>
    {[...Array(4)].map((_, index) => (
      <Link href={`/project/${index + 1}`} key={index}>
        <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4"></div>
            <div>
              <div className="font-semibold text-black">Name</div>
              <div className="text-xs text-gray-500">Description</div>
              <div className="text-xs text-gray-500">line2</div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-2xl font-bold text-black">9.9</div>
            <div className="text-xs text-gray-400">5021 reviews</div>
          </div>
        </div>
      </Link>
    ))}
    <div className="text-right">
      <a href="#" className="text-black hover:underline text-sm">More →</a>
    </div>
  </div>
);

export default PaymentCard;
