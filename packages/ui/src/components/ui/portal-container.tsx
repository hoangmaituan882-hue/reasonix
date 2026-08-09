"use client"

import { createContext, useContext } from "react"

/**
 * PortalContainerContext —— 将弹层（Dialog/Drawer/Sheet/Popover/Select 等）的
 * Portal 挂载点限定到指定容器（如移动预览的手机壳屏幕），而不是 document.body。
 *
 * 用法：
 *   <PortalContainerProvider container={screenRef.current}>
 *     <ComponentPreview />
 *   </PortalContainerProvider>
 *
 * 各弹层组件内部的 Portal 通过 usePortalContainer() 读取，若存在则作为
 * Radix/vaul Portal 的 container 传入。容器需提供定位上下文（transform /
 * contain: layout / position: relative），使 fixed 定位的后代相对容器而非视口。
 */
const PortalContainerContext = createContext<HTMLElement | null>(null)

export function PortalContainerProvider({
  container,
  children,
}: {
  container: HTMLElement | null
  children: React.ReactNode
}) {
  return (
    <PortalContainerContext.Provider value={container}>
      {children}
    </PortalContainerContext.Provider>
  )
}

export function usePortalContainer(): HTMLElement | null {
  return useContext(PortalContainerContext)
}
