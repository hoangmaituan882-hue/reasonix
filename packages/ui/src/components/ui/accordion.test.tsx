import { describe, it, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion"

describe("Accordion", () => {
  it("渲染手风琴项", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="a"><AccordionTrigger>标题A</AccordionTrigger><AccordionContent>内容A</AccordionContent></AccordionItem>
      </Accordion>,
    )
    expect(screen.getByText("标题A")).toBeInTheDocument()
  })

  it("点击触发展开内容", async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="a"><AccordionTrigger>标题A</AccordionTrigger><AccordionContent>内容A</AccordionContent></AccordionItem>
      </Accordion>,
    )
    await userEvent.click(screen.getByRole("button", { name: /标题A/ }))
    expect(await screen.findByText("内容A")).toBeInTheDocument()
  })

  it("再次点击折叠", async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="a"><AccordionTrigger>标题A</AccordionTrigger><AccordionContent>内容A</AccordionContent></AccordionItem>
      </Accordion>,
    )
    const trigger = screen.getByRole("button", { name: /标题A/ })
    await userEvent.click(trigger)
    expect(await screen.findByText("内容A")).toBeInTheDocument()
    await userEvent.click(trigger)
    await waitFor(() => {
      expect(screen.queryByText("内容A")).not.toBeInTheDocument()
    })
  })
})
