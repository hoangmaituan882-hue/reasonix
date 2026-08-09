import { describe, it, expect } from "vitest"
import "vitest-axe/extend-expect"
import { axe } from "vitest-axe"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

describe("Popover", () => {
  it("打开后无 a11y 违规", async () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <button>打开</button>
        </PopoverTrigger>
        <PopoverContent aria-label="设置弹层">
          <button>选项一</button>
        </PopoverContent>
      </Popover>,
    )
    await userEvent.click(screen.getByRole("button", { name: "打开" }))
    const content = await screen.findByText("选项一")
    const results = await axe(content.parentElement as HTMLElement)
    expect(results).toHaveNoViolations()
  })

  it("点击触发器打开内容", async () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <button>打开</button>
        </PopoverTrigger>
        <PopoverContent>弹层内容</PopoverContent>
      </Popover>,
    )
    expect(screen.queryByText("弹层内容")).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole("button", { name: "打开" }))
    expect(await screen.findByText("弹层内容")).toBeInTheDocument()
  })

  it("关闭后内容移除", async () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <button>打开</button>
        </PopoverTrigger>
        <PopoverContent>弹层内容</PopoverContent>
      </Popover>,
    )
    await userEvent.click(screen.getByRole("button"))
    await userEvent.keyboard("{Escape}")
    expect(screen.queryByText("弹层内容")).not.toBeInTheDocument()
  })
})
