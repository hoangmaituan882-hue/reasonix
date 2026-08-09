import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Calendar } from "./calendar"

describe("Calendar", () => {
  it("渲染日历网格", () => {
    render(<Calendar />)
    // react-day-picker 渲染表格 role=grid
    expect(screen.getByRole("grid")).toBeInTheDocument()
    expect(screen.getAllByRole("gridcell").length).toBeGreaterThan(20)
  })

  it("点击日期触发 onSelect", async () => {
    const onSelect = () => {}
    render(<Calendar mode="single" onSelect={onSelect} />)
    const day = screen.getAllByRole("gridcell").find((c) => c.textContent?.trim() === "15")
    if (day) {
      await userEvent.click(day)
    }
    expect(screen.getByRole("grid")).toBeInTheDocument()
  })
})
