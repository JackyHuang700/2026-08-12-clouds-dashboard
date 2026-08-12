'use client'

import { RefreshCw, Search } from 'lucide-react'
import { setCurrentTab } from './use-dashboard-store'

export function DashboardProducts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl text-[#0f172a]">
            Products 產品與服務
          </h2>
          <p className="mt-1 text-[#64748b] text-xs">
            Create and manage your VPS instances from one place.
            在此創建和管理您的 VPS 實例。
          </p>
        </div>
        <button
          type="button"
          onClick={() => setCurrentTab('create-vps')}
          className="flex items-center gap-1.5 rounded-xl bg-[#2563eb] px-4 py-2 font-bold text-white text-xs shadow-sm transition hover:bg-[#1d4ed8]"
        >
          + Create Instance 創建實例
        </button>
      </div>

      {/* Filter Row */}
      <div className="flex items-center gap-4 rounded-xl border border-[#e2e8f0] bg-white p-4 text-xs">
        <div className="relative max-w-xs flex-1">
          <Search
            className="absolute top-2.5 left-3 text-[#94a3b8]"
            size={14}
          />
          <input
            type="text"
            placeholder="按實例名稱或 IP 搜索..."
            className="w-full rounded-lg border border-[#e2e8f0] bg-[#f8fafc] py-1.5 pr-4 pl-8"
          />
        </div>
        <select className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1.5 text-[#334155]">
          <option>All Regions 全部地區</option>
        </select>
        <select className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1.5 text-[#334155]">
          <option>All Statuses 全部狀態</option>
        </select>
        <button
          type="button"
          className="rounded-lg border border-[#e2e8f0] p-1.5 text-[#64748b] hover:bg-[#f1f5f9]"
        >
          <RefreshCw size={14} />
        </button>
      </div>

      {/* Instances Table */}
      <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="border-[#e2e8f0] border-b bg-[#f8fafc] font-semibold text-[#64748b]">
              <th className="p-4">Instance Name 實例名稱</th>
              <th className="p-4">Region 地區</th>
              <th className="p-4">Plan 方案</th>
              <th className="p-4">Status 狀態</th>
              <th className="p-4">IP</th>
              <th className="p-4">Created / Expires 創建與到期時間</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e2e8f0]">
            {instanceRowsArO.map((row) => (
              <tr key={row.id} className="transition hover:bg-[#f8fafc]">
                <td className="p-4">
                  <p className="font-bold text-[#0f172a]">{row.name}</p>
                  <p className="text-[#94a3b8] text-[10px]">ID: {row.id}</p>
                </td>
                <td className="p-4 font-medium text-[#334155]">{row.region}</td>
                <td className="p-4 text-[#475569]">{row.plan}</td>
                <td className="p-4">
                  <span
                    className={`rounded-full px-2 py-0.5 font-bold text-[10px] ${row.color}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-4 font-mono text-[#475569]">{row.ip}</td>
                <td className="p-4 text-[#64748b]">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
DashboardProducts.displayName = 'DashboardProducts' // -----------------------------<< Component >>-----------------------------

const instanceRowsArO = [
  {
    name: 'hk-web-01',
    id: '202405210001',
    region: 'Hong Kong 香港',
    plan: '2 vCPU · 4 GB / 50 GB SSD',
    status: 'Running',
    color: 'bg-[#ecfdf5] text-[#10b981]',
    ip: '103.45.67.89',
    date: 'May 21, 2024 / 365 days left',
  },
  {
    name: 'tokyo-dev-02',
    id: '202405180045',
    region: 'Tokyo 東京',
    plan: '1 vCPU · 2 GB / 40 GB SSD',
    status: 'Running',
    color: 'bg-[#ecfdf5] text-[#10b981]',
    ip: '45.76.231.11',
    date: 'May 18, 2024 / 362 days left',
  },
  {
    name: 'sg-db-01',
    id: '202405150089',
    region: 'Singapore 新加坡',
    plan: '4 vCPU · 8 GB / 100 GB SSD',
    status: 'Running',
    color: 'bg-[#ecfdf5] text-[#10b981]',
    ip: '139.162.15.25',
    date: 'May 15, 2024 / 359 days left',
  },
  {
    name: 'tpe-app-01',
    id: '202405120033',
    region: 'Taipei 台北',
    plan: '2 vCPU · 4 GB / 60 GB SSD',
    status: 'Stopping',
    color: 'bg-[#fffbeb] text-[#d97706]',
    ip: '114.34.78.56',
    date: 'May 12, 2024 / 356 days left',
  },
]
