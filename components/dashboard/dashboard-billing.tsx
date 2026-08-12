'use client'

export function DashboardBilling() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-bold text-2xl text-[#0f172a]">Billing 帳單</h2>
        <p className="mt-1 text-[#64748b] text-xs">
          Track your balance, VPS usage charges, and payment records.
          查看帳戶餘額、VPS 扣款和付款記錄。
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5">
          <p className="font-medium text-[#94a3b8] text-[11px]">
            Account Balance 帳戶餘額
          </p>
          <p className="mt-1 font-bold text-[#2563eb] text-xl">$68.45</p>
          <p className="mt-1 text-[#94a3b8] text-[10px]">
            Available balance 可用餘額
          </p>
        </div>
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5">
          <p className="font-medium text-[#94a3b8] text-[11px]">
            This Month Cost 本月費用
          </p>
          <p className="mt-1 font-bold text-[#10b981] text-xl">$12.80</p>
          <p className="mt-1 text-[#94a3b8] text-[10px]">
            VPS usage this month 本月使用費
          </p>
        </div>
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5">
          <p className="font-medium text-[#94a3b8] text-[11px]">
            Usage Charges 使用費用
          </p>
          <p className="mt-1 font-bold text-[#d97706] text-xl">$11.20</p>
          <p className="mt-1 text-[#94a3b8] text-[10px]">
            Pay-as-you-go charges 按量計費費用
          </p>
        </div>
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5">
          <p className="font-medium text-[#94a3b8] text-[11px]">
            Pending Requests 待處理申請
          </p>
          <p className="mt-1 font-bold text-[#7c3aed] text-xl">1</p>
          <p className="mt-1 text-[#94a3b8] text-[10px]">
            Awaiting confirmation 等待確認
          </p>
        </div>
      </div>

      {/* Transaction History */}
      <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
        <div className="border-[#e2e8f0] border-b bg-[#f8fafc] p-4 font-bold text-[#0f172a] text-xs">
          Transaction History 交易記錄
        </div>
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="border-[#e2e8f0] border-b bg-[#f8fafc] font-semibold text-[#64748b]">
              <th className="p-4">Date 日期</th>
              <th className="p-4">Type 類型</th>
              <th className="p-4">Related Service 關聯服務</th>
              <th className="p-4">Billing Mode 計費方式</th>
              <th className="p-4">Amount 金額</th>
              <th className="p-4">Status 狀態</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e2e8f0]">
            <tr>
              <td className="p-4 text-[#64748b]">May 22, 2024 10:23 AM</td>
              <td className="p-4 font-medium text-[#334155]">
                Instance Usage 實例使用
              </td>
              <td className="cursor-pointer p-4 text-[#2563eb] hover:underline">
                hk-web-01
              </td>
              <td className="p-4 text-[#64748b]">Pay-as-you-go 按量</td>
              <td className="p-4 font-semibold text-[#ef4444]">-$0.18</td>
              <td className="p-4">
                <span className="rounded bg-[#ecfdf5] px-2 py-0.5 font-bold text-[#10b981] text-[10px]">
                  Success 成功
                </span>
              </td>
            </tr>
            <tr>
              <td className="p-4 text-[#64748b]">May 21, 2024 02:11 PM</td>
              <td className="p-4 font-medium text-[#334155]">
                Recharge Confirmed 充值已確認
              </td>
              <td className="p-4 text-[#64748b]">-</td>
              <td className="p-4 text-[#64748b]">-</td>
              <td className="p-4 font-semibold text-[#10b981]">+$50.00</td>
              <td className="p-4">
                <span className="rounded bg-[#ecfdf5] px-2 py-0.5 font-bold text-[#10b981] text-[10px]">
                  Success 成功
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
DashboardBilling.displayName = 'DashboardBilling' // -----------------------------<< Component >>-----------------------------
