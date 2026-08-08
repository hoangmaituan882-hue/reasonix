"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Switch — 参考 Uiverse（satyamchaudharydev）开关结构：
 * 变量驱动尺寸 + 滑块绝对位移；pill 变体复刻太阳/月亮图案，
 * 但用色全部映射到 --rx-* 令牌（跟随主题方向，无硬编码色值）。
 * 默认变体保持 shadcn 原样。
 */
function Switch({
  className,
  size = "default",
  variant = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
  variant?: "default" | "pill"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      data-variant={variant}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        // 默认变体（shadcn 原样，保持测试兼容）
        variant === "default" &&
          "data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80",
        // pill 变体：Uiverse 复刻（satyamchaudharydev）——胶囊轨道 + 太阳/月亮滑块，用色走 --rx-* 令牌
        variant === "pill" &&
          "data-[size=default]:h-[2em] data-[size=default]:w-[3.5em] data-[size=sm]:h-[1.6em] data-[size=sm]:w-[2.8em] rounded-[30px] duration-[var(--rx-dur-slow)] ease-[var(--rx-ease)] data-unchecked:bg-[var(--rx-bg-soft)] data-checked:bg-[var(--rx-accent)]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full ring-0 transition-transform",
          // 默认变体（shadcn 原样）
          variant === "default" &&
            "bg-background group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground",
          // pill 变体：Uiverse 复刻——滑块太阳渐变（accent 系），选中变月亮（同色底 + 亮色月牙阴影）
          variant === "pill" &&
            "absolute top-1/2 -translate-y-1/2 size-[1.4em] rounded-[20px] bg-[linear-gradient(40deg,var(--rx-accent),var(--rx-accent-strong)_70%)] transition-[left,background-color,background-image,box-shadow] duration-[var(--rx-dur-slow)] ease-[var(--rx-ease)] group-data-[size=default]/switch:left-[0.3em] group-data-[size=default]/switch:data-checked:left-[calc(100%-1.7em)] group-data-[size=sm]/switch:left-[0.25em] group-data-[size=sm]/switch:size-[1.2em] group-data-[size=sm]/switch:data-checked:left-[calc(100%-1.45em)] data-checked:bg-none data-checked:bg-[var(--rx-accent)] data-checked:shadow-[inset_-3px_-2px_5px_-2px_var(--rx-accent-strong),inset_-10px_-4px_0_0_var(--rx-bg-elev)]"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
