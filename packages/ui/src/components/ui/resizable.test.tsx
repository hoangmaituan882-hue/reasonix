import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./resizable"

describe("Resizable", () => {
  it("渲染面板组 + 手柄", () => {
    render(
      <ResizablePanelGroup className="h-40 w-80">
        <ResizablePanel defaultSize={50}>左</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>右</ResizablePanel>
      </ResizablePanelGroup>,
    )
    expect(screen.getByText("左")).toBeInTheDocument()
    expect(screen.getByText("右")).toBeInTheDocument()
    expect(document.querySelector('[data-slot="resizable-handle"]')).not.toBeNull()
  })
})
