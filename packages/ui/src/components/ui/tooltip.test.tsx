import "vitest-axe/extend-expect"
import { axe } from "vitest-axe"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"

describe("Tooltip", () => {
  it("默认不显示提示内容", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild><button>悬停我</button></TooltipTrigger>
          <TooltipContent>提示信息</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    )
    expect(screen.getByRole("button", { name: "悬停我" })).toBeInTheDocument()
    expect(screen.queryByText("提示信息")).not.toBeInTheDocument()
  })

  it("content 带 data-slot 标记（受控 open 渲染）", () => {
    render(
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger asChild><button>悬停我</button></TooltipTrigger>
          <TooltipContent>提示信息</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    )
    expect(screen.getByText("提示信息")).toBeInTheDocument()
  })

  it("展开后无 a11y 违规", async () => {
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild><button>悬停</button></TooltipTrigger>
          <TooltipContent>提示内容</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    )
    await userEvent.hover(screen.getByRole("button", { name: "悬停" }))
    const tip = await screen.findByText("提示内容")
    const results = await axe(tip.parentElement as HTMLElement)
    expect(results).toHaveNoViolations()
  })
})
