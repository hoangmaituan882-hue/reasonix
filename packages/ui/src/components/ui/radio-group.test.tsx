import "vitest-axe/extend-expect"
import { axe } from "vitest-axe"
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { RadioGroup, RadioGroupItem } from "./radio-group"

describe("RadioGroup", () => {
  it("渲染单选组", () => {
    render(
      <RadioGroup aria-label="主题">
        <RadioGroupItem value="light" aria-label="浅色" />
        <RadioGroupItem value="dark" aria-label="深色" />
      </RadioGroup>,
    )
    expect(screen.getAllByRole("radio")).toHaveLength(2)
  })

  it("默认选中项", () => {
    render(
      <RadioGroup defaultValue="dark" aria-label="主题">
        <RadioGroupItem value="light" aria-label="浅色" />
        <RadioGroupItem value="dark" aria-label="深色" />
      </RadioGroup>,
    )
    expect(screen.getByRole("radio", { name: "深色" })).toBeChecked()
  })

  it("点击切换触发 onValueChange", async () => {
    const onValueChange = vi.fn()
    render(
      <RadioGroup onValueChange={onValueChange} aria-label="主题">
        <RadioGroupItem value="light" aria-label="浅色" />
        <RadioGroupItem value="dark" aria-label="深色" />
      </RadioGroup>,
    )
    await userEvent.click(screen.getByRole("radio", { name: "浅色" }))
    expect(onValueChange).toHaveBeenCalledWith("light")
  })

  it("渲染无 a11y 违规", async () => {
    const { container } = render(
      <RadioGroup aria-label="单选">
        <RadioGroupItem value="a" id="r1" /><label htmlFor="r1">A</label>
        <RadioGroupItem value="b" id="r2" /><label htmlFor="r2">B</label>
      </RadioGroup>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
