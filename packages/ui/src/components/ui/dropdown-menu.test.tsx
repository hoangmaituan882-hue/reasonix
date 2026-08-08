import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "./dropdown-menu"

describe("DropdownMenu", () => {
  it("渲染 trigger", () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild><button>菜单</button></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>选项A</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )
    expect(screen.getByRole("button", { name: "菜单" })).toBeInTheDocument()
  })

  it("点击 trigger 展开菜单项", async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild><button>菜单</button></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>分组</DropdownMenuLabel>
          <DropdownMenuItem>选项A</DropdownMenuItem>
          <DropdownMenuItem>选项B</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>选项C</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )
    await userEvent.click(screen.getByRole("button", { name: "菜单" }))
    expect(await screen.findByRole("menuitem", { name: "选项A" })).toBeInTheDocument()
    expect(screen.getByRole("menuitem", { name: "选项B" })).toBeInTheDocument()
    expect(screen.getByRole("menuitem", { name: "选项C" })).toBeInTheDocument()
  })

  it("点击菜单项触发 onSelect", async () => {
    const onSelect = vi.fn()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild><button>菜单</button></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={onSelect}>选项A</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )
    await userEvent.click(screen.getByRole("button", { name: "菜单" }))
    await userEvent.click(await screen.findByRole("menuitem", { name: "选项A" }))
    expect(onSelect).toHaveBeenCalled()
  })
})
