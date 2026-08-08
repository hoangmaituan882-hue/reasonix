import "@testing-library/jest-dom/vitest"
import * as axeMatchers from "vitest-axe/matchers"
import { expect } from "vitest"

expect.extend(axeMatchers)

// vitest-axe matcher 类型声明（expect.toHaveNoViolations）
declare module "vitest" {
  interface Assertion<T = any> {
    toHaveNoViolations(): void
  }
}

// MUI 模式：未预期的 console.error/warn 使测试失败（捕获组件错误提示）
import { afterEach, vi } from "vitest"
const origError = console.error
const origWarn = console.warn
afterEach(() => {
  console.error = origError
  console.warn = origWarn
  vi.restoreAllMocks()
})

// vaul（Drawer）依赖 matchMedia —— jsdom 不提供
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})

// radix Select/Tooltip 等依赖 scrollIntoView —— jsdom 不提供
Element.prototype.scrollIntoView = () => {}

// radix Tooltip 内容依赖 ResizeObserver —— jsdom 不提供
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver = ResizeObserverMock

