"use client"

import * as React from "react"
import { Download } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * DownloadButton — 参考 Uiverse（satyamchaudharydev）下载按钮：
 * hover 时文字上滑出、下载图标从下方滑入，同时浮出 tooltip 气泡（::before 文字 + ::after 箭头）。
 * 全部颜色/圆角/动效映射到 --rx-* 令牌（跟随主题方向，无硬编码色值）。
 * 可访问性：tooltip 文本透传 aria-label 兜底（伪元素对屏幕阅读器不可见）。
 */
function DownloadButton({
  className,
  children,
  tooltip = "下载",
  disabled = false,
  ...props
}: React.ComponentProps<"button"> & {
  /** tooltip 文本（同时用作 aria-label） */
  tooltip?: string
  disabled?: boolean
}) {
  return (
    <button
      data-slot="download-button"
      data-tooltip={tooltip}
      aria-label={tooltip}
      disabled={disabled}
      className={cn(
        "group relative block h-[35px] w-[100px] rounded-[0.45em] text-center text-sm font-medium outline-none select-none transition-colors duration-[var(--rx-dur-base)] ease-[var(--rx-ease)] focus-visible:ring-3 focus-visible:ring-ring/50 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        "bg-primary text-primary-foreground hover:bg-primary/80",
        // tooltip 气泡（::before 文字）——transform/opacity 入场，120ms，无 bottom 动画
        "before:pointer-events-none before:absolute before:bottom-[calc(100%+18px)] before:left-1/2 before:-translate-x-1/2 before:translate-y-1.5 before:rounded-[0.25em] before:px-2 before:text-xs before:leading-[35px] before:content-[attr(data-tooltip)] before:whitespace-nowrap before:bg-[var(--rx-bg-elev)] before:text-[var(--rx-fg)] before:shadow-md before:opacity-0 before:invisible before:transition-[transform,opacity,visibility] before:duration-[var(--rx-dur-fast)] before:ease-[var(--rx-ease)] hover:before:translate-y-0 hover:before:opacity-100 hover:before:visible motion-reduce:before:transition-none",
        // tooltip 箭头（::after 三角，同气泡色）——同 transform/opacity 入场
        "after:pointer-events-none after:absolute after:bottom-[calc(100%+18px)] after:left-1/2 after:-translate-x-1/2 after:translate-y-1.5 after:border-x-[10px] after:border-t-[10px] after:border-x-transparent after:border-t-[var(--rx-bg-elev)] after:opacity-0 after:invisible after:transition-[transform,opacity,visibility] after:duration-[var(--rx-dur-fast)] after:ease-[var(--rx-ease)] hover:after:translate-y-0 hover:after:opacity-100 hover:after:visible motion-reduce:after:transition-none",
        className
      )}
      {...props}
    >
      {/* wrapper 裁剪层（对应原版 .button-wrapper）：保证 text/icon 滑动全程被裁在按钮内 */}
      <span
        data-slot="dl-wrapper"
        className="absolute inset-0 overflow-hidden rounded-[inherit]"
      >
        {/* 文字层：h-full + flex 居中，hover 整体上移并淡出（中心对称，无漂移） */}
        <span
          data-slot="dl-text"
          className="absolute inset-x-0 top-0 flex h-full items-center justify-center overflow-hidden transition-[top,opacity] duration-[var(--rx-dur-mid)] ease-[var(--rx-ease)] group-hover:top-[-100%] group-hover:opacity-0 motion-reduce:transition-none"
        >
          {children}
        </span>
        {/* 图标层：h-full + flex 居中，hover 从下方整体移入（中心落在按钮中心） */}
        <span
          data-slot="dl-icon"
          aria-hidden
          className="absolute inset-x-0 top-full flex h-full items-center justify-center overflow-hidden transition-[top] duration-[var(--rx-dur-mid)] ease-[var(--rx-ease)] group-hover:top-0 motion-reduce:transition-none"
        >
          <Download className="size-6" />
        </span>
      </span>
    </button>
  )
}

export { DownloadButton }
