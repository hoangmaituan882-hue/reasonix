import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel } from "./carousel"

// mock useEmblaCarousel：返回可控的 ref + api
const scrollPrev = vi.fn()
const scrollNext = vi.fn()
const canScrollPrev = vi.fn(() => true)
const canScrollNext = vi.fn(() => true)

vi.mock("embla-carousel-react", () => ({
  default: vi.fn(() => [
    (node: HTMLElement | null) => { if (node) (node as HTMLElement).dataset.emblaRef = "1" },
    {
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
      on: vi.fn((event: string, cb: () => void) => { if (event === "select" || event === "reInit" || event === "init") cb() }),
      off: vi.fn(),
    },
  ]),
}))

describe("Carousel", () => {
  beforeEach(() => {
    scrollPrev.mockClear()
    scrollNext.mockClear()
  })

  it("渲染轮播内容与项", () => {
    render(
      <Carousel aria-label="示例轮播">
        <CarouselContent>
          <CarouselItem>项1</CarouselItem>
          <CarouselItem>项2</CarouselItem>
        </CarouselContent>
      </Carousel>,
    )
    expect(screen.getByText("项1")).toBeInTheDocument()
    expect(screen.getByText("项2")).toBeInTheDocument()
  })

  it("渲染 Prev/Next 按钮", () => {
    render(
      <Carousel>
        <CarouselContent><CarouselItem>项</CarouselItem></CarouselContent>
        <CarouselPrevious aria-label="上一张" />
        <CarouselNext aria-label="下一张" />
      </Carousel>,
    )
    expect(screen.getByRole("button", { name: "上一张" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "下一张" })).toBeInTheDocument()
  })

  it("点击 Next 调用 scrollNext", async () => {
    render(
      <Carousel>
        <CarouselContent><CarouselItem>项</CarouselItem></CarouselContent>
        <CarouselNext aria-label="下一张" />
      </Carousel>,
    )
    await screen.getByRole("button", { name: "下一张" }).click()
    expect(scrollNext).toHaveBeenCalled()
  })

  it("键盘 ArrowLeft 调用 scrollPrev", () => {
    render(
      <Carousel aria-label="键盘轮播">
        <CarouselContent><CarouselItem>项</CarouselItem></CarouselContent>
      </Carousel>,
    )
    const container = screen.getByLabelText("键盘轮播")
    fireEvent.keyDown(container, { key: "ArrowLeft" })
    expect(scrollPrev).toHaveBeenCalled()
  })

  it("useCarousel hook 返回 api", () => {
    let captured: ReturnType<typeof useCarousel> | null = null
    function Probe() {
      captured = useCarousel()
      return null
    }
    render(
      <Carousel>
        <CarouselContent><CarouselItem>项</CarouselItem></CarouselContent>
        <Probe />
      </Carousel>,
    )
    expect(captured).not.toBeNull()
    expect(captured?.api).toBeDefined()
  })
})
