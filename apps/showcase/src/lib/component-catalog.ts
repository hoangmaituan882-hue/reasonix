/**
 * 组件总览目录数据 —— 覆盖 src/components/ui 下全部 38 个组件
 * 分类：基础 / 表单 / 数据 / 反馈 / 导航
 */

/** 组件分类 */
export const COMPONENT_CATEGORIES = ['基础', '表单', '数据', '反馈', '导航'] as const

export type ComponentCategory = (typeof COMPONENT_CATEGORIES)[number]

/** 组件总览条目 */
export interface ComponentCatalogItem {
  /** 唯一 id（小写中划线，与 ui 文件名一致） */
  id: string
  /** 中文名称 */
  name: string
  /** 所属分类 */
  category: ComponentCategory
  /** 一句中文用途 */
  desc: string
  /** 可直接复制的 shadcn 用法示例（含 import） */
  code: string
}

/** 全部组件目录 */
export const COMPONENT_CATALOG: ComponentCatalogItem[] = [
  // ── 基础 ─────────────────────────────────────────────
  {
    id: 'button',
    name: 'Button',
    category: '基础',
    desc: '触发操作的主要交互入口，支持多种视觉强调级别。',
    code: `import { Button } from '@/components/ui/button'

<Button variant="default">主要按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="outline">描边按钮</Button>
<Button variant="ghost">幽灵按钮</Button>
<Button variant="destructive">危险按钮</Button>
<Button variant="link">链接按钮</Button>`,
  },
  {
    id: 'badge',
    name: 'Badge',
    category: '基础',
    desc: '用于标记状态、分类或计数的短文本徽章。',
    code: `import { Badge } from '@/components/ui/badge'

<Badge>默认</Badge>
<Badge variant="secondary">次要</Badge>
<Badge variant="outline">描边</Badge>
<Badge variant="destructive">危险</Badge>`,
  },
  {
    id: 'card',
    name: 'Card',
    category: '基础',
    desc: '内容分组的容器卡片，承载信息与操作。',
    code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>卡片标题</CardTitle>
    <CardDescription>一段描述文字</CardDescription>
  </CardHeader>
  <CardContent>卡片主体内容</CardContent>
  <CardFooter>底部操作区</CardFooter>
</Card>`,
  },
  {
    id: 'input',
    name: 'Input',
    category: '基础',
    desc: '单行文本输入框，支持占位、禁用与校验状态。',
    code: `import { Input } from '@/components/ui/input'

<Input placeholder="请输入内容" />
<Input type="email" placeholder="邮箱" disabled />`,
  },
  {
    id: 'label',
    name: 'Label',
    category: '基础',
    desc: '表单字段标签，点击可与对应控件聚焦联动。',
    code: `import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

<Label htmlFor="email">邮箱</Label>
<Input id="email" placeholder="name@example.com" />`,
  },
  {
    id: 'separator',
    name: 'Separator',
    category: '基础',
    desc: '分隔内容区块的横向或纵向分割线。',
    code: `import { Separator } from '@/components/ui/separator'

<Separator />
<Separator className="my-4" />
<Separator orientation="vertical" className="mx-4 h-6" />`,
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    category: '基础',
    desc: '内容加载时的占位骨架屏。',
    code: `import { Skeleton } from '@/components/ui/skeleton'

<Skeleton className="h-4 w-32" />
<Skeleton className="mt-2 h-8 w-full" />`,
  },
  {
    id: 'avatar',
    name: 'Avatar',
    category: '基础',
    desc: '用户头像展示，无图片时回退为文字占位。',
    code: `import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="头像" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    category: '基础',
    desc: '悬停或聚焦时浮出的说明气泡。',
    code: `import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>悬停我</TooltipTrigger>
    <TooltipContent>这是提示内容</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
  },

  // ── 表单 ─────────────────────────────────────────────
  {
    id: 'checkbox',
    name: 'Checkbox',
    category: '表单',
    desc: '多选复选框，用于独立选项或批量选择。',
    code: `import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

<Label className="flex items-center gap-2">
  <Checkbox defaultChecked /> 同意条款
</Label>`,
  },
  {
    id: 'radio-group',
    name: 'Radio Group',
    category: '表单',
    desc: '单选组，同一组内互斥选择。',
    code: `import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

<RadioGroup defaultValue="a">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="a" id="a" />
    <Label htmlFor="a">选项 A</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="b" id="b" />
    <Label htmlFor="b">选项 B</Label>
  </div>
</RadioGroup>`,
  },
  {
    id: 'switch',
    name: 'Switch',
    category: '表单',
    desc: '二元开闭状态的开关控件。',
    code: `import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

<Label className="flex items-center gap-2">
  <Switch /> 启用通知
</Label>`,
  },
  {
    id: 'select',
    name: 'Select',
    category: '表单',
    desc: '下拉选择器，从列表中选取一个值。',
    code: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

<Select>
  <SelectTrigger className="w-40">
    <SelectValue placeholder="请选择" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">选项 A</SelectItem>
    <SelectItem value="b">选项 B</SelectItem>
  </SelectContent>
</Select>`,
  },
  {
    id: 'slider',
    name: 'Slider',
    category: '表单',
    desc: '拖动选择数值或数值区间的滑块。',
    code: `import { Slider } from '@/components/ui/slider'

<Slider defaultValue={[50]} max={100} step={1} />
<Slider defaultValue={[20, 60]} max={100} />`,
  },
  {
    id: 'toggle',
    name: 'Toggle',
    category: '表单',
    desc: '可切换按下状态的图标按钮，常用于工具栏。',
    code: `import { Toggle } from '@/components/ui/toggle'
import { Bold } from 'lucide-react'

<Toggle aria-label="加粗"><Bold /></Toggle>`,
  },
  {
    id: 'toggle-group',
    name: 'Toggle Group',
    category: '表单',
    desc: '一组互斥或多选的可切换按钮组。',
    code: `import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Italic } from 'lucide-react'

<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="加粗"><Bold /></ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="斜体"><Italic /></ToggleGroupItem>
</ToggleGroup>`,
  },
  {
    id: 'textarea',
    name: 'Textarea',
    category: '表单',
    desc: '多行文本输入区域。',
    code: `import { Textarea } from '@/components/ui/textarea'

<Textarea placeholder="请输入多行内容" />`,
  },
  {
    id: 'input-group',
    name: 'Input Group',
    category: '表单',
    desc: '输入框与前缀、后缀或按钮组合的复合输入区。',
    code: `import { InputGroup, InputGroupText, InputGroupInput, InputGroupButton } from '@/components/ui/input-group'
import { Button } from '@/components/ui/button'

<InputGroup>
  <InputGroupText>https://</InputGroupText>
  <InputGroupInput placeholder="example.com" />
  <InputGroupButton><Button>访问</Button></InputGroupButton>
</InputGroup>`,
  },

  // ── 数据 ─────────────────────────────────────────────
  {
    id: 'table',
    name: 'Table',
    category: '数据',
    desc: '结构化数据表格。',
    code: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>姓名</TableHead>
      <TableHead>角色</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>张三</TableCell>
      <TableCell>管理员</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  },
  {
    id: 'progress',
    name: 'Progress',
    category: '数据',
    desc: '展示任务或加载进度的条形指示器。',
    code: `import { Progress } from '@/components/ui/progress'

<Progress value={65} />`,
  },
  {
    id: 'calendar',
    name: 'Calendar',
    category: '数据',
    desc: '日期选择日历，支持单选与区间选择。',
    code: `import { Calendar } from '@/components/ui/calendar'

<Calendar mode="single" selected={date} onSelect={setDate} />`,
  },
  {
    id: 'carousel',
    name: 'Carousel',
    category: '数据',
    desc: '可拖拽轮播的横向内容列表。',
    code: `import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

<Carousel className="w-full max-w-xs">
  <CarouselContent>
    <CarouselItem>幻灯片 1</CarouselItem>
    <CarouselItem>幻灯片 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
  },
  {
    id: 'tabs',
    name: 'Tabs',
    category: '数据',
    desc: '在多个内容面板之间切换的选项卡。',
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">概览</TabsTrigger>
    <TabsTrigger value="tab2">详情</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">概览内容</TabsContent>
  <TabsContent value="tab2">详情内容</TabsContent>
</Tabs>`,
  },
  {
    id: 'scroll-area',
    name: 'Scroll Area',
    category: '数据',
    desc: '自定义样式的滚动区域，支持独立滚动条。',
    code: `import { ScrollArea } from '@/components/ui/scroll-area'

<ScrollArea className="h-48 w-64 rounded-md border">
  这里放较长的内容……
</ScrollArea>`,
  },
  {
    id: 'resizable',
    name: 'Resizable',
    category: '数据',
    desc: '可拖拽调节尺寸的分栏面板。',
    code: `import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'

<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>左面板</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>右面板</ResizablePanel>
</ResizablePanelGroup>`,
  },

  // ── 反馈 ─────────────────────────────────────────────
  {
    id: 'alert',
    name: 'Alert',
    category: '反馈',
    desc: '页面内嵌提示条，强调操作结果或注意事项。',
    code: `import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

<Alert>
  <AlertTitle>注意</AlertTitle>
  <AlertDescription>这是一条警示信息。</AlertDescription>
</Alert>`,
  },
  {
    id: 'dialog',
    name: 'Dialog',
    category: '反馈',
    desc: '居中模态弹窗，用于需要聚焦确认的场景。',
    code: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

<Dialog>
  <DialogTrigger>打开弹窗</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>确认操作</DialogTitle>
      <DialogDescription>此操作不可撤销。</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
  },
  {
    id: 'drawer',
    name: 'Drawer',
    category: '反馈',
    desc: '从屏幕底部滑出的抽屉式面板。',
    code: `import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'

<Drawer>
  <DrawerTrigger>打开抽屉</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>底部抽屉</DrawerTitle>
    </DrawerHeader>
  </DrawerContent>
</Drawer>`,
  },
  {
    id: 'sheet',
    name: 'Sheet',
    category: '反馈',
    desc: '侧边滑出面板，常用于详情或设置抽屉。',
    code: `import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

<Sheet>
  <SheetTrigger>打开侧栏</SheetTrigger>
  <SheetContent side="right">
    <SheetHeader><SheetTitle>侧边面板</SheetTitle></SheetHeader>
  </SheetContent>
</Sheet>`,
  },
  {
    id: 'sonner',
    name: 'Toaster',
    category: '反馈',
    desc: '全局轻提示 Toast 通知。',
    code: `import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

<Toaster />
<Button onClick={() => toast.success('保存成功')}>触发通知</Button>`,
  },
  {
    id: 'command',
    name: 'Command',
    category: '反馈',
    desc: '命令面板 / 快速搜索列表。',
    code: `import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command'

<Command>
  <CommandInput placeholder="搜索命令…" />
  <CommandList>
    <CommandEmpty>无结果</CommandEmpty>
    <CommandGroup heading="操作">
      <CommandItem>新建会话</CommandItem>
      <CommandItem>打开设置</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
  },
  {
    id: 'popover',
    name: 'Popover',
    category: '反馈',
    desc: '点击触发的悬浮内容层。',
    code: `import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'

<Popover>
  <PopoverTrigger>更多选项</PopoverTrigger>
  <PopoverContent>浮层内容</PopoverContent>
</Popover>`,
  },
  {
    id: 'hover-card',
    name: 'Hover Card',
    category: '反馈',
    desc: '悬停时显示详细内容的浮层卡片。',
    code: `import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'

<HoverCard>
  <HoverCardTrigger>@user</HoverCardTrigger>
  <HoverCardContent>用户卡片信息</HoverCardContent>
</HoverCard>`,
  },
  {
    id: 'dropdown-menu',
    name: 'Dropdown Menu',
    category: '反馈',
    desc: '菜单按钮展开的操作列表。',
    code: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

<DropdownMenu>
  <DropdownMenuTrigger>操作</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>账户</DropdownMenuLabel>
    <DropdownMenuItem>编辑</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>删除</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  },

  // ── 导航 ─────────────────────────────────────────────
  {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    category: '导航',
    desc: '展示页面层级路径的导航痕迹。',
    code: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="#">首页</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>当前页</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  },
  {
    id: 'pagination',
    name: 'Pagination',
    category: '导航',
    desc: '分页导航，浏览多页数据。',
    code: `import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination'

<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`,
  },
  {
    id: 'accordion',
    name: 'Accordion',
    category: '导航',
    desc: '可展开收起的手风琴列表。',
    code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>问题标题</AccordionTrigger>
    <AccordionContent>回答内容</AccordionContent>
  </AccordionItem>
</Accordion>`,
  },
  {
    id: 'collapsible',
    name: 'Collapsible',
    category: '导航',
    desc: '单区块的展开 / 折叠容器。',
    code: `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'

<Collapsible>
  <CollapsibleTrigger>展开 / 收起</CollapsibleTrigger>
  <CollapsibleContent>折叠区域内容</CollapsibleContent>
</Collapsible>`,
  },
]
