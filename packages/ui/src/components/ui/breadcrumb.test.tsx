import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./breadcrumb"

describe("Breadcrumb", () => {
  it("渲染导航 + 项 + 链接 + 分隔符", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/home">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>当前</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    )
    expect(screen.getByRole("navigation")).not.toBeNull()
    expect(screen.getByText("首页")).toHaveAttribute("href", "/home")
    expect(screen.getByText("当前")).toHaveAttribute("aria-current", "page")
  })

  it("渲染省略号", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbEllipsis />
        </BreadcrumbList>
      </Breadcrumb>,
    )
    expect(document.querySelector('[data-slot="breadcrumb-ellipsis"]')).not.toBeNull()
  })
})
