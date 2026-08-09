import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card"

describe("HoverCard", () => {
  it("渲染触发器 + 内容", async () => {
    render(
      <HoverCard>
        <HoverCardTrigger asChild>
          <button>悬停我</button>
        </HoverCardTrigger>
        <HoverCardContent>卡片内容</HoverCardContent>
      </HoverCard>,
    )
    expect(screen.getByRole("button", { name: "悬停我" })).toBeInTheDocument()
    // 内容默认不渲染（portal 懒挂载）
    expect(screen.queryByText("卡片内容")).not.toBeInTheDocument()
  })
})
