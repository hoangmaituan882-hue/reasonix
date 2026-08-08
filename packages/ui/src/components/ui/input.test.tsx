import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Input } from "./input"

describe("Input", () => {
  it("渲染带占位符的输入框", () => {
    render(<Input placeholder="请输入" />)
    expect(screen.getByPlaceholderText("请输入")).toBeInTheDocument()
  })

  it("渲染 defaultValue", () => {
    render(<Input defaultValue="hello" aria-label="测试输入" />)
    expect(screen.getByLabelText("测试输入")).toHaveValue("hello")
  })

  it("disabled 状态", () => {
    render(<Input disabled aria-label="禁用输入" />)
    expect(screen.getByLabelText("禁用输入")).toBeDisabled()
  })

  it("aria-invalid 错误态", () => {
    render(<Input aria-invalid aria-label="错误输入" />)
    const input = screen.getByLabelText("错误输入")
    expect(input).toHaveAttribute("aria-invalid", "true")
  })

  it("透传自定义 className", () => {
    render(<Input className="custom-input" aria-label="自定义" />)
    expect(screen.getByLabelText("自定义").className).toContain("custom-input")
  })
})
