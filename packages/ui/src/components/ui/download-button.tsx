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
        "bg-[var(--rx-accent)] text-[var(--rx-accent-fg)] hover:bg-[var(--rx-accent-strong)]",
        // tooltip 气泡（::before 文字）——hover: 作用于自身（含 ::before）
        "before:pointer-events-none before:absolute before:bottom-[calc(100%+28px)] before:left-1/2 before:-translate-x-1/2 before:rounded-[0.25em] before:px-2 before:text-xs before:leading-[35px] before:content-[attr(data-tooltip)] before:whitespace-nowrap before:bg-[var(--rx-bg-elev)] before:text-[var(--rx-fg)] before:shadow-md before:opacity-0 before:invisible before:transition-all before:duration-[var(--rx-dur-slow)] before:ease-[var(--rx-ease)] hover:before:bottom-[calc(100%+18px)] hover:before:opacity-100 hover:before:visible motion-reduce:before:transition-none",
        // tooltip 箭头（::after 三角，同气泡色）
        "after:pointer-events-none after:absolute after:bottom-[calc(100%+8px)] after:left-1/2 after:-translate-x-1/2 after:border-x-8 after:border-t-8 after:border-x-transparent after:border-t-[var(--rx-bg-elev)] after:opacity-0 after:invisible after:transition-all after:duration-[var(--rx-dur-slow)] after:ease-[var(--rx-ease)] hover:after:bottom-[calc(100%+18px)] hover:after:opacity-100 hover:after:visible motion-reduce:after:transition-none",
        className
      )}
      {...props}
    >
      {/* 文字层 */}
      <span
        data-slot="dl-text"
        className="absolute inset-0 flex items-center justify-center overflow-hidden transition-[top] duration-[var(--rx-dur-slow)] ease-[var(--rx-ease)] group-hover:-top-full motion-reduce:transition-none"
      >
        {children}
      </span>
      {/* 图标层：hover 时从下方滑入 */}
      <span
        data-slot="dl-icon"
        aria-hidden
        className="absolute inset-x-0 top-full flex items-center justify-center overflow-hidden transition-[top] duration-[var(--rx-dur-slow)] ease-[var(--rx-ease)] group-hover:top-0 motion-reduce:transition-none"
      >
        <Download className="size-6" />
      </span>
    </button>
  )
}

export { DownloadButton }
