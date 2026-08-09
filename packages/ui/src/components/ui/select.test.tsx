import "vitest-axe/extend-expect"
import { axe } from "vitest-axe"
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"

describe("Select", () => {
  it("trigger 显示占位符", () => {
    render(
      <Select>
        <SelectTrigger aria-label="模型选择"><SelectValue placeholder="选择模型" /></SelectTrigger>
        <SelectContent><SelectItem value="a">模型A</SelectItem></SelectContent>
      </Select>,
    )
    expect(screen.getByText("选择模型")).toBeInTheDocument()
  })

  it("渲染选项内容（受控展开时可见）", () => {
    render(
      <Select open>
        <SelectTrigger aria-label="模型选择"><SelectValue placeholder="选择模型" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="a">模型A</SelectItem>
          <SelectItem value="b">模型B</SelectItem>
        </SelectContent>
      </Select>,
    )
    expect(screen.getByRole("option", { name: "模型A" })).toBeInTheDocument()
  })

  it("受控 value 显示选中项", () => {
    render(
      <Select value="a" onValueChange={() => {}}>
        <SelectTrigger aria-label="模型选择"><SelectValue placeholder="选择模型" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="a">模型A</SelectItem>
          <SelectItem value="b">模型B</SelectItem>
        </SelectContent>
      </Select>,
    )
    // SelectValue 显示当前值
    expect(screen.getByText("模型A")).toBeInTheDocument()
  })

  it("受控展开时选择选项触发 onValueChange", async () => {
    const onValueChange = vi.fn()
    render(
      <Select open value="a" onValueChange={onValueChange}>
        <SelectTrigger aria-label="模型选择"><SelectValue placeholder="选择模型" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="a">模型A</SelectItem>
          <SelectItem value="b">模型B</SelectItem>
        </SelectContent>
      </Select>,
    )
    await userEvent.click(screen.getByRole("option", { name: "模型B" }))
    expect(onValueChange).toHaveBeenCalledWith("b")
  })

  it("打开后无 a11y 违规", async () => {
    const { container } = render(
      <Select open value="a">
        <SelectTrigger aria-label="选择模型"><SelectValue /></SelectTrigger>
        <SelectContent><SelectItem value="a">模型A</SelectItem></SelectContent>
      </Select>,
    )
    await screen.findAllByText("模型A")
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
