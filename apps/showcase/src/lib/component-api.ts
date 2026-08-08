// API 表数据 —— 38 组件核心 props（手工精选，与源码一致）
export interface ApiProp {
  name: string
  optional?: boolean
  type: string
  desc: string
}

export interface ApiEntry {
  component: string
  props: ApiProp[]
}

export const COMPONENT_API: ApiEntry[] = [
  {
    component: 'Button',
    props: [
      { name: 'variant', optional: true, type: '"default" | "secondary" | "outline" | "ghost" | "destructive"', desc: '视觉变体' },
      { name: 'size', optional: true, type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"', desc: '尺寸档位' },
      { name: 'asChild', optional: true, type: 'boolean', desc: '作为子元素渲染（Slot）' },
      { name: 'className', optional: true, type: 'string', desc: '追加类名（twMerge 合并）' },
      { name: 'children', optional: true, type: 'React.ReactNode', desc: '按钮内容' },
    ],
  },
  {
    component: 'Input',
    props: [
      { name: 'type', optional: true, type: 'string', desc: '输入类型（text/password/file…）' },
      { name: 'placeholder', optional: true, type: 'string', desc: '占位提示' },
      { name: 'disabled', optional: true, type: 'boolean', desc: '禁用态' },
      { name: 'aria-invalid', optional: true, type: 'boolean', desc: '错误态样式' },
      { name: 'className', optional: true, type: 'string', desc: '追加类名' },
    ],
  },
  {
    component: 'Checkbox',
    props: [
      { name: 'checked', optional: true, type: 'boolean', desc: '选中状态（受控）' },
      { name: 'defaultChecked', optional: true, type: 'boolean', desc: '初始选中（非受控）' },
      { name: 'onCheckedChange', optional: true, type: '(checked: boolean) => void', desc: '切换回调' },
      { name: 'disabled', optional: true, type: 'boolean', desc: '禁用态' },
      { name: 'indeterminate', optional: true, type: 'boolean', desc: '半选态' },
    ],
  },
  {
    component: 'Switch',
    props: [
      { name: 'checked', optional: true, type: 'boolean', desc: '开合状态（受控）' },
      { name: 'onCheckedChange', optional: true, type: '(checked: boolean) => void', desc: '切换回调' },
      { name: 'disabled', optional: true, type: 'boolean', desc: '禁用态' },
      { name: 'size', optional: true, type: '"default" | "sm"', desc: '尺寸' },
    ],
  },
  {
    component: 'Tabs',
    props: [
      { name: 'defaultValue', optional: true, type: 'string', desc: '默认激活 tab（非受控）' },
      { name: 'value', optional: true, type: 'string', desc: '激活 tab（受控）' },
      { name: 'onValueChange', optional: true, type: '(value: string) => void', desc: '切换回调' },
      { name: 'orientation', optional: true, type: '"horizontal" | "vertical"', desc: '方向' },
    ],
  },
  {
    component: 'Dialog',
    props: [
      { name: 'open', optional: true, type: 'boolean', desc: '打开状态（受控）' },
      { name: 'onOpenChange', optional: true, type: '(open: boolean) => void', desc: '开关回调' },
      { name: 'showCloseButton', optional: true, type: 'boolean', desc: '显示关闭按钮（默认 true）' },
      { name: 'modal', optional: true, type: 'boolean', desc: '模态模式（默认 true）' },
    ],
  },
  {
    component: 'Sheet',
    props: [
      { name: 'side', optional: true, type: '"top" | "right" | "bottom" | "left"', desc: '面板方向（Context 回退）' },
      { name: 'open', optional: true, type: 'boolean', desc: '打开状态' },
      { name: 'onOpenChange', optional: true, type: '(open: boolean) => void', desc: '开关回调' },
      { name: 'showCloseButton', optional: true, type: 'boolean', desc: '显示关闭按钮' },
    ],
  },
  {
    component: 'Drawer',
    props: [
      { name: 'open', optional: true, type: 'boolean', desc: '打开状态（受控）' },
      { name: 'onOpenChange', optional: true, type: '(open: boolean) => void', desc: '开关回调' },
      { name: 'direction', optional: true, type: '"bottom" | "left" | "right" | "top"', desc: '抽屉方向（默认 bottom）' },
      { name: 'shouldScaleBackground', optional: true, type: 'boolean', desc: '背景缩放' },
    ],
  },
  {
    component: 'Select',
    props: [
      { name: 'value', optional: true, type: 'string', desc: '选中值（受控）' },
      { name: 'defaultValue', optional: true, type: 'string', desc: '初始选中' },
      { name: 'onValueChange', optional: true, type: '(value: string) => void', desc: '选中回调' },
      { name: 'open', optional: true, type: 'boolean', desc: '展开状态（受控）' },
      { name: 'size', optional: true, type: '"default" | "sm"', desc: '尺寸' },
    ],
  },
  {
    component: 'Tooltip',
    props: [
      { name: 'delayDuration', optional: true, type: 'number', desc: '显示延迟 ms（默认 0）' },
      { name: 'open', optional: true, type: 'boolean', desc: '显示状态（受控）' },
      { name: 'defaultOpen', optional: true, type: 'boolean', desc: '初始显示' },
    ],
  },
  {
    component: 'Badge',
    props: [
      { name: 'variant', optional: true, type: '"default" | "secondary" | "outline" | "destructive" | "success" | "warning"', desc: '视觉变体' },
      { name: 'className', optional: true, type: 'string', desc: '追加类名' },
    ],
  },
  {
    component: 'Card',
    props: [
      { name: 'size', optional: true, type: '"default" | "sm"', desc: '内边距档位' },
      { name: 'className', optional: true, type: 'string', desc: '追加类名' },
    ],
  },
  {
    component: 'Slider',
    props: [
      { name: 'value', optional: true, type: 'number[]', desc: '滑块值数组（多 thumb）' },
      { name: 'defaultValue', optional: true, type: 'number[]', desc: '初始值' },
      { name: 'onValueChange', optional: true, type: '(value: number[]) => void', desc: '值变化回调' },
      { name: 'min', optional: true, type: 'number', desc: '最小值' },
      { name: 'max', optional: true, type: 'number', desc: '最大值' },
      { name: 'step', optional: true, type: 'number', desc: '步长' },
    ],
  },
  {
    component: 'Progress',
    props: [
      { name: 'value', optional: true, type: 'number', desc: '进度值 0-100' },
      { name: 'max', optional: true, type: 'number', desc: '最大值（默认 100）' },
    ],
  },
  {
    component: 'Avatar',
    props: [
      { name: 'size', optional: true, type: '"sm" | "default" | "lg"', desc: '尺寸' },
      { name: 'fallback', optional: true, type: 'React.ReactNode', desc: '加载失败回退' },
    ],
  },
  {
    component: 'Textarea',
    props: [
      { name: 'placeholder', optional: true, type: 'string', desc: '占位提示' },
      { name: 'disabled', optional: true, type: 'boolean', desc: '禁用态' },
      { name: 'autoGrow', optional: true, type: 'boolean', desc: '内容自动高度（field-sizing）' },
    ],
  },
  {
    component: 'Toggle',
    props: [
      { name: 'variant', optional: true, type: '"default" | "outline"', desc: '视觉变体' },
      { name: 'size', optional: true, type: '"default" | "sm" | "lg"', desc: '尺寸' },
      { name: 'pressed', optional: true, type: 'boolean', desc: '按下状态（受控）' },
      { name: 'defaultPressed', optional: true, type: 'boolean', desc: '初始按下' },
    ],
  },
  {
    component: 'Calendar',
    props: [
      { name: 'mode', optional: true, type: '"single" | "multiple" | "range"', desc: '选择模式' },
      { name: 'selected', optional: true, type: 'Date | Date[]', desc: '选中日期' },
      { name: 'onSelect', optional: true, type: '(date: Date | undefined) => void', desc: '选择回调' },
      { name: 'disabled', optional: true, type: 'Matcher | Matcher[]', desc: '禁用日期' },
      { name: 'numberOfMonths', optional: true, type: 'number', desc: '显示月数' },
    ],
  },
  {
    component: 'Carousel',
    props: [
      { name: 'opts', optional: true, type: 'EmblaOptionsType', desc: 'embla 轮播配置' },
      { name: 'setApi', optional: true, type: '(api: CarouselApi) => void', desc: '获取 API 实例' },
      { name: 'orientation', optional: true, type: '"horizontal" | "vertical"', desc: '方向' },
      { name: 'plugins', optional: true, type: 'EmblaPluginType[]', desc: 'embla 插件' },
    ],
  },
  {
    component: 'Command',
    props: [
      { name: 'open', optional: true, type: 'boolean', desc: '命令面板开关' },
      { name: 'onOpenChange', optional: true, type: '(open: boolean) => void', desc: '开关回调' },
      { name: 'placeholder', optional: true, type: 'string', desc: '搜索占位' },
      { name: 'items', optional: true, type: 'CommandItem[]', desc: '命令项数据' },
    ],
  },
  {
    component: 'Popover',
    props: [
      { name: 'open', optional: true, type: 'boolean', desc: '打开状态' },
      { name: 'onOpenChange', optional: true, type: '(open: boolean) => void', desc: '开关回调' },
    ],
  },
  {
    component: 'HoverCard',
    props: [
      { name: 'openDelay', optional: true, type: 'number', desc: '打开延迟 ms' },
      { name: 'closeDelay', optional: true, type: 'number', desc: '关闭延迟 ms' },
    ],
  },
  {
    component: 'Table',
    props: [
      { name: 'data', optional: true, type: 'T[]', desc: '表格数据' },
      { name: 'columns', optional: true, type: 'Column<T>[]', desc: '列定义' },
      { name: 'loading', optional: true, type: 'boolean', desc: '加载态' },
    ],
  },
  {
    component: 'Accordion',
    props: [
      { name: 'type', optional: true, type: '"single" | "multiple"', desc: '展开模式' },
      { name: 'collapsible', optional: true, type: 'boolean', desc: 'single 模式可折叠' },
      { name: 'defaultValue', optional: true, type: 'string | string[]', desc: '默认展开项' },
    ],
  },
  {
    component: 'Breadcrumb',
    props: [
      { name: 'items', optional: true, type: 'BreadcrumbItem[]', desc: '面包屑项' },
      { name: 'separator', optional: true, type: 'React.ReactNode', desc: '分隔符' },
    ],
  },
  {
    component: 'Pagination',
    props: [
      { name: 'page', optional: true, type: 'number', desc: '当前页' },
      { name: 'total', optional: true, type: 'number', desc: '总页数' },
      { name: 'onPageChange', optional: true, type: '(page: number) => void', desc: '翻页回调' },
    ],
  },
  {
    component: 'Skeleton',
    props: [
      { name: 'className', optional: true, type: 'string', desc: '尺寸/形状（w-* h-* rounded-*）' },
    ],
  },
  {
    component: 'ScrollArea',
    props: [
      { name: 'className', optional: true, type: 'string', desc: '容器类名' },
      { name: 'viewportRef', optional: true, type: 'React.Ref<HTMLDivElement>', desc: '视口引用' },
    ],
  },
  {
    component: 'Toaster',
    props: [
      { name: 'position', optional: true, type: '"top-right" | "top-center" | "bottom-right" | ...', desc: '通知位置' },
      { name: 'theme', optional: true, type: '"light" | "dark" | "system"', desc: '主题' },
      { name: 'richColors', optional: true, type: 'boolean', desc: '丰富配色' },
    ],
  },
]
