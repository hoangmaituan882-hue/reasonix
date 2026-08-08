import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./sheet"

describe("Sheet", () => {
  it("trigger 点击打开侧边面板", async () => {
    render(
      <Sheet>
        <SheetTrigger asChild><button>打开面板</button></SheetTrigger>
        <SheetContent side="right" aria-label="右侧面板">
          <SheetHeader><SheetTitle>面板标题</SheetTitle><SheetDescription>面板描述</SheetDescription></SheetHeader>
        </SheetContent>
      </Sheet>,
    )
    await userEvent.click(screen.getByRole("button", { name: "打开面板" }))
    expect(screen.getByText("面板标题")).toBeInTheDocument()
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  it("side=left 应用左侧定位", async () => {
    render(
      <Sheet>
        <SheetTrigger asChild><button>打开</button></SheetTrigger>
        <SheetContent side="left" aria-label="左侧面板"><SheetTitle>左</SheetTitle></SheetContent>
      </Sheet>,
    )
    await userEvent.click(screen.getByRole("button", { name: "打开" }))
    const panel = screen.getByRole("dialog")
    expect(panel).toHaveAttribute("data-side", "left")
  })

  it("ESC 关闭面板", async () => {
    render(
      <Sheet>
        <SheetTrigger asChild><button>打开</button></SheetTrigger>
        <SheetContent aria-label="可关面板"><SheetTitle>内容</SheetTitle></SheetContent>
      </Sheet>,
    )
    await userEvent.click(screen.getByRole("button", { name: "打开" }))
    await userEvent.keyboard("{Escape}")
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })
})
