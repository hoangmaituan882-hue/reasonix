import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Toggle } from "./toggle"

describe("Toggle", () => {
  it("渲染按压开关（默认 off）", () => {
    render(<Toggle aria-label="粗体">B</Toggle>)
    const btn = screen.getByRole("button", { name: "粗体" })
    expect(btn).toHaveAttribute("data-slot", "toggle")
    expect(btn).toHaveAttribute("data-state", "off")
  })

  it("点击切换 on/off", async () => {
    render(<Toggle aria-label="斜体">I</Toggle>)
    const btn = screen.getByRole("button")
    await userEvent.click(btn)
    expect(btn).toHaveAttribute("data-state", "on")
    await userEvent.click(btn)
    expect(btn).toHaveAttribute("data-state", "off")
  })

  it("受控 pressed", () => {
    render(<Toggle pressed aria-label="下划线">U</Toggle>)
    expect(screen.getByRole("button")).toHaveAttribute("data-state", "on")
  })

  it("disabled", () => {
    render(<Toggle disabled aria-label="禁用">X</Toggle>)
    expect(screen.getByRole("button")).toBeDisabled()
  })
})
