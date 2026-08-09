import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"

describe("Card", () => {
  it("渲染完整卡片结构", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>标题</CardTitle>
          <CardDescription>描述</CardDescription>
        </CardHeader>
        <CardContent>内容</CardContent>
        <CardFooter>底部</CardFooter>
      </Card>,
    )
    expect(document.querySelector('[data-slot="card"]')).not.toBeNull()
    expect(screen.getByText("标题")).toHaveAttribute("data-slot", "card-title")
    expect(screen.getByText("描述")).toHaveAttribute("data-slot", "card-description")
    expect(screen.getByText("内容")).toHaveAttribute("data-slot", "card-content")
    expect(screen.getByText("底部")).toHaveAttribute("data-slot", "card-footer")
  })
})
