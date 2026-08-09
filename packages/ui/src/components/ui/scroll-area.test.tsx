import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { ScrollArea } from "./scroll-area"

describe("ScrollArea", () => {
  it("渲染滚动区域 + 内容", () => {
    render(
      <ScrollArea className="h-40">
        <div>内容</div>
      </ScrollArea>,
    )
    expect(document.querySelector('[data-slot="scroll-area"]')).not.toBeNull()
    expect(screen.getByText("内容")).toBeInTheDocument()
  })
})
