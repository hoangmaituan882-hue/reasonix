import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Badge } from "./badge"

describe("Badge", () => {
  it("渲染文本", () => {
    render(<Badge>默认</Badge>)
    expect(screen.getByText("默认")).toBeInTheDocument()
  })

  it("默认变体 data-variant=default", () => {
    render(<Badge>徽章</Badge>)
    expect(screen.getByText("徽章")).toHaveAttribute("data-variant", "default")
  })

  it("outline 变体", () => {
    render(<Badge variant="outline">描边</Badge>)
    expect(screen.getByText("描边")).toHaveAttribute("data-variant", "outline")
  })

  it("destructive 变体", () => {
    render(<Badge variant="destructive">危险</Badge>)
    expect(screen.getByText("危险")).toHaveAttribute("data-variant", "destructive")
  })
})
