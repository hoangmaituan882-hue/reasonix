import "vitest-axe/extend-expect"
import { axe } from "vitest-axe"
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer"

describe("Drawer", () => {
  it("trigger 点击打开底部抽屉", async () => {
    render(
      <Drawer>
        <DrawerTrigger asChild><button>打开抽屉</button></DrawerTrigger>
        <DrawerContent aria-label="示例抽屉">
          <DrawerHeader><DrawerTitle>抽屉标题</DrawerTitle><DrawerDescription>抽屉描述</DrawerDescription></DrawerHeader>
        </DrawerContent>
      </Drawer>,
    )
    await userEvent.click(screen.getByRole("button", { name: "打开抽屉" }))
    expect(screen.getByText("抽屉标题")).toBeInTheDocument()
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  it("ESC 关闭抽屉", async () => {
    render(
      <Drawer>
        <DrawerTrigger asChild><button>打开</button></DrawerTrigger>
        <DrawerContent aria-label="可关抽屉"><DrawerTitle>内容</DrawerTitle></DrawerContent>
      </Drawer>,
    )
    await userEvent.click(screen.getByRole("button", { name: "打开" }))
    await userEvent.keyboard("{Escape}")
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  it("打开后无 a11y 违规", async () => {
    render(
      <Drawer>
        <DrawerTrigger asChild><button>打开抽屉</button></DrawerTrigger>
        <DrawerContent aria-label="示例抽屉">
          <DrawerHeader><DrawerTitle>抽屉标题</DrawerTitle><DrawerDescription>抽屉描述</DrawerDescription></DrawerHeader>
        </DrawerContent>
      </Drawer>,
    )
    await userEvent.click(screen.getByRole("button", { name: "打开抽屉" }))
    const dlg = await screen.findByRole("dialog")
    const results = await axe(dlg)
    expect(results).toHaveNoViolations()
  })
})
