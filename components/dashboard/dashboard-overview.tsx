'use client'

import { ChevronRight, Clock, Server } from 'lucide-react'
import { setCurrentTab } from './use-dashboard-store'

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-bold text-2xl text-[#0f172a]">Overview 概覽</h2>
        <p className="mt-1 text-[#64748b] text-xs">
          Monitor your infrastructure, balance, and activity at a glance.
          一目了然地查看基礎設施、餘額與活動。
        </p>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-5 gap-4">
        <div className="flex items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-5">
          <div className="rounded-xl bg-[#eff6ff] p-3 text-[#2563eb]">
            <Server size={20} />
          </div>
          <div>
            <p className="font-medium text-[#94a3b8] text-[11px]">
              Active Instances / 活躍實例
            </p>
            <p className="font-bold text-[#0f172a] text-xl">4</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-5">
          <div className="rounded-xl bg-[#ecfdf5] p-3 text-[#10b981]">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#10b981] font-bold text-[10px]">
              ▶
            </div>
          </div>
          <div>
            <p className="font-medium text-[#94a3b8] text-[11px]">
              Running / 運行中
            </p>
            <p className="font-bold text-[#0f172a] text-xl">3</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-5">
          <div className="rounded-xl bg-[#fef2f2] p-3 text-[#ef4444]">
            <div className="h-5 w-5 rounded-sm bg-[#ef4444]" />
          </div>
          <div>
            <p className="font-medium text-[#94a3b8] text-[11px]">
              Stopped / 已停止
            </p>
            <p className="font-bold text-[#0f172a] text-xl">1</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-5">
          <div className="rounded-xl bg-[#fffbeb] p-3 text-[#f59e0b]">
            <Clock size={20} />
          </div>
          <div>
            <p className="font-medium text-[#94a3b8] text-[11px]">
              Expiring Soon / 即將到期
            </p>
            <p className="font-bold text-[#0f172a] text-xl">
              1{' '}
              <span className="font-normal text-[#94a3b8] text-[10px]">
                Within 7 days
              </span>
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-5">
          <div>
            <p className="font-medium text-[#94a3b8] text-[11px]">
              Account Balance / 帳戶餘額
            </p>
            <p className="mt-1 font-bold text-[#2563eb] text-xl">
              $68.45{' '}
              <span className="font-normal text-[#64748b] text-[10px]">
                USD
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCurrentTab('recharge')}
            className="mt-3 w-full rounded-lg bg-[#2563eb] py-1.5 font-medium text-white text-xs transition hover:bg-[#1d4ed8]"
          >
            Recharge 充值
          </button>
        </div>
      </div>

      {/* Timeline and Resources */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 rounded-2xl border border-[#e2e8f0] bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-bold text-[#0f172a] text-sm">
              Activity Timeline 活動時間軸
            </h3>
            <button
              type="button"
              className="font-medium text-[#2563eb] text-xs"
            >
              查看全部
            </button>
          </div>
          <div className="relative space-y-4 before:absolute before:top-2 before:bottom-2 before:left-3 before:w-[1px] before:bg-[#e2e8f0]">
            {timelineItemsArO.map((item) => (
              <div
                key={item.id}
                className="relative flex items-start gap-4 pl-1 text-xs"
              >
                <div
                  className={`z-10 mt-1.5 h-2 w-2 rounded-full ring-4 ring-white ${item.color}`}
                />
                <div className="flex flex-1 justify-between">
                  <span className="font-medium text-[#334155]">
                    {item.title}
                  </span>
                  <span className="text-[#94a3b8]">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
            <h3 className="mb-4 font-bold text-[#0f172a] text-sm">
              Resource Summary 資源概覽
            </h3>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3">
                <p className="mb-1 text-[#94a3b8]">Instances</p>
                <p className="font-bold text-[#0f172a]">4</p>
              </div>
              <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3">
                <p className="mb-1 text-[#94a3b8]">Snapshots</p>
                <p className="font-bold text-[#0f172a]">12</p>
              </div>
              <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3">
                <p className="mb-1 text-[#94a3b8]">Sec Groups</p>
                <p className="font-bold text-[#0f172a]">6</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5">
            <h3 className="mb-3 font-bold text-[#64748b] text-xs uppercase tracking-wider">
              Quick Actions 快捷操作
            </h3>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setCurrentTab('products')}
                className="flex w-full items-center justify-between rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3 text-left text-xs transition hover:bg-[#f1f5f9]"
              >
                <div>
                  <p className="font-semibold text-[#334155]">
                    View Products 查看產品
                  </p>
                  <p className="text-[#94a3b8] text-[10px]">管理您的執行實例</p>
                </div>
                <ChevronRight size={16} className="text-[#94a3b8]" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentTab('recharge')}
                className="flex w-full items-center justify-between rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3 text-left text-xs transition hover:bg-[#f1f5f9]"
              >
                <div>
                  <p className="font-semibold text-[#334155]">
                    Recharge 充值帳戶
                  </p>
                  <p className="text-[#94a3b8] text-[10px]">添加可用餘額點數</p>
                </div>
                <ChevronRight size={16} className="text-[#94a3b8]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
DashboardOverview.displayName = 'DashboardOverview' // -----------------------------<< Component >>-----------------------------

const timelineItemsArO = [
  {
    id: 'deployed',
    title: 'Instance deployed 實例已部署',
    time: '22 Dec, 7:30 PM',
    color: 'bg-[#10b981]',
  },
  {
    id: 'config',
    title: 'Configuration updated 配置已更新',
    time: '21 Dec, 6:11 PM',
    color: 'bg-[#ef4444]',
  },
  {
    id: 'snapshot',
    title: 'Snapshot created 已建立快照',
    time: '21 Dec, 9:43 PM',
    color: 'bg-[#3b82f6]',
  },
  {
    id: 'billing',
    title: 'Billing renewed for web-hk-01 已續費',
    time: '20 Dec, 2:20 AM',
    color: 'bg-[#f59e0b]',
  },
]
