import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "vitest-axe"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"

describe("Dialog", () => {
  it("打开后无 a11y 违规", async () => {
    render(
      <Dialog>
        <DialogTrigger asChild><button>打开</button></DialogTrigger>
        <DialogContent aria-label="示例弹窗">
          <DialogHeader><DialogTitle>标题</DialogTitle><DialogDescription>描述</DialogDescription></DialogHeader>
          <DialogFooter><button>确定</button></DialogFooter>
        </DialogContent>
      </Dialog>,
    )
    await userEvent.click(screen.getByRole("button", { name: "打开" }))
    const results = await axe(screen.getByRole("dialog"))
    expect(results).toHaveNoViolations()
  })
  it("trigger 点击打开弹窗", async () => {
    render(
      <Dialog>
        <DialogTrigger asChild><button>打开</button></DialogTrigger>
        <DialogContent aria-label="示例弹窗">
          <DialogHeader><DialogTitle>标题</DialogTitle><DialogDescription>描述</DialogDescription></DialogHeader>
          <DialogFooter><button>确定</button></DialogFooter>
        </DialogContent>
      </Dialog>,
    )
    await userEvent.click(screen.getByRole("button", { name: "打开" }))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByText("标题")).toBeInTheDocument()
  })

  it("ESC 关闭弹窗", async () => {
    render(
      <Dialog>
        <DialogTrigger asChild><button>打开</button></DialogTrigger>
        <DialogContent aria-label="可关弹窗">
          <DialogTitle>内容</DialogTitle>
        </DialogContent>
      </Dialog>,
    )
    await userEvent.click(screen.getByRole("button", { name: "打开" }))
    await userEvent.keyboard("{Escape}")
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  })

  it("关闭按钮可隐藏", async () => {
    render(
      <Dialog>
        <DialogTrigger asChild><button>打开</button></DialogTrigger>
        <DialogContent showCloseButton={false} aria-label="无关闭按钮">
          <DialogTitle>内容</DialogTitle>
        </DialogContent>
      </Dialog>,
    )
    await userEvent.click(screen.getByRole("button", { name: "打开" }))
    expect(screen.queryByRole("button", { name: /close/i })).not.toBeInTheDocument()
  })
})
