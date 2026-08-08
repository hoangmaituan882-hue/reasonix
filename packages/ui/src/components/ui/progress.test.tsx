import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Progress } from "./progress"

describe("Progress", () => {
  it("渲染进度条（role=progressbar）", () => {
    render(<Progress value={40} aria-label="进度" />)
    expect(screen.getByRole("progressbar", { name: "进度" })).toBeInTheDocument()
  })

  it("显示进度值", () => {
    render(<Progress value={60} aria-label="进度" />)
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "60")
  })

  it("无值时不显示进度", () => {
    render(<Progress aria-label="不确定进度" />)
    const bar = screen.getByRole("progressbar")
    expect(bar).not.toHaveAttribute("aria-valuenow")
  })
})
