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
      { name: 'variant', optional: true, type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"', desc: '视觉变体' },
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
      { name: 'checked', optional: true, type: 'boolean | "indeterminate"', desc: '选中状态（受控，半选用 "indeterminate"）' },
      { name: 'defaultChecked', optional: true, type: 'boolean', desc: '初始选中（非受控）' },
      { name: 'onCheckedChange', optional: true, type: '(checked: boolean | "indeterminate") => void', desc: '切换回调' },
      { name: 'disabled', optional: true, type: 'boolean', desc: '禁用态' },
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
      { name: 'variant', optional: true, type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"', desc: '视觉变体' },
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
      { name: 'className', optional: true, type: 'string', desc: '追加类名' },
    ],
  },
    {
    component: 'Textarea',
    props: [
      { name: 'placeholder', optional: true, type: 'string', desc: '占位提示' },
      { name: 'disabled', optional: true, type: 'boolean', desc: '禁用态' },
      { name: 'className', optional: true, type: 'string', desc: '追加类名' },
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
      { name: 'shouldFilter', optional: true, type: 'boolean', desc: '是否启用内置过滤（cmdk）' },
      { name: 'filter', optional: true, type: '(value, search) => number', desc: '自定义过滤函数（cmdk）' },
      { name: 'loop', optional: true, type: 'boolean', desc: '键盘循环导航（cmdk）' },
      { name: 'className', optional: true, type: 'string', desc: '追加类名' },
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
      { name: 'className', optional: true, type: 'string', desc: '容器类名' },
      { name: 'children', optional: true, type: 'React.ReactNode', desc: '子组件组合（TableHeader/TableBody/TableRow/TableHead/TableCell）' },
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
      { name: 'className', optional: true, type: 'string', desc: '容器类名' },
      { name: 'children', optional: true, type: 'React.ReactNode', desc: '子组件组合（List/Item/Link/Page/Separator）' },
    ],
  },
    {
    component: 'Pagination',
    props: [
      { name: 'className', optional: true, type: 'string', desc: '容器类名' },
      { name: 'children', optional: true, type: 'React.ReactNode', desc: '子组件组合（Content/Item/Link/Previous/Next/Ellipsis）' },
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
      { name: 'type', optional: true, type: '"auto" | "always" | "scroll" | "hover"', desc: '滚动条显示模式（radix）' },
      { name: 'scrollHideDelay', optional: true, type: 'number', desc: '滚动条隐藏延迟 ms（radix）' },
      { name: 'className', optional: true, type: 'string', desc: '容器类名' },
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

  {
    component: 'Alert',
    props: [
      { name: 'variant', optional: true, type: '"default" | "destructive"', desc: '视觉变体' },
      { name: 'className', optional: true, type: 'string', desc: '追加类名' },
      { name: 'children', optional: true, type: 'React.ReactNode', desc: '内容（标题/描述/操作）' },
    ],
  },
  {
    component: 'Collapsible',
    props: [
      { name: 'open', optional: true, type: 'boolean', desc: '受控展开状态' },
      { name: 'onOpenChange', optional: true, type: '(open: boolean) => void', desc: '展开状态变化回调' },
      { name: 'defaultOpen', optional: true, type: 'boolean', desc: '初始展开' },
      { name: 'disabled', optional: true, type: 'boolean', desc: '禁用' },
    ],
  },
  {
    component: 'DownloadButton',
    props: [
      { name: 'tooltip', optional: true, type: 'string', desc: 'tooltip 文本（同时作 aria-label）' },
      { name: 'disabled', optional: true, type: 'boolean', desc: '禁用态' },
      { name: 'className', optional: true, type: 'string', desc: '追加类名' },
      { name: 'children', optional: true, type: 'React.ReactNode', desc: '按钮内容' },
    ],
  },
  {
    component: 'DropdownMenu',
    props: [
      { name: 'open', optional: true, type: 'boolean', desc: '受控打开' },
      { name: 'onOpenChange', optional: true, type: '(open: boolean) => void', desc: '打开状态回调' },
      { name: 'modal', optional: true, type: 'boolean', desc: '模态模式（点击外部不关）' },
      { name: 'dir', optional: true, type: '"ltr" | "rtl"', desc: '方向' },
    ],
  },
  {
    component: 'InputGroup',
    props: [
      { name: 'className', optional: true, type: 'string', desc: '追加类名' },
      { name: 'children', optional: true, type: 'React.ReactNode', desc: '输入框 + Addon/Button/Text 组合' },
    ],
  },
  {
    component: 'Label',
    props: [
      { name: 'htmlFor', optional: true, type: 'string', desc: '关联控件 id' },
      { name: 'className', optional: true, type: 'string', desc: '追加类名' },
      { name: 'children', optional: true, type: 'React.ReactNode', desc: '标签文本' },
    ],
  },
  {
    component: 'RadioGroup',
    props: [
      { name: 'value', optional: true, type: 'string', desc: '受控选中值' },
      { name: 'onValueChange', optional: true, type: '(value: string) => void', desc: '选中变化回调' },
      { name: 'defaultValue', optional: true, type: 'string', desc: '初始选中' },
      { name: 'orientation', optional: true, type: '"horizontal" | "vertical"', desc: '排列方向' },
    ],
  },
  {
    component: 'Resizable',
    props: [
      { name: 'direction', optional: true, type: '"horizontal" | "vertical"', desc: '面板排列方向' },
      { name: 'defaultSize', optional: true, type: 'number', desc: '面板初始百分比（Panel）' },
      { name: 'minSize', optional: true, type: 'number', desc: '面板最小百分比（Panel）' },
      { name: 'className', optional: true, type: 'string', desc: '追加类名' },
    ],
  },
  {
    component: 'Separator',
    props: [
      { name: 'orientation', optional: true, type: '"horizontal" | "vertical"', desc: '分隔线方向' },
      { name: 'decorative', optional: true, type: 'boolean', desc: '装饰性（隐藏于 a11y 树）' },
      { name: 'className', optional: true, type: 'string', desc: '追加类名' },
    ],
  },
  {
    component: 'ToggleGroup',
    props: [
      { name: 'type', optional: true, type: '"single" | "multiple"', desc: '单选或多选' },
      { name: 'value', optional: true, type: 'string | string[]', desc: '受控选中值' },
      { name: 'onValueChange', optional: true, type: '(value) => void', desc: '选中变化回调' },
      { name: 'variant', optional: true, type: '"default" | "outline"', desc: '视觉变体' },
    ],
  },
]
