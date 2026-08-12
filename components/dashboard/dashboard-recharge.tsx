'use client'

import { AlertTriangle } from 'lucide-react'
import { useState } from 'react'

export function DashboardRecharge() {
  const [rechargeMethodS, setRechargeMethodS] = useState<string>('usdt')
  const [usdtAmountS, setUsdtAmountS] = useState<string>('50')
  const [customAmountS, setCustomAmountS] = useState<string>('')

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-bold text-2xl text-[#0f172a]">Recharge 充值</h2>
        <p className="mt-1 text-[#64748b] text-xs">
          Submit a top-up request and wait for balance confirmation.
          提交充值申請，請等待餘額確認入帳。
        </p>
      </div>

      <div className="grid grid-cols-3 items-start gap-6">
        {/* Form */}
        <div className="col-span-2 space-y-6 rounded-2xl border border-[#e2e8f0] bg-white p-6">
          {/* Notice */}
          <div className="flex items-start gap-2 rounded-xl border border-[#fef3c7] bg-[#fffbeb] p-3 text-[#b45309] text-xs">
            <AlertTriangle size={16} className="mt-0.5 shrink-0" />
            <p>
              Notice
              提示：請確保充值金額的格式、提交申請後請按提示轉帳並完成驗證，金額確認後將匯入入帳。
            </p>
          </div>

          {/* Current Balance */}
          <div className="flex items-center justify-between rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-4 text-xs">
            <div>
              <p className="font-medium text-[#94a3b8]">
                Current Balance 目前餘額
              </p>
              <p className="mt-1 font-bold text-2xl text-[#0f172a]">$68.45</p>
            </div>
            <p className="max-w-[200px] text-right text-[#64748b]">
              Available balance for VPS billing. 可用於 VPS 計費的帳戶餘額。
            </p>
          </div>

          {/* Method Selector */}
          <div className="space-y-3">
            <p className="font-bold text-[#334155] text-xs">
              Recharge Method 充值方式
            </p>
            <div className="grid grid-cols-3 gap-3">
              {rechargeMethodsArO.map((method) => (
                <label
                  key={method.id}
                  htmlFor={`recharge-method-${method.id}`}
                  className={`flex cursor-pointer flex-col justify-between rounded-xl border p-4 transition ${
                    rechargeMethodS === method.id
                      ? 'border-[#2563eb] bg-[#f8faff] ring-1 ring-[#2563eb]'
                      : 'border-[#e2e8f0] hover:bg-[#f8fafc]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-bold text-[#0f172a] text-xs">
                      {method.title}{' '}
                      <span className="block font-normal text-[#64748b] text-[10px]">
                        {method.subtitle}
                      </span>
                    </span>
                    <input
                      type="radio"
                      id={`recharge-method-${method.id}`}
                      name="recharge-method"
                      checked={rechargeMethodS === method.id}
                      onChange={() => setRechargeMethodS(method.id)}
                      className="mt-1"
                    />
                  </div>
                  <p className="mt-3 text-[#94a3b8] text-[10px]">
                    {method.desc}
                  </p>
                </label>
              ))}
            </div>
          </div>

          {/* USDT Fields */}
          {rechargeMethodS === 'usdt' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="font-bold text-[#334155] text-xs">
                  Recharge Amount 充值金額
                </p>
                <div className="flex flex-wrap gap-2">
                  {['10', '25', '50', '100', '200'].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setUsdtAmountS(amt)
                        setCustomAmountS('')
                      }}
                      className={`rounded-lg border px-4 py-2 font-medium text-xs transition ${
                        usdtAmountS === amt && !customAmountS
                          ? 'border-[#2563eb] bg-[#eff6ff] font-bold text-[#2563eb]'
                          : 'border-[#e2e8f0] hover:bg-[#f1f5f9]'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                  <input
                    type="number"
                    placeholder="Custom 自定義"
                    value={customAmountS}
                    onChange={(e) => {
                      setCustomAmountS(e.target.value)
                      setUsdtAmountS('')
                    }}
                    className={`w-28 rounded-lg border px-3 py-1.5 text-xs ${
                      customAmountS
                        ? 'border-[#2563eb] ring-1 ring-[#2563eb]'
                        : 'border-[#e2e8f0]'
                    }`}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Redeem Code Fields */}
          {rechargeMethodS === 'redeem' && (
            <div className="space-y-3">
              <label
                htmlFor="redeem-code-input"
                className="font-bold text-[#334155] text-xs"
              >
                Redeem Code 兌換碼
              </label>
              <div className="flex gap-2">
                <input
                  id="redeem-code-input"
                  type="text"
                  placeholder="Enter redeem code / 輸入兌換碼"
                  className="flex-1 rounded-lg border border-[#e2e8f0] p-2 text-xs focus:border-[#2563eb] focus:outline-none"
                />
                <button
                  type="button"
                  className="rounded-lg border border-[#bfdbfe] bg-[#eff6ff] px-4 py-2 font-bold text-[#2563eb] text-xs hover:bg-[#dbeafe]"
                >
                  Apply Code / 套用兌換碼
                </button>
              </div>
            </div>
          )}

          {/* Partner Channel Fields */}
          {rechargeMethodS === 'partner' && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="channel-name"
                  className="font-bold text-[#334155] text-xs"
                >
                  Channel Name 通道名稱
                </label>
                <select
                  id="channel-name"
                  className="w-full rounded-lg border border-[#e2e8f0] p-2 text-xs"
                >
                  <option>Assigned Partner / 指定合作通道</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="reference-id"
                  className="font-bold text-[#334155] text-xs"
                >
                  Reference ID 參考編號
                </label>
                <input
                  id="reference-id"
                  type="text"
                  placeholder="Enter reference ID / 輸入參考編號"
                  className="w-full rounded-lg border border-[#e2e8f0] p-2 text-xs"
                />
              </div>
            </div>
          )}

          {/* Notes */}
          <div className="space-y-2">
            <label
              htmlFor="request-note"
              className="font-bold text-[#334155] text-xs"
            >
              Request Note (Optional) 申請備註 (選填)
            </label>
            <textarea
              id="request-note"
              placeholder="Enter any additional information / 輸入任何備註資訊"
              className="h-20 w-full resize-none rounded-xl border border-[#e2e8f0] p-3 text-xs focus:border-[#2563eb] focus:outline-none"
            />
            <div className="text-right text-[#94a3b8] text-[10px]">0 / 200</div>
          </div>
        </div>

        {/* Summary Panel */}
        <div className="space-y-6 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
          <h3 className="border-[#f1f5f9] border-b pb-3 font-bold text-[#0f172a] text-sm">
            Recharge Summary 充值摘要
          </h3>

          <div className="space-y-3 text-[#64748b] text-xs">
            {rechargeMethodS === 'usdt' && (
              <>
                <div className="flex justify-between">
                  <span>Amount 金額</span>
                  <span className="font-bold text-[#0f172a]">
                    ${customAmountS || usdtAmountS || '0.00'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Recharge Method 充值方式</span>
                  <span className="font-semibold text-[#334155]">
                    USDT Transfer
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Arrival 預計入帳</span>
                  <span className="text-right text-[#334155]">
                    After confirmation
                    <br />
                    <span className="text-[#94a3b8] text-[10px]">
                      確認後入帳
                    </span>
                  </span>
                </div>
                <div className="flex items-center justify-between border-[#f1f5f9] border-t pt-3">
                  <span>Status 狀態</span>
                  <span className="rounded bg-[#fffbeb] px-2 py-0.5 font-bold text-[#d97706] text-[10px]">
                    Pending confirmation 等待確認
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-xl bg-[#2563eb] py-2.5 font-bold text-white text-xs transition hover:bg-[#1d4ed8]"
                >
                  Submit Recharge Request / 提交充值申請
                </button>
              </>
            )}
            {rechargeMethodS === 'redeem' && (
              <>
                <div className="flex justify-between">
                  <span>Recharge Method 充值方式</span>
                  <span className="font-semibold text-[#334155]">
                    Redeem Code
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Code Status 兌換狀態</span>
                  <span className="text-[#94a3b8]">
                    Waiting for code 等待輸入
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Amount 金額</span>
                  <span className="font-medium text-[#ef4444]">
                    Verify code first 請先驗證兌換碼
                  </span>
                </div>
                <div className="flex justify-between border-[#f1f5f9] border-t pt-3">
                  <span>Estimated Arrival 預計入帳</span>
                  <span className="text-[#334155]">
                    After code verification 驗證後入帳
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-xl bg-[#2563eb] py-2.5 font-bold text-white text-xs transition hover:bg-[#1d4ed8]"
                >
                  Apply Redeem Code / 套用兌換碼
                </button>
              </>
            )}
            {rechargeMethodS === 'partner' && (
              <>
                <div className="flex justify-between">
                  <span>Recharge Method 充值方式</span>
                  <span className="font-semibold text-[#334155]">
                    Partner Channel
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Channel Status 通道狀態</span>
                  <span className="text-[#94a3b8]">
                    Waiting for submission 等待提交
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Amount 金額</span>
                  <span className="font-medium text-[#d97706]">
                    To be confirmed 待確認
                  </span>
                </div>
                <div className="flex justify-between border-[#f1f5f9] border-t pt-3">
                  <span>Estimated Arrival 預計入帳</span>
                  <span className="text-[#334155]">
                    After manual confirmation 人工確認後入帳
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-xl bg-[#2563eb] py-2.5 font-bold text-white text-xs transition hover:bg-[#1d4ed8]"
                >
                  Submit Channel Request / 提交通道申請
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
DashboardRecharge.displayName = 'DashboardRecharge' // -----------------------------<< Component >>-----------------------------

const rechargeMethodsArO = [
  {
    id: 'usdt',
    title: 'USDT Transfer',
    subtitle: 'USDT 轉帳',
    desc: 'Transfer to the assigned wallet address. 轉帳至指定錢包地址。',
  },
  {
    id: 'redeem',
    title: 'Redeem Code',
    subtitle: '兌換碼',
    desc: 'Enter a valid code to add balance. 輸入有效兌換碼以加入金額。',
  },
  {
    id: 'partner',
    title: 'Partner Channel',
    subtitle: '合作渠道',
    desc: 'Complete top-up through assigned channel. 通過指定通道完成充值。',
  },
]
