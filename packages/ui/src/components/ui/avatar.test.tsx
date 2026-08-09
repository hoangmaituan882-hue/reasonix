import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

describe("Avatar", () => {
  it("渲染头像容器 + data-size", () => {
    render(<Avatar size="lg" />)
    const root = document.querySelector('[data-slot="avatar"]')
    expect(root).toHaveAttribute("data-size", "lg")
  })

  it("渲染 fallback 文字", () => {
    render(
      <Avatar>
        <AvatarFallback>RX</AvatarFallback>
      </Avatar>,
    )
    expect(screen.getByText("RX")).toBeInTheDocument()
  })

  it("图片未加载时显示 fallback（jsdom 无真实加载）", () => {
    render(
      <Avatar>
        <AvatarImage src="x.png" alt="头像" />
        <AvatarFallback>RX</AvatarFallback>
      </Avatar>,
    )
    // jsdom 无法真实加载图片，radix 回退到 fallback
    expect(screen.getByText("RX")).toBeInTheDocument()
  })
})
