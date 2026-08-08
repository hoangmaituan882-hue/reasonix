import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from "./input-group"

describe("InputGroup", () => {
  it("渲染输入组（input + addon）", () => {
    render(
      <InputGroup>
        <InputGroupAddon>¥</InputGroupAddon>
        <InputGroupInput aria-label="金额" />
        <InputGroupText>.00</InputGroupText>
      </InputGroup>,
    )
    expect(screen.getByLabelText("金额")).toBeInTheDocument()
    expect(screen.getByText("¥")).toBeInTheDocument()
    expect(screen.getByText(".00")).toBeInTheDocument()
  })

  it("渲染输入组（input + button）", () => {
    render(
      <InputGroup>
        <InputGroupInput aria-label="搜索" />
        <InputGroupButton>搜索</InputGroupButton>
      </InputGroup>,
    )
    expect(screen.getByLabelText("搜索")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "搜索" })).toBeInTheDocument()
  })

  it("渲染 textarea 变体", () => {
    render(
      <InputGroup>
        <InputGroupTextarea aria-label="描述" />
      </InputGroup>,
    )
    expect(screen.getByLabelText("描述")).toBeInTheDocument()
  })

  it("data-slot 标记", () => {
    render(
      <InputGroup>
        <InputGroupInput aria-label="测试" />
      </InputGroup>,
    )
    expect(screen.getByLabelText("测试").dataset.slot).toBe("input-group-control")
  })

  it("透传 input 事件", () => {
    const onChange = vi.fn()
    render(
      <InputGroup>
        <InputGroupInput aria-label="输入" onChange={onChange} />
      </InputGroup>,
    )
    fireEvent.change(screen.getByLabelText("输入"), { target: { value: "x" } })
    expect(onChange).toHaveBeenCalled()
  })
})
