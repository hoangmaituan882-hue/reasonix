import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Switch } from "./switch"

describe("Switch", () => {
  it("渲染开关（role=switch）", () => {
    render(<Switch aria-label="深色模式" />)
    expect(screen.getByRole("switch", { name: "深色模式" })).toBeInTheDocument()
  })

  it("默认关闭", () => {
    render(<Switch aria-label="默认" />)
    expect(screen.getByRole("switch")).not.toBeChecked()
  })

  it("受控开启状态", () => {
    render(<Switch checked aria-label="已开" />)
    expect(screen.getByRole("switch")).toBeChecked()
  })

  it("点击切换触发 onCheckedChange", async () => {
    const onChange = vi.fn()
    render(<Switch onCheckedChange={onChange} aria-label="可切" />)
    await userEvent.click(screen.getByRole("switch"))
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it("disabled 不可交互", async () => {
    const onChange = vi.fn()
    render(<Switch disabled onCheckedChange={onChange} aria-label="禁用" />)
    const sw = screen.getByRole("switch")
    expect(sw).toBeDisabled()
    await userEvent.click(sw).catch(() => {})
    expect(onChange).not.toHaveBeenCalled()
  })
})
