'use client'

import {
  Bell,
  ChevronRight,
  FileText,
  Layers,
  LayoutDashboard,
  Receipt,
  Search,
  Wallet,
  X,
} from 'lucide-react'
import { DashboardBilling } from './dashboard-billing'
import { DashboardCreateVps } from './dashboard-create-vps'
import { DashboardOverview } from './dashboard-overview'
import { DashboardProducts } from './dashboard-products'
import { DashboardRecharge } from './dashboard-recharge'
import { setCurrentTab, useDashboardStore } from './use-dashboard-store'

export function DashboardIndex() {
  const { currentTab } = useDashboardStore()

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc] font-sans text-[#1e293b] antialiased">
      {/* ===== Sidebar ===== */}
      <aside className="flex w-64 shrink-0 flex-col justify-between border-[#e2e8f0] border-r bg-white">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 p-6">
            <div className="grid h-8 w-8 grid-cols-3 gap-1">
              {logoDotsArO.map((dot) => (
                <div key={dot.id} className={`rounded-sm ${dot.color}`} />
              ))}
            </div>
            <div>
              <h1 className="font-bold text-[#0f172a] text-xl tracking-tight">
                Gridnix
              </h1>
              <p className="-mt-1 text-[#94a3b8] text-[10px] uppercase tracking-widest">
                Smart · Powerful · Reliable
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 px-4">
            <button
              type="button"
              onClick={() => setCurrentTab('overview')}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-medium text-sm transition-all ${
                currentTab === 'overview'
                  ? 'bg-[#eff6ff] text-[#2563eb]'
                  : 'text-[#64748b] hover:bg-[#f1f5f9]'
              }`}
            >
              <LayoutDashboard size={18} />
              <span>Overview 概覽</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrentTab('products')}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-medium text-sm transition-all ${
                currentTab === 'products' || currentTab === 'create-vps'
                  ? 'bg-[#eff6ff] text-[#2563eb]'
                  : 'text-[#64748b] hover:bg-[#f1f5f9]'
              }`}
            >
              <Layers size={18} />
              <span>Products 產品與服務</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrentTab('billing')}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-medium text-sm transition-all ${
                currentTab === 'billing'
                  ? 'bg-[#eff6ff] text-[#2563eb]'
                  : 'text-[#64748b] hover:bg-[#f1f5f9]'
              }`}
            >
              <Receipt size={18} />
              <span>Billing 帳單</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrentTab('recharge')}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-medium text-sm transition-all ${
                currentTab === 'recharge'
                  ? 'bg-[#eff6ff] text-[#2563eb]'
                  : 'text-[#64748b] hover:bg-[#f1f5f9]'
              }`}
            >
              <Wallet size={18} />
              <span>Recharge 充值</span>
            </button>
          </nav>
        </div>

        {/* System Status Widget */}
        <div className="m-4 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#10b981]" />
            <span className="font-semibold text-[#334155] text-xs">
              All Systems Operational
            </span>
          </div>
          <p className="mb-2 text-[#94a3b8] text-[11px]">所有系統運行正常</p>
          <button
            type="button"
            className="flex items-center gap-1 font-medium text-[#2563eb] text-xs hover:underline"
          >
            View Status Page 查看狀態頁面 <ChevronRight size={14} />
          </button>
        </div>
      </aside>

      {/* ===== Main Content Area ===== */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-[#e2e8f0] border-b bg-white px-8">
          <div className="relative w-80">
            <Search
              className="absolute top-2.5 left-3 text-[#94a3b8]"
              size={16}
            />
            <input
              type="text"
              placeholder="Search instances, IPs, snapshots... 搜索實例、IP、快照..."
              className="w-full rounded-lg border-none bg-[#f1f5f9] py-1.5 pr-4 pl-9 text-xs focus:outline-none focus:ring-1 focus:ring-[#2563eb]"
            />
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="flex items-center gap-1 text-[#64748b] text-xs hover:text-[#334155]"
            >
              <FileText size={16} /> Document Center 文檔中心
            </button>
            <div className="relative cursor-pointer text-[#64748b] hover:text-[#334155]">
              <Bell size={18} />
              <span className="-right-1.5 -top-1.5 absolute rounded-full bg-[#ef4444] px-1 font-bold text-[9px] text-white">
                2
              </span>
            </div>
            <div className="flex cursor-pointer items-center gap-2 border-[#e2e8f0] border-l pl-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563eb] font-bold text-white text-xs">
                M
              </div>
              <span className="font-medium text-[#334155] text-xs">
                may55787838@gmail.com
              </span>
            </div>
          </div>
        </header>

        {/* System Notice Banner */}
        <SystemNoticeBanner />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {currentTab === 'overview' && <DashboardOverview />}
          {currentTab === 'products' && <DashboardProducts />}
          {currentTab === 'billing' && <DashboardBilling />}
          {currentTab === 'recharge' && <DashboardRecharge />}
          {currentTab === 'create-vps' && <DashboardCreateVps />}
        </main>
      </div>
    </div>
  )
}
DashboardIndex.displayName = 'DashboardIndex' // -----------------------------<< Component >>-----------------------------

function SystemNoticeBanner() {
  return (
    <div className="flex shrink-0 items-center justify-between border-[#bfdbfe] border-b bg-[#eff6ff] px-8 py-2.5 text-[#1e40af] text-xs">
      <div className="flex items-center gap-2 overflow-hidden">
        <span className="shrink-0 rounded bg-[#3b82f6] px-1.5 py-0.5 font-bold text-[10px] text-white uppercase tracking-wider">
          System Notice
        </span>
        <span className="truncate">
          [Maintenance] Hong Kong region will undergo scheduled maintenance on
          May 25, 02:00–04:00 UTC / [維護] Hong Kong 地區將於 5 月 25 日
          02:00–04:00 UTC 進行例行維護。
        </span>
      </div>
      <button
        type="button"
        className="ml-4 text-[#64748b] hover:text-[#334155]"
      >
        <X size={14} />
      </button>
    </div>
  )
}

const logoDotsArO = [
  { id: 'dot-0', color: 'bg-[#2563eb]' },
  { id: 'dot-1', color: 'bg-[#60a5fa]' },
  { id: 'dot-2', color: 'bg-[#2563eb]' },
  { id: 'dot-3', color: 'bg-[#60a5fa]' },
  { id: 'dot-4', color: 'bg-[#2563eb]' },
  { id: 'dot-5', color: 'bg-[#60a5fa]' },
  { id: 'dot-6', color: 'bg-[#2563eb]' },
  { id: 'dot-7', color: 'bg-[#60a5fa]' },
  { id: 'dot-8', color: 'bg-[#2563eb]' },
]
