import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible"

describe("Collapsible", () => {
  it("默认不显示内容", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger asChild><button>展开</button></CollapsibleTrigger>
        <CollapsibleContent>折叠内容</CollapsibleContent>
      </Collapsible>,
    )
    expect(screen.queryByText("折叠内容")).not.toBeInTheDocument()
  })

  it("点击触发展开内容", async () => {
    render(
      <Collapsible>
        <CollapsibleTrigger asChild><button>展开</button></CollapsibleTrigger>
        <CollapsibleContent>折叠内容</CollapsibleContent>
      </Collapsible>,
    )
    await userEvent.click(screen.getByRole("button", { name: "展开" }))
    expect(await screen.findByText("折叠内容")).toBeInTheDocument()
  })

  it("受控 open 渲染内容", () => {
    render(
      <Collapsible open>
        <CollapsibleContent>已展开内容</CollapsibleContent>
      </Collapsible>,
    )
    expect(screen.getByText("已展开内容")).toBeInTheDocument()
  })
})
