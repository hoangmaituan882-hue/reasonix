import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Toaster } from "./sonner"

describe("Sonner Toaster", () => {
  it("渲染 Toaster 容器", () => {
    render(<Toaster />)
    // sonner 渲染 <section aria-label="Notifications">
    expect(screen.getByLabelText(/Notifications/)).toBeInTheDocument()
  })

  it("接受 theme + position props", () => {
    render(<Toaster theme="dark" position="top-right" />)
    expect(screen.getByLabelText(/Notifications/)).toBeInTheDocument()
  })
})
