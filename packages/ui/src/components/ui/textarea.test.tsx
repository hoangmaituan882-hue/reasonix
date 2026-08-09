import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Textarea } from "./textarea"

describe("Textarea", () => {
  it("渲染 textarea", () => {
    render(<Textarea placeholder="输入" />)
    const ta = screen.getByPlaceholderText("输入")
    expect(ta).toHaveAttribute("data-slot", "textarea")
  })

  it("受控值 + onChange", async () => {
    const onChange = vi.fn()
    render(<Textarea value="初始" onChange={onChange} />)
    await userEvent.type(screen.getByRole("textbox"), "X")
    expect(onChange).toHaveBeenCalled()
  })

  it("disabled", () => {
    render(<Textarea disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })
})
