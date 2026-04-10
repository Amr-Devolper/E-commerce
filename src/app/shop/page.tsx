"use client";

import Image from "next/image";
import { Trash2, Plus, Minus, ArrowLeft, XCircle } from "lucide-react"; 
import Link from "next/link";
import { toast } from "sonner";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Shopping Cart</h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start lg:gap-y-8">
          
          {/* LEFT SIDE: Product List & Actions */}
          <div className="lg:col-span-8">
            <div className="bg-white shadow sm:rounded-lg overflow-hidden border border-gray-200">
              <ul role="list" className="divide-y divide-gray-200">
                {/* Product Item */}
                <li className="flex py-6 px-4 sm:px-6 hover:bg-gray-50 transition-colors">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image
                      src="/placeholder.jpg"
                      alt="Product image"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <span className="cursor-pointer hover:underline">Title of Product</span>
                        </h3>
                        <p className="ml-4 text-lg font-bold text-gray-900">$500</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Zara</p>
                      <p className="mt-2 text-sm text-gray-500">men</p>
                    </div>

                    <div className="flex flex-1 items-end justify-between text-sm">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 border rounded-md p-1 bg-gray-50">
                        <button type="button" className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 cursor-pointer"><Minus className="h-4 w-4"/></button>
                        <span className="font-medium text-gray-900 w-8 text-center">1</span>
                        <button type="button" className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 cursor-pointer"><Plus className="h-4 w-4"/></button>
                      </div>

                      <button
                        type="button"
                        className="font-medium text-red-600 hover:text-red-500 flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* ACTION BAR UNDER THE GRID */}
            <div className="mt-6 flex items-center justify-between px-2">
              <Link 
                href="/shop" 
                className="flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Continue Shopping
              </Link>

              <button
                type="button"
                onClick={() => toast.info("Cart cleared")}
                className="flex items-center text-sm font-semibold text-gray-500 hover:text-red-600 transition-colors cursor-pointer"
              >
                <XCircle className="mr-2 h-4 w-4" />
                Clear Shopping Cart
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white shadow sm:rounded-lg border border-gray-200 p-6 sticky top-8">
              <h2 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-4 mb-4">Order Summary</h2>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Total Items</dt>
                  <dd className="text-sm font-medium text-gray-900">1</dd>
                </div>
                <div className="flex justify-between border-t border-gray-100 pt-4">
                  <dt className="text-base font-bold text-gray-900">Total Price</dt>
                  <dd className="text-base font-bold text-indigo-600">$500</dd>
                </div>
              </dl>
              <div className="mt-6">
                <Link 
                  href="/payment" 
                  className="w-full flex items-center justify-center bg-indigo-600 rounded-md py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 shadow-md active:scale-[0.98] transition-all"
                >
                  Checkout
                </Link>
                <p className="mt-6 text-center text-xs text-gray-500">
                Taxes and shipping calculated at checkout
              </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}