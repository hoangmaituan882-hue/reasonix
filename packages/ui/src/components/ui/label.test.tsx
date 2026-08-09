import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Label } from "./label"

describe("Label", () => {
  it("渲染 label 且 data-slot 正确", () => {
    render(<Label htmlFor="email">邮箱</Label>)
    const label = screen.getByText("邮箱")
    expect(label).toHaveAttribute("data-slot", "label")
    expect(label).toHaveAttribute("for", "email")
  })

  it("className 透传", () => {
    render(<Label className="custom">标签</Label>)
    expect(screen.getByText("标签").className).toContain("custom")
  })
})
