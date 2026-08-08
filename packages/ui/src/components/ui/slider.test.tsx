import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Slider } from "./slider"

describe("Slider", () => {
  it("渲染滑杆（role=slider）", () => {
    render(<Slider defaultValue={[50]} aria-label="音量" />)
    expect(screen.getByRole("slider")).toBeInTheDocument()
  })

  it("默认值正确", () => {
    render(<Slider defaultValue={[30]} aria-label="音量" />)
    const slider = screen.getByRole("slider")
    expect(slider).toHaveAttribute("aria-valuenow", "30")
  })

  it("受控值", () => {
    render(<Slider value={[75]} aria-label="音量" />)
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "75")
  })

  it("min/max 限制", () => {
    render(<Slider defaultValue={[50]} min={0} max={100} aria-label="音量" />)
    const slider = screen.getByRole("slider")
    expect(slider).toHaveAttribute("aria-valuemin", "0")
    expect(slider).toHaveAttribute("aria-valuemax", "100")
  })
})
