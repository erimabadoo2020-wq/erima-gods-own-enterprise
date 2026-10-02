'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

type OrderItem = {
  product_name: string
  price: number
  quantity: number
}

type Order = {
  id: string
  status: string
  payment_status: string
  total: number
  created_at: string
}

const STATUS_STEPS = ['pending', 'processing', 'shipped', 'delivered']

function statusLabel(status: string) {
  switch (status) {
    case 'pending': return 'Order Received'
    case 'processing': return 'Being Prepared'
    case 'shipped': return 'Out for Delivery'
    case 'delivered': return 'Delivered'
    default: return status
  }
}

function TrackOrderContent() {
  const searchParams = useSearchParams()
  const [orderId, setOrderId] = useState(searchParams.get('order') || '')
  const [order, setOrder] = useState<Order | null>(null)
  const [items, setItems] = useState<OrderItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)

  const handleSearch = async (idToSearch?: string) => {
    const id = idToSearch ?? orderId
    if (!id.trim()) return

    setLoading(true)
    setError('')
    setSearched(true)

    const supabase = createClient()
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .select('id, status, payment_status, total, created_at')
      .eq('id', id.trim())
      .single()

    if (orderError || !orderData) {
      setError('No order found with that ID. Please check and try again.')
      setOrder(null)
      setItems([])
      setLoading(false)
      return
    }

    const { data: itemsData } = await supabase
      .from('order_items')
      .select('product_name, price, quantity')
      .eq('order_id', id.trim())

    setOrder(orderData)
    setItems(itemsData || [])
    setLoading(false)
  }

  useEffect(() => {
    const preset = searchParams.get('order')
    if (preset) {
      setOrderId(preset)
      handleSearch(preset)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const currentStepIndex = order ? STATUS_STEPS.indexOf(order.status) : -1

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8]">
      <Header />

      <section className="px-8 py-24 max-w-xl mx-auto">
        <p className="text-[#c9a24b] text-sm tracking-[0.3em] mb-4 text-center">TRACK YOUR ORDER</p>
        <h1 className="font-display text-3xl mb-10 text-center">Where's my order?</h1>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Enter your Order ID"
            className="flex-1 bg-transparent border border-[#c9a24b] rounded px-4 py-3 text-sm"
          />
          <button
            onClick={() => handleSearch()}
            disabled={loading}
            className="bg-[#c9a24b] text-black font-medium px-8 py-3 text-sm hover:bg-[#dab868] transition-colors disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Track Order'}
          </button>
        </div>

        {error && <p className="text-red-400 text-sm text-center mb-8">{error}</p>}

        {order && (
          <div className="border border-[#c9a24b]/20 p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs text-[#9a9a9a]">Order ID</p>
                <p className="font-mono text-sm break-all">{order.id}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#9a9a9a]">Placed on</p>
                <p className="text-sm">{new Date(order.created_at).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {STATUS_STEPS.map((step, i) => (
                  <div key={step} className="flex-1 text-center">
                    <div
                      className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                        i <= currentStepIndex ? 'bg-[#c9a24b]' : 'bg-[#333]'
                      }`}
                    />
                    <p className={`text-xs ${i <= currentStepIndex ? 'text-[#c9a24b]' : 'text-[#666]'}`}>
                      {statusLabel(step)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#c9a24b]/10 pt-4 mb-4">
              <p className="text-sm mb-1">
                Payment: <span className={order.payment_status === 'paid' ? 'text-[#c9a24b]' : 'text-[#9a9a9a]'}>
                  {order.payment_status === 'paid' ? 'Paid' : 'Pending'}
                </span>
              </p>
            </div>

            {items.length > 0 && (
              <div className="border-t border-[#c9a24b]/10 pt-4">
                {items.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm mb-2">
                    <p>{item.product_name} × {item.quantity}</p>
                    <p className="text-[#c9a24b]">₦{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
                <div className="flex justify-between font-medium mt-3 pt-3 border-t border-[#c9a24b]/10">
                  <p>Total</p>
                  <p className="text-[#c9a24b]">₦{Number(order.total).toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {searched && !order && !loading && !error && (
          <p className="text-[#9a9a9a] text-sm text-center">No order found.</p>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
      <TrackOrderContent />
    </Suspense>
  )
}
