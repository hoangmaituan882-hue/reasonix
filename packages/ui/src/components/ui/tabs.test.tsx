import "vitest-axe/extend-expect"
import { axe } from "vitest-axe"
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"

function TabsDemo() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList aria-label="示例标签">
        <TabsTrigger value="tab1">标签一</TabsTrigger>
        <TabsTrigger value="tab2">标签二</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">内容一</TabsContent>
      <TabsContent value="tab2">内容二</TabsContent>
    </Tabs>
  )
}

describe("Tabs", () => {
  it("默认激活 tab1，显示内容一", () => {
    render(<TabsDemo />)
    expect(screen.getByRole("tab", { name: "标签一" })).toHaveAttribute("data-state", "active")
    expect(screen.getByText("内容一")).toBeInTheDocument()
    expect(screen.queryByText("内容二")).not.toBeInTheDocument()
  })

  it("点击 tab2 切换激活与内容", async () => {
    render(<TabsDemo />)
    await userEvent.click(screen.getByRole("tab", { name: "标签二" }))
    expect(screen.getByRole("tab", { name: "标签二" })).toHaveAttribute("data-state", "active")
    expect(screen.getByText("内容二")).toBeInTheDocument()
    expect(screen.queryByText("内容一")).not.toBeInTheDocument()
  })

  it("受控 onValueChange 回调", async () => {
    const onValueChange = vi.fn()
    render(
      <Tabs value="tab1" onValueChange={onValueChange}>
        <TabsList>
          <TabsTrigger value="tab1">一</TabsTrigger>
          <TabsTrigger value="tab2">二</TabsTrigger>
        </TabsList>
      </Tabs>,
    )
    await userEvent.click(screen.getByRole("tab", { name: "二" }))
    expect(onValueChange).toHaveBeenCalledWith("tab2")
  })

  it("键盘方向键切换", async () => {
    render(<TabsDemo />)
    const tab1 = screen.getByRole("tab", { name: "标签一" })
    tab1.focus()
    await userEvent.keyboard("{ArrowRight}")
    expect(screen.getByRole("tab", { name: "标签二" })).toHaveFocus()
  })

  it("渲染无 a11y 违规", async () => {
    const { container } = render(
      <Tabs defaultValue="a">
        <TabsList><TabsTrigger value="a">标签A</TabsTrigger><TabsTrigger value="b">标签B</TabsTrigger></TabsList>
        <TabsContent value="a">内容A</TabsContent>
      </Tabs>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
