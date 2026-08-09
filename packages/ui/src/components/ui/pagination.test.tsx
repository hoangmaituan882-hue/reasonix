import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./pagination"

describe("Pagination", () => {
  it("渲染分页导航 + 链接", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="/prev" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/page/1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="/next" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>,
    )
    expect(screen.getByRole("navigation")).not.toBeNull()
    expect(screen.getByText("1")).toHaveAttribute("href", "/page/1")
    expect(screen.getByRole("link", { name: /上一页|Go to previous page/ })).toHaveAttribute("href", "/prev")
    expect(screen.getByRole("link", { name: /下一页|Go to next page/ })).toHaveAttribute("href", "/next")
  })

  it("渲染省略号", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationEllipsis />
        </PaginationContent>
      </Pagination>,
    )
    expect(document.querySelector('[data-slot="pagination-ellipsis"]')).not.toBeNull()
  })
})
