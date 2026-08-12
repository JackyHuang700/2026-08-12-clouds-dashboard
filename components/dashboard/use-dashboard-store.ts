import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export type DashboardTab =
  | 'overview'
  | 'products'
  | 'billing'
  | 'recharge'
  | 'create-vps'

interface UseDashboardStore {
  currentTab: DashboardTab
}

export const useDashboardStore = create<UseDashboardStore>()(
  devtools(() => ({
    currentTab: 'overview' as DashboardTab,
  })),
)

export const setCurrentTab = (tab: DashboardTab) =>
  useDashboardStore.setState({ currentTab: tab })

export const setResetAllDataByUseDashboardStore = (
  params?: Partial<UseDashboardStore>,
) => useDashboardStore.setState({ currentTab: 'overview', ...params })
