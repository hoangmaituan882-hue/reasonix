import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Separator } from "./separator"

describe("Separator", () => {
  it("渲染水平分隔线（默认）", () => {
    render(<Separator />)
    const sep = document.querySelector('[data-slot="separator"]')
    expect(sep).not.toBeNull()
    expect(sep).toHaveAttribute("data-orientation", "horizontal")
  })

  it("垂直方向", () => {
    render(<Separator orientation="vertical" />)
    expect(document.querySelector('[data-slot="separator"]')).toHaveAttribute("data-orientation", "vertical")
  })

  it("非装饰性时是语义分隔", () => {
    render(<Separator decorative={false} />)
    expect(screen.getByRole("separator")).toBeInTheDocument()
  })
})
