import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command"

describe("Command", () => {
  it("渲染输入框 + 命令项", () => {
    render(
      <Command>
        <CommandInput placeholder="搜索命令" />
        <CommandList>
          <CommandEmpty>无结果</CommandEmpty>
          <CommandGroup>
            <CommandItem>新建文件</CommandItem>
            <CommandItem>打开设置</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    )
    expect(screen.getByPlaceholderText("搜索命令")).toBeInTheDocument()
    expect(screen.getByText("新建文件")).toBeInTheDocument()
  })

  it("输入过滤后显示无结果", async () => {
    render(
      <Command>
        <CommandInput placeholder="搜索" />
        <CommandList>
          <CommandEmpty>无结果</CommandEmpty>
          <CommandItem>独一无二</CommandItem>
        </CommandList>
      </Command>,
    )
    await userEvent.type(screen.getByPlaceholderText("搜索"), "zzz")
    expect(screen.getByText("无结果")).toBeInTheDocument()
  })
})
