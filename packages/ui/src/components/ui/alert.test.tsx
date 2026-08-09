import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Alert, AlertDescription, AlertTitle } from "./alert"

describe("Alert", () => {
  it("渲染 role=alert + 标题/描述", () => {
    render(
      <Alert>
        <AlertTitle>注意</AlertTitle>
        <AlertDescription>磁盘空间不足</AlertDescription>
      </Alert>,
    )
    const alert = screen.getByRole("alert")
    expect(alert).toHaveAttribute("data-slot", "alert")
    expect(screen.getByText("注意")).toHaveAttribute("data-slot", "alert-title")
    expect(screen.getByText("磁盘空间不足")).toHaveAttribute("data-slot", "alert-description")
  })

  it("destructive 变体", () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>错误</AlertTitle>
      </Alert>,
    )
    const alert = screen.getByRole("alert")
    expect(alert.className).toContain("text-destructive")
  })
})
