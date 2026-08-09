import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./table"

describe("Table", () => {
  it("渲染表格结构 + caption", () => {
    render(
      <Table>
        <TableCaption>用户列表</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>姓名</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>张三</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    )
    expect(screen.getByRole("table")).not.toBeNull()
    expect(screen.getByText("用户列表")).toHaveAttribute("data-slot", "table-caption")
    expect(screen.getByText("姓名")).toHaveAttribute("data-slot", "table-head")
    expect(screen.getByText("张三")).toHaveAttribute("data-slot", "table-cell")
  })
})
