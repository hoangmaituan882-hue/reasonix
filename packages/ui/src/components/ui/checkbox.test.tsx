import "vitest-axe/extend-expect"
import { axe } from "vitest-axe"
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Checkbox } from "./checkbox"

describe("Checkbox", () => {
  it("渲染未选中复选框", () => {
    render(<Checkbox aria-label="同意" />)
    const cb = screen.getByRole("checkbox")
    expect(cb).not.toBeChecked()
  })

  it("受控 checked 状态", () => {
    render(<Checkbox checked aria-label="已选中" />)
    expect(screen.getByRole("checkbox")).toBeChecked()
  })

  it("点击触发 onCheckedChange", async () => {
    const onChange = vi.fn()
    render(<Checkbox onCheckedChange={onChange} aria-label="可点" />)
    await userEvent.click(screen.getByRole("checkbox"))
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it("disabled 不可交互", async () => {
    const onChange = vi.fn()
    render(<Checkbox disabled onCheckedChange={onChange} aria-label="禁用" />)
    const cb = screen.getByRole("checkbox")
    expect(cb).toBeDisabled()
    await userEvent.click(cb).catch(() => {})
    expect(onChange).not.toHaveBeenCalled()
  })

  it("渲染无 a11y 违规", async () => {
    const { container } = render(<Checkbox aria-label="勾选" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
