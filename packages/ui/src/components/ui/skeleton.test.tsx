import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import { Skeleton } from "./skeleton"

describe("Skeleton", () => {
  it("渲染骨架屏", () => {
    render(<Skeleton className="h-4 w-20" />)
    const sk = document.querySelector('[data-slot="skeleton"]')
    expect(sk).not.toBeNull()
    expect(sk?.className).toContain("animate-pulse")
  })
})
