import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { DownloadButton } from '@/components/ui/download-button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Textarea } from '@/components/ui/textarea'
import { InputGroup, InputGroupText, InputGroupInput, InputGroupButton } from '@/components/ui/input-group'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import { Calendar } from '@/components/ui/calendar'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from '@/components/ui/drawer'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Toaster } from '@/components/ui/sonner'
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'

import {
  Search,
  Bold,
  Italic,
  Underline,
  AtSign,
  Send,
  Settings,
  User,
  LogOut,
  MoreHorizontal,
  Home,
  ChevronRight,
  TriangleAlert,
  Bell,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/* 基础                                                                */
/* ------------------------------------------------------------------ */

function ButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>默认按钮</Button>
      <Button variant="outline">描边按钮</Button>
      <Button className="rx-grad" style={{ color: 'var(--rx-accent-fg)' }}>渐变按钮</Button>
      {/* 胶囊按钮（rx-pill）：hover 铃铛旋转 250° */}
      <button className="rx-pill" type="button">
        <span className="rx-pill-icon"><Bell className="h-3.5 w-3.5" /></span>
        通知
      </button>
      <button className="rx-pill rx-pill--soft" type="button">
        <span className="rx-pill-icon"><Bell className="h-3.5 w-3.5" /></span>
        通知
      </button>
      {/* 下载按钮（Uiverse）：hover 图标滑入 + tooltip */}
      <DownloadButton tooltip="保存副本">下载</DownloadButton>
    </div>
  )
}

function BadgePreview() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>默认徽章</Badge>
      <Badge variant="outline">描边徽章</Badge>
      <Badge style={{ background: 'color-mix(in srgb, var(--rx-ok) 18%, transparent)', color: 'var(--rx-ok)' }}>已完成</Badge>
    </div>
  )
}

function CardPreview() {
  return (
    <Card className="w-full max-w-64">
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-sm">设计令牌</CardTitle>
        <CardDescription className="text-[11px]">reasonix 主题色板与圆角</CardDescription>
      </CardHeader>
      <CardContent className="p-3 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
        38 个组件 · 5 大分类 · 全部支持可视化预览
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button size="sm" variant="outline">查看详情</Button>
      </CardFooter>
    </Card>
  )
}

function InputPreview() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Input placeholder="请输入内容" className="h-8 w-full max-w-40" />
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2"
          style={{ color: 'var(--rx-fg-faint)' }}
        />
        <Input placeholder="搜索…" className="h-8 w-32 pl-8" />
      </div>
    </div>
  )
}

function LabelPreview() {
  return (
    <div className="w-full max-w-56 space-y-1.5">
      <Label htmlFor="preview-email" className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>邮箱</Label>
      <Input id="preview-email" type="email" placeholder="name@example.com" className="h-8 w-full" />
    </div>
  )
}

function SeparatorPreview() {
  return (
    <div className="w-full">
      <div className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>上方内容</div>
      <Separator className="my-2" />
      <div className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>下方内容</div>
    </div>
  )
}

function SkeletonPreview() {
  return (
    <div className="w-full space-y-2">
      <Skeleton className="h-3 w-32 rounded-md" style={{ background: 'var(--rx-accent-soft)' }} />
      <Skeleton className="h-6 w-full rounded-md" style={{ background: 'var(--rx-bg-elev-2)' }} />
      <Skeleton className="h-6 w-3/4 rounded-md" style={{ background: 'var(--rx-bg-elev-2)' }} />
    </div>
  )
}

function AvatarPreview() {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="头像" />
        <AvatarFallback className="text-[10px]">CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="rx-grad text-[10px]" style={{ color: 'var(--rx-accent-fg)' }}>RX</AvatarFallback>
      </Avatar>
    </div>
  )
}

function TooltipPreview() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">悬停查看提示</Button>
        </TooltipTrigger>
        <TooltipContent>这是 reasonix 风格提示气泡</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

/* ------------------------------------------------------------------ */
/* 表单                                                                */
/* ------------------------------------------------------------------ */

function CheckboxPreview() {
  return (
    <div className="flex flex-col gap-2">
      {[
        { t: '启用实时预览', d: true },
        { t: '自动保存草稿', d: false },
        { t: '通知我更新', d: false },
      ].map((item) => (
        <Label key={item.t} className="flex items-center gap-2 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
          <Checkbox defaultChecked={item.d} /> {item.t}
        </Label>
      ))}
    </div>
  )
}

function RadioGroupPreview() {
  return (
    <RadioGroup defaultValue="a" className="flex flex-col gap-2">
      {[
        { v: 'a', t: '轻量模式' },
        { v: 'b', t: '标准模式' },
        { v: 'c', t: '极速模式' },
      ].map((o) => (
        <div key={o.v} className="flex items-center gap-2 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
          <RadioGroupItem value={o.v} id={`preview-rg-${o.v}`} />
          <Label htmlFor={`preview-rg-${o.v}`}>{o.t}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}

function SwitchPreview() {
  return (
    <div className="flex flex-col gap-2">
      <Label className="flex items-center gap-2 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
        <Switch defaultChecked /> 启用通知
      </Label>
      <Label className="flex items-center gap-2 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
        <Switch /> 自动滚动
      </Label>
    </div>
  )
}

function SelectPreview() {
  return (
    <Select defaultValue="b">
      <SelectTrigger className="w-40">
        <SelectValue placeholder="请选择" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">选项 A</SelectItem>
        <SelectItem value="b">选项 B</SelectItem>
        <SelectItem value="c">选项 C</SelectItem>
      </SelectContent>
    </Select>
  )
}

function SliderPreview() {
  return (
    <div className="w-full max-w-56">
      <Slider defaultValue={[45]} max={100} step={1} />
    </div>
  )
}

function TogglePreview() {
  return (
    <Toggle aria-label="加粗">
      <Bold />
    </Toggle>
  )
}

function ToggleGroupPreview() {
  return (
    <ToggleGroup type="multiple" size="sm">
      <ToggleGroupItem value="bold" aria-label="加粗"><Bold /></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="斜体"><Italic /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="下划线"><Underline /></ToggleGroupItem>
    </ToggleGroup>
  )
}

function TextareaPreview() {
  return (
    <Textarea
      placeholder="请输入多行内容…"
      className="min-h-16 w-full max-w-60 text-xs"
    />
  )
}

function InputGroupPreview() {
  return (
    <InputGroup className="w-full max-w-60">
      <InputGroupText><AtSign className="size-3.5" /></InputGroupText>
      <InputGroupInput placeholder="用户名" />
      <InputGroupButton aria-label="提交"><Send className="size-3.5" /></InputGroupButton>
    </InputGroup>
  )
}

/* ------------------------------------------------------------------ */
/* 数据                                                                */
/* ------------------------------------------------------------------ */

function TablePreview() {
  return (
    <Table className="w-full max-w-56 text-xs">
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
        <TableRow>
          <TableCell>李四</TableCell>
          <TableCell>编辑</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

function ProgressPreview() {
  return (
    <div className="w-full max-w-56">
      <Progress value={65} className="h-1.5" />
      <div className="mt-1.5 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>任务进度 · 65%</div>
    </div>
  )
}

function CalendarPreview() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-fit rounded-md border p-2"
        style={{ borderColor: 'var(--rx-border-soft)' }}
      />
      <p className="mt-1.5 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>
        {date ? `已选日期：${date.toLocaleDateString('zh-CN')}` : '点击选择一个日期'}
      </p>
    </div>
  )
}

function CarouselPreview() {
  const items = ['界面设计', '组件开发', '主题定制']
  return (
    <div className="w-full max-w-56">
      <Carousel className="w-full">
        <CarouselContent>
          {items.map((t, i) => (
            <CarouselItem key={t}>
              <div
                className="flex h-16 items-center justify-center rounded-md border text-xs"
                style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-soft)', color: 'var(--rx-fg-dim)' }}
              >
                {i + 1} · {t}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <CarouselPrevious className="static size-6" />
          <CarouselNext className="static size-6" />
        </div>
      </Carousel>
    </div>
  )
}

function TabsPreview() {
  return (
    <Tabs defaultValue="tab1" className="w-full max-w-60">
      <TabsList className="w-fit">
        <TabsTrigger value="tab1" className="text-xs">概览</TabsTrigger>
        <TabsTrigger value="tab2" className="text-xs">详情</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-2 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
        概览面板：展示组件整体信息
      </TabsContent>
      <TabsContent value="tab2" className="mt-2 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
        详情面板：展示组件的完整说明
      </TabsContent>
    </Tabs>
  )
}

function ScrollAreaPreview() {
  const lines = [
    '加载设计令牌',
    '注册组件样式',
    '应用主题变量',
    '构建演示页面',
    '导出设计系统',
    '发布更新日志',
  ]
  return (
    <ScrollArea className="h-24 w-full rounded-md border p-2" style={{ borderColor: 'var(--rx-border-soft)' }}>
      <div className="space-y-1.5 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
        {lines.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </div>
    </ScrollArea>
  )
}

function ResizablePreview() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="w-full max-w-64 rounded-md border" style={{ borderColor: 'var(--rx-border-soft)' }}>
      <ResizablePanel defaultSize={50}>
        <div className="flex h-16 items-center justify-center text-xs" style={{ color: 'var(--rx-fg-dim)' }}>左面板</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-16 items-center justify-center text-xs" style={{ color: 'var(--rx-fg-dim)' }}>右面板</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

/* ------------------------------------------------------------------ */
/* 反馈                                                                */
/* ------------------------------------------------------------------ */

function AlertPreview() {
  return (
    <Alert className="w-full max-w-64">
      <TriangleAlert className="size-4" style={{ color: 'var(--rx-warn)' }} />
      <AlertTitle className="text-xs">系统提示</AlertTitle>
      <AlertDescription className="text-[11px]">reasonix 设计系统已就绪，可开始构建界面。</AlertDescription>
    </Alert>
  )
}

function DialogPreview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">打开弹窗</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>确认操作</DialogTitle>
          <DialogDescription>此操作不可撤销，确认继续？</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size="sm" variant="outline">取消</Button>
          <Button size="sm" className="rx-grad" style={{ color: 'var(--rx-accent-fg)' }}>确认</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function DrawerPreview() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">打开抽屉</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>底部抽屉</DrawerTitle>
          <DrawerDescription>从底部滑出，适合移动端操作。</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pt-0 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>抽屉内容占位</div>
      </DrawerContent>
    </Drawer>
  )
}

function SheetPreview() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">打开侧栏</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>侧边面板</SheetTitle>
          <SheetDescription>详情与设置区域</SheetDescription>
        </SheetHeader>
        <div className="p-4 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>侧边栏内容占位</div>
      </SheetContent>
    </Sheet>
  )
}

function SonnerPreview() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toaster position="bottom-right" />
      <Button size="sm" variant="outline" onClick={() => toast.success('保存成功')}>成功提示</Button>
      <Button size="sm" variant="outline" onClick={() => toast.error('操作失败')}>错误提示</Button>
      <Button size="sm" variant="outline" onClick={() => toast.info('新事件到达')}>信息提示</Button>
    </div>
  )
}

function CommandPreview() {
  return (
    <Command className="w-full max-w-60 rounded-lg border" style={{ borderColor: 'var(--rx-border-soft)' }}>
      <CommandInput placeholder="搜索命令…" />
      <CommandList>
        <CommandEmpty>无结果</CommandEmpty>
        <CommandGroup heading="操作">
          <CommandItem><Settings className="size-3.5" /> 打开设置</CommandItem>
          <CommandItem><Search className="size-3.5" /> 全局搜索</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

function PopoverPreview() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">更多选项</Button>
      </PopoverTrigger>
      <PopoverContent className="w-44">
        <div className="space-y-1.5 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
          <div>编辑资料</div>
          <div>分享链接</div>
          <div>查看统计</div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function HoverCardPreview() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline" className="gap-1.5">
          <User className="size-3.5" /> @reasonix
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-56">
        <div className="flex items-center gap-2">
          <Avatar className="size-7">
            <AvatarFallback className="rx-grad text-[10px]" style={{ color: 'var(--rx-accent-fg)' }}>RX</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-xs font-semibold" style={{ color: 'var(--rx-fg)' }}>Reasonix</div>
            <div className="text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>设计系统 · 在线</div>
          </div>
        </div>
        <p className="mt-2 text-[11px]" style={{ color: 'var(--rx-fg-dim)' }}>悬停卡片用于展示用户或实体的详细上下文信息。</p>
      </HoverCardContent>
    </HoverCard>
  )
}

function DropdownMenuPreview() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon-sm">
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>账户</DropdownMenuLabel>
        <DropdownMenuItem><User className="size-3.5" /> 个人资料</DropdownMenuItem>
        <DropdownMenuItem><Settings className="size-3.5" /> 偏好设置</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-[var(--rx-err)]"><LogOut className="size-3.5" /> 退出登录</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/* ------------------------------------------------------------------ */
/* 导航                                                                */
/* ------------------------------------------------------------------ */

function BreadcrumbPreview() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#"><Home className="size-3.5" /> 首页</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">组件</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>按钮</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

function PaginationPreview() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#" text="上一页" /></PaginationItem>
        <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#" text="下一页" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

function AccordionPreview() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xs">什么是 reasonix？</AccordionTrigger>
        <AccordionContent className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
          一套主题化的 shadcn/ui 设计系统，覆盖 38 个组件。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xs">如何切换主题方向？</AccordionTrigger>
        <AccordionContent className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
          在设置中选择 graphite / aurora / slate 等主题方向。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function CollapsiblePreview() {
  return (
    <Collapsible className="w-full max-w-64">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium" style={{ color: 'var(--rx-fg)' }}>高级设置</span>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="icon-sm"><ChevronRight className="size-3.5" /></Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="mt-2 rounded-md border p-2 text-xs" style={{ borderColor: 'var(--rx-border-soft)', color: 'var(--rx-fg-dim)' }}>
        折叠区域内容：可在此放置更多配置选项。
      </CollapsibleContent>
    </Collapsible>
  )
}

/* ------------------------------------------------------------------ */
/* 入口                                                                */
/* ------------------------------------------------------------------ */

/**
 * 组件可视化预览 —— 按 id 渲染对应 shadcn 组件的真实 demo。
 * 未知 id 返回 null（不渲染任何内容）。
 */
export function ComponentPreview({ id }: { id: string }) {
  switch (id) {
    case 'button':
      return <ButtonPreview />
    case 'badge':
      return <BadgePreview />
    case 'card':
      return <ScaleWrap><CardPreview /></ScaleWrap>
    case 'input':
      return <InputPreview />
    case 'label':
      return <LabelPreview />
    case 'separator':
      return <SeparatorPreview />
    case 'skeleton':
      return <SkeletonPreview />
    case 'avatar':
      return <AvatarPreview />
    case 'tooltip':
      return <TooltipPreview />
    case 'checkbox':
      return <CheckboxPreview />
    case 'radio-group':
      return <RadioGroupPreview />
    case 'switch':
      return <SwitchPreview />
    case 'select':
      return <SelectPreview />
    case 'slider':
      return <SliderPreview />
    case 'toggle':
      return <TogglePreview />
    case 'toggle-group':
      return <ToggleGroupPreview />
    case 'textarea':
      return <TextareaPreview />
    case 'input-group':
      return <InputGroupPreview />
    case 'table':
      return <ScaleWrap><TablePreview /></ScaleWrap>
    case 'progress':
      return <ProgressPreview />
    case 'calendar':
      return <ScaleWrap><CalendarPreview /></ScaleWrap>
    case 'carousel':
      return <ScaleWrap><CarouselPreview /></ScaleWrap>
    case 'tabs':
      return <TabsPreview />
    case 'scroll-area':
      return <ScaleWrap><ScrollAreaPreview /></ScaleWrap>
    case 'resizable':
      return <ResizablePreview />
    case 'alert':
      return <AlertPreview />
    case 'dialog':
      return <DialogPreview />
    case 'drawer':
      return <DrawerPreview />
    case 'sheet':
      return <SheetPreview />
    case 'sonner':
      return <SonnerPreview />
    case 'command':
      return <CommandPreview />
    case 'popover':
      return <PopoverPreview />
    case 'hover-card':
      return <HoverCardPreview />
    case 'dropdown-menu':
      return <DropdownMenuPreview />
    case 'breadcrumb':
      return <BreadcrumbPreview />
    case 'pagination':
      return <PaginationPreview />
    case 'accordion':
      return <AccordionPreview />
    case 'collapsible':
      return <CollapsiblePreview />
    default:
      return null
  }
}

/** 大组件预览缩放 wrapper（适配统一高度预览区） */
function ScaleWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-h-full max-w-full origin-center scale-[0.6] items-center justify-center">
      {children}
    </div>
  )
}

export default ComponentPreview
