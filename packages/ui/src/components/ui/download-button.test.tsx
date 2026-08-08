import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DownloadButton } from "./download-button"

describe("DownloadButton", () => {
  it("渲染按钮与默认文案", () => {
    render(<DownloadButton>下载文件</DownloadButton>)
    const btn = screen.getByRole("button", { name: "下载" })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute("data-slot", "download-button")
    expect(screen.getByText("下载文件")).toBeInTheDocument()
  })

  it("tooltip 属性透传 + aria-label 兜底", () => {
    render(<DownloadButton tooltip="导出报告">导出</DownloadButton>)
    const btn = screen.getByRole("button", { name: "导出报告" })
    expect(btn).toHaveAttribute("data-tooltip", "导出报告")
    expect(btn).toHaveAttribute("aria-label", "导出报告")
  })

  it("hover 后 text 上滑 / icon 滑入（group-hover 类）", async () => {
    render(<DownloadButton>下载</DownloadButton>)
    const btn = screen.getByRole("button")
    const text = btn.querySelector('[data-slot="dl-text"]')
    const icon = btn.querySelector('[data-slot="dl-icon"]')
    expect(text?.className).toContain("group-hover:-top-full")
    expect(icon?.className).toContain("group-hover:top-0")
    // hover 触发
    await userEvent.hover(btn)
    expect(text?.className).toContain("group-hover:-top-full")
  })

  it("disabled 禁用", () => {
    render(<DownloadButton disabled>下载</DownloadButton>)
    const btn = screen.getByRole("button")
    expect(btn).toBeDisabled()
    expect(btn.className).toContain("data-disabled:opacity-50")
  })
})
