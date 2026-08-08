import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "./button"

describe("Button", () => {
  it("渲染文本与默认变体类", () => {
    render(<Button>主按钮</Button>)
    const btn = screen.getByRole("button", { name: "主按钮" })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute("data-variant", "default")
  })

  it("variant=outline 应用描边变体", () => {
    render(<Button variant="outline">描边</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-variant", "outline")
  })

  it("size=sm 应用小尺寸", () => {
    render(<Button size="sm">小</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("data-size", "sm")
  })

  it("点击触发 onClick", async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>点击</Button>)
    await userEvent.click(screen.getByRole("button"))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("disabled 时不可点击", async () => {
    const onClick = vi.fn()
    render(<Button disabled onClick={onClick}>禁用</Button>)
    const btn = screen.getByRole("button")
    expect(btn).toBeDisabled()
    await userEvent.click(btn).catch(() => {})
    expect(onClick).not.toHaveBeenCalled()
  })

  it("asChild 渲染自定义元素", () => {
    render(
      <Button asChild>
        <a href="/test">链接按钮</a>
      </Button>,
    )
    expect(screen.getByRole("link", { name: "链接按钮" })).toBeInTheDocument()
  })
})
