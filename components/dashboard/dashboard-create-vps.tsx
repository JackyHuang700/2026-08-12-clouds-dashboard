'use client'

import { useState } from 'react'
import { setCurrentTab } from './use-dashboard-store'

export function DashboardCreateVps() {
  const [billingModeS, setBillingModeS] = useState<string>('pay-as-you-go')
  const [regionS, setRegionS] = useState<string>('hk')
  const [osS, setOsS] = useState<string>('ubuntu')
  const [planS, setPlanS] = useState<string>('basic')
  const [bandwidthS, setBandwidthS] = useState<string>('1mbps')
  const [diskS, setDiskS] = useState<string>('40gb')

  function getVpsPrice() {
    let base = planS === 'basic' ? 6.0 : planS === 'standard' ? 12.0 : 24.0
    if (bandwidthS === '5mbps') {
      base += 2.5
    }
    if (bandwidthS === '10mbps') {
      base += 5.0
    }
    if (bandwidthS === '20mbps') {
      base += 9.5
    }
    if (diskS === '60gb') {
      base += 1.2
    }
    if (diskS === '80gb') {
      base += 2.4
    }
    if (diskS === '100gb') {
      base += 3.6
    }
    return base.toFixed(2)
  }

  const onDeployClick = () => {
    alert('Deploying instance successful!')
    setCurrentTab('products')
  }

  return (
    <div className="space-y-6">
      <button
        type="button"
        onClick={() => setCurrentTab('products')}
        className="flex items-center gap-1 font-semibold text-[#2563eb] text-xs hover:underline"
      >
        ← Back to Products 返回產品列表
      </button>

      <div>
        <h2 className="font-bold text-2xl text-[#0f172a]">
          Create Instance 創建實例
        </h2>
        <p className="mt-1 text-[#64748b] text-xs">
          Configure and deploy your infrastructure in minutes.
          只需幾分鐘即可配置並部署您的基礎架構。
        </p>
      </div>

      <div className="grid grid-cols-3 items-start gap-6">
        {/* Configuration Form */}
        <div className="col-span-2 space-y-6 rounded-2xl border border-[#e2e8f0] bg-white p-6">
          {/* Billing Mode */}
          <div className="space-y-3">
            <p className="font-bold text-[#334155] text-xs">
              Billing Mode 計費方式
            </p>
            <div className="grid grid-cols-2 gap-4">
              <label
                htmlFor="billing-mode-pay-as-you-go"
                className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                  billingModeS === 'pay-as-you-go'
                    ? 'border-[#2563eb] bg-[#f8faff]'
                    : 'border-[#e2e8f0]'
                }`}
              >
                <div>
                  <p className="font-bold text-[#0f172a] text-xs">
                    Pay-as-you-go 按量計費
                  </p>
                  <p className="mt-1 text-[#94a3b8] text-[10px]">
                    Billed hourly 按小時等比例計費
                  </p>
                </div>
                <input
                  type="radio"
                  id="billing-mode-pay-as-you-go"
                  name="billing-mode"
                  checked={billingModeS === 'pay-as-you-go'}
                  onChange={() => setBillingModeS('pay-as-you-go')}
                />
              </label>
              <label
                htmlFor="billing-mode-subscription"
                className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 opacity-60 transition ${
                  billingModeS === 'subscription'
                    ? 'border-[#2563eb] bg-[#f8faff]'
                    : 'border-[#e2e8f0]'
                }`}
              >
                <div>
                  <p className="font-bold text-[#0f172a] text-xs">
                    Monthly Subscription 月付訂閱
                  </p>
                  <p className="mt-1 text-[#10b981] text-[10px]">
                    Save up to 20% 最高可省 20%
                  </p>
                </div>
                <input
                  type="radio"
                  id="billing-mode-subscription"
                  name="billing-mode"
                  checked={billingModeS === 'subscription'}
                  onChange={() => setBillingModeS('subscription')}
                />
              </label>
            </div>
          </div>

          {/* Region */}
          <div className="space-y-3">
            <p className="font-bold text-[#334155] text-xs">Region 地區</p>
            <div className="grid grid-cols-5 gap-2 text-center">
              {regionOptionsArO.map((reg) => (
                <button
                  key={reg.id}
                  type="button"
                  onClick={() => setRegionS(reg.id)}
                  className={`cursor-pointer rounded-xl border p-3 text-xs transition ${
                    regionS === reg.id
                      ? 'border-[#2563eb] bg-[#f8faff] font-bold text-[#2563eb]'
                      : 'border-[#e2e8f0]'
                  }`}
                >
                  <p className="truncate font-semibold">{reg.name}</p>
                  <p className="mt-0.5 text-[#94a3b8] text-[10px]">{reg.cn}</p>
                </button>
              ))}
            </div>
          </div>

          {/* OS */}
          <div className="space-y-3">
            <p className="font-bold text-[#334155] text-xs">
              Image / OS 鏡像 / 操作系統
            </p>
            <div className="grid grid-cols-4 gap-3">
              {osOptionsArO.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setOsS(o.id)}
                  className={`cursor-pointer rounded-xl border p-3 text-left text-xs transition ${
                    osS === o.id
                      ? 'border-[#2563eb] bg-[#f8faff] font-bold text-[#2563eb]'
                      : 'border-[#e2e8f0]'
                  }`}
                >
                  <p className="font-semibold">{o.name}</p>
                  <p className="mt-0.5 text-[#94a3b8] text-[10px]">{o.ver}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Plan */}
          <div className="space-y-3">
            <p className="font-bold text-[#334155] text-xs">
              Instance Plan 實例規格
            </p>
            <div className="grid grid-cols-3 gap-3">
              {planOptionsArO.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPlanS(p.id)}
                  className={`cursor-pointer rounded-xl border p-3 text-left text-xs transition ${
                    planS === p.id
                      ? 'border-[#2563eb] bg-[#f8faff] font-bold text-[#2563eb]'
                      : 'border-[#e2e8f0]'
                  }`}
                >
                  <p className="font-bold">{p.name}</p>
                  <p className="mt-0.5 text-[#475569] text-[10px]">{p.spec}</p>
                  <p className="mt-2 text-[#94a3b8] text-[10px]">{p.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Bandwidth */}
          <div className="space-y-2">
            <p className="font-bold text-[#334155] text-xs">Bandwidth 頻寬</p>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              {bandwidthOptionsArO.map((bw) => (
                <button
                  key={bw.id}
                  type="button"
                  onClick={() => setBandwidthS(bw.id)}
                  className={`rounded-lg border p-2 ${
                    bandwidthS === bw.id
                      ? 'border-[#2563eb] bg-[#f8faff] font-bold text-[#2563eb]'
                      : 'border-[#e2e8f0]'
                  }`}
                >
                  {bw.label}
                  <span
                    className={`block text-[9px] ${bw.included ? 'text-[#94a3b8]' : 'text-[#10b981]'}`}
                  >
                    {bw.price}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* System Disk */}
          <div className="space-y-2">
            <p className="font-bold text-[#334155] text-xs">
              System Disk 系統盤
            </p>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              {diskOptionsArO.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDiskS(d.id)}
                  className={`rounded-lg border p-2 ${
                    diskS === d.id
                      ? 'border-[#2563eb] bg-[#f8faff] font-bold text-[#2563eb]'
                      : 'border-[#e2e8f0]'
                  }`}
                >
                  {d.label}
                  <span
                    className={`block text-[9px] ${d.included ? 'text-[#94a3b8]' : 'text-[#10b981]'}`}
                  >
                    {d.price}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Hostname */}
          <div className="space-y-2">
            <label
              htmlFor="hostname"
              className="font-bold text-[#334155] text-xs"
            >
              Hostname 主機名
            </label>
            <input
              id="hostname"
              type="text"
              defaultValue="gridnix-instance-01"
              className="w-full rounded-lg border border-[#e2e8f0] p-2 text-xs"
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6 rounded-2xl border border-[#e2e8f0] bg-white p-6 text-xs shadow-sm">
          <h3 className="border-[#f1f5f9] border-b pb-3 font-bold text-[#0f172a] text-sm">
            Order Summary 訂單摘要
          </h3>

          <div className="space-y-4 text-[#64748b]">
            <div className="flex justify-between">
              <span>Region 地區</span>
              <span className="font-bold text-[#334155] uppercase">
                {regionS}
              </span>
            </div>
            <div className="flex justify-between">
              <span>OS / 鏡像系統</span>
              <span className="font-bold text-[#334155] uppercase">{osS}</span>
            </div>
            <div className="flex justify-between">
              <span>Plan 規格方案</span>
              <span className="font-bold text-[#334155] uppercase">
                {planS}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Bandwidth 頻寬</span>
              <span className="font-bold text-[#334155] uppercase">
                {bandwidthS}
              </span>
            </div>
            <div className="flex justify-between">
              <span>System Disk 系統盤</span>
              <span className="font-bold text-[#334155] uppercase">
                {diskS}
              </span>
            </div>
            <div className="flex items-baseline justify-between border-[#f1f5f9] border-t pt-4">
              <span className="font-bold text-[#0f172a]">
                Estimated Monthly
              </span>
              <p className="font-bold text-2xl text-[#2563eb]">
                ${getVpsPrice()}{' '}
                <span className="font-normal text-[#64748b] text-[10px]">
                  / mo
                </span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onDeployClick}
            className="mt-4 w-full rounded-xl bg-[#2563eb] py-3 font-bold text-white text-xs shadow-sm transition hover:bg-[#1d4ed8]"
          >
            🚀 Deploy Now 立即部署
          </button>
        </div>
      </div>
    </div>
  )
}
DashboardCreateVps.displayName = 'DashboardCreateVps' // -----------------------------<< Component >>-----------------------------

const regionOptionsArO = [
  { id: 'hk', name: 'Hong Kong', cn: '香港 (HK)' },
  { id: 'tokyo', name: 'Tokyo', cn: '東京 (JP)' },
  { id: 'sg', name: 'Singapore', cn: '新加坡 (SG)' },
  { id: 'tpe', name: 'Taipei', cn: '台北 (TW)' },
  { id: 'seoul', name: 'Seoul', cn: '首爾 (KR)' },
]

const osOptionsArO = [
  { id: 'ubuntu', name: 'Ubuntu', ver: '22.04 LTS' },
  { id: 'debian', name: 'Debian', ver: '12' },
  { id: 'alma', name: 'AlmaLinux', ver: '9' },
  { id: 'windows', name: 'Windows', ver: '2022' },
]

const planOptionsArO = [
  {
    id: 'basic',
    name: 'Basic 基礎型',
    spec: '1 vCPU · 1 GB RAM',
    desc: '適合輕量工作負載',
  },
  {
    id: 'standard',
    name: 'Standard 標準型',
    spec: '2 vCPU · 2 GB RAM',
    desc: '適合一般網站應用',
  },
  {
    id: 'pro',
    name: 'Pro 高性能型',
    spec: '4 vCPU · 4 GB RAM',
    desc: '適合高負載應用程序',
  },
]

const bandwidthOptionsArO = [
  { id: '1mbps', label: '1 Mbps', price: 'Included 包含', included: true },
  { id: '5mbps', label: '5 Mbps', price: '+$2.50/mo', included: false },
  { id: '10mbps', label: '10 Mbps', price: '+$5.00/mo', included: false },
  { id: '20mbps', label: '20 Mbps', price: '+$9.50/mo', included: false },
]

const diskOptionsArO = [
  { id: '40gb', label: '40 GB', price: 'Included 包含', included: true },
  { id: '60gb', label: '60 GB', price: '+$1.20/mo', included: false },
  { id: '80gb', label: '80 GB', price: '+$2.40/mo', included: false },
  { id: '100gb', label: '100 GB', price: '+$3.60/mo', included: false },
]
