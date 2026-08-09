import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ToggleGroup, ToggleGroupItem } from "./toggle-group"

describe("ToggleGroup", () => {
  it("单选：点击切换选中项", async () => {
    const onValueChange = vi.fn()
    render(
      <ToggleGroup type="single" onValueChange={onValueChange}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>,
    )
    // single 类型渲染 radiogroup + radio
    expect(screen.getByRole("radiogroup")).not.toBeNull()
    await userEvent.click(screen.getByRole("radio", { name: "B" }))
    expect(onValueChange).toHaveBeenCalledWith("b")
  })

  it("多选：累加选中", async () => {
    const onValueChange = vi.fn()
    render(
      <ToggleGroup type="multiple" onValueChange={onValueChange}>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>,
    )
    await userEvent.click(screen.getByRole("button", { name: "A" }))
    await userEvent.click(screen.getByRole("button", { name: "B" }))
    expect(onValueChange).toHaveBeenLastCalledWith(["a", "b"])
  })
})
