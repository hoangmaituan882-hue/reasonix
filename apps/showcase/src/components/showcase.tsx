import { Calendar } from '@/components/ui/calendar'
import { Badge } from '@/components/ui/badge'
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem,
  PaginationLink, PaginationNext, PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter,
  DrawerHeader, DrawerTitle, DrawerTrigger,
} from '@/components/ui/drawer'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupButton } from '@/components/ui/input-group'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Progress } from '@/components/ui/progress'
import {
  Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput,
  CommandItem, CommandList, CommandSeparator,
} from '@/components/ui/command'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Popover, PopoverContent, PopoverTrigger,
} from '@/components/ui/popover'
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Toggle } from '@/components/ui/toggle'
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from '@/components/ui/sheet'
import { Slider } from '@/components/ui/slider'
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Bold, Italic, Underline } from 'lucide-react'
import { MoreHorizontal, LogOut, User } from 'lucide-react'
import {
  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'
import { useState } from 'react'
import { useTheme, DIRECTIONS } from '@/lib/theme'
import { Moon, Sun, Search, Bell, Settings, Send, Plus, ChevronDown, ChevronRight, ChevronsUpDown, MessageSquare, FileText, Sparkles, Keyboard, Copy, Check } from 'lucide-react'

const TAB_LABELS: Record<string, string> = {
  buttons: '按钮', badges: '徽章', inputs: '输入', cards: '卡片', skeletons: '骨架',
  forms: '表单', selects: '选择器', switches: '开关', togglegroup: '切换组',
  tables: '表格', progress: '进度', calendar: '日历', carousel: '轮播', resizable: '面板',
  alerts: '提示', dialogs: '弹窗', drawer: '抽屉', sonner: '通知', command: '命令',
  overlays: '浮层', hovercard: '悬停卡', tooltips: '提示',
  navigation: '导航', breadcrumb: '面包屑', pagination: '分页', accordions: '手风琴',
  misc: '杂项', textareas: '文本域', collapsible: '折叠',
  avatar: '头像', checkbox: '复选', radio: '单选', label: '标签',
  dropdown: '下拉菜单', slider: '滑动条', toggle: '切换', scrollarea: '滚动区',
  sheet: '侧滑', separator: '分隔线',
}

const TAB_GROUPS: Record<string, string[]> = {
  '基础': ['buttons', 'badges', 'inputs', 'cards', 'skeletons', 'textareas', 'avatar'],
  '表单': ['forms', 'selects', 'switches', 'togglegroup', 'checkbox', 'radio', 'label'],
  '数据': ['tables', 'progress', 'calendar', 'carousel', 'resizable'],
  '反馈': ['alerts', 'dialogs', 'drawer', 'sonner', 'command'],
  '浮层': ['overlays', 'hovercard'],
  '导航': ['navigation', 'breadcrumb', 'pagination', 'accordions'],
  '杂项': ['misc', 'collapsible', 'dropdown', 'slider', 'toggle', 'tooltips', 'scrollarea', 'sheet', 'separator'],
}

export default function ComponentsShowcase() {
  const { dark, setDark, direction, setDirection } = useTheme()
  const [group, setGroup] = useState<string>('基础')
  const [tab, setTab] = useState<string>('buttons')
  const groupTabs = TAB_GROUPS[group] ?? []

  return (
    <div className="mx-auto max-w-5xl overflow-y-auto p-8">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold" style={{ color: 'var(--rx-fg)' }}>
            组件库 <span className="mono text-sm font-normal" style={{ color: 'var(--rx-fg-faint)' }}>shadcn/ui × reasonix</span>
          </h1>
          <p className="mt-1 text-sm" style={{ color: 'var(--rx-fg-dim)' }}>
            石墨主题 token 直译 · 单焦点色纪律 · 圆角是主题性格
          </p>
        </div>
        <div className="flex items-center gap-2">
          {DIRECTIONS.map((d) => (
            <button
              key={d.id}
              onClick={() => setDirection(d.id)}
              className="h-6 rounded-full px-2.5 text-[10px] font-semibold"
              style={direction === d.id
                ? { background: 'var(--rx-accent)', color: 'var(--rx-accent-fg)' }
                : { border: '1px solid var(--rx-border-soft)', color: 'var(--rx-fg-faint)' }}
            >
              {d.label}
            </button>
          ))}
          <Button variant="outline" size="sm" onClick={() => setDark(!dark)}>
            {dark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </header>

      {/* ===== Token 表 ===== */}
      <section className="mb-10">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>Token · 色彩</h2>
        <Card>
          <CardContent className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:grid-cols-4">
            {[
              { name: '--rx-bg', val: 'var(--rx-bg)', label: '画布底' },
              { name: '--rx-bg-elev', val: 'var(--rx-bg-elev)', label: '抬升面' },
              { name: '--rx-accent', val: 'var(--rx-accent)', label: '焦点色' },
              { name: '--rx-accent-soft', val: 'var(--rx-accent-soft)', label: '柔光' },
              { name: '--rx-ok', val: 'var(--rx-ok)', label: '成功' },
              { name: '--rx-warn', val: 'var(--rx-warn)', label: '警告' },
              { name: '--rx-err', val: 'var(--rx-err)', label: '错误' },
              { name: '--rx-danger', val: 'var(--rx-danger)', label: '危险' },
            ].map((t) => (
              <div key={t.name} className="rx-hairline overflow-hidden rounded-md">
                <div className="h-10" style={{ background: t.val }} />
                <div className="p-2">
                  <div className="mono text-[10px]" style={{ color: 'var(--rx-fg)' }}>{t.name}</div>
                  <div className="text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{t.label}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* ===== 组件 ===== */}
      <section>
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>组件 · shadcn/ui</h2>
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          {/* 分组导航 */}
          <div className="mb-3 flex flex-wrap gap-1">
            {Object.keys(TAB_GROUPS).map((g) => (
              <button
                key={g}
                onClick={() => { setGroup(g); setTab(TAB_GROUPS[g][0]) }}
                className="h-6 rounded-full px-3 text-[10px] font-semibold transition-colors"
                style={group === g
                  ? { background: 'var(--rx-accent)', color: 'var(--rx-accent-fg)' }
                  : { border: '1px solid var(--rx-border-soft)', color: 'var(--rx-fg-dim)' }}
              >
                {g}
              </button>
            ))}
          </div>
          <TabsList className="mb-4 flex-wrap">
            {groupTabs.map((t) => (
              <TabsTrigger key={t} value={t} className="text-[11px]">{TAB_LABELS[t] ?? t}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent className="rx-anim-slideup" value="buttons">
            <Card>
              <CardContent className="flex flex-wrap items-center gap-3 p-6">
                <Button>主按钮</Button>
                <Button variant="secondary">次要</Button>
                <Button variant="outline">描边</Button>
                <Button variant="ghost">幽灵</Button>
                <Button variant="destructive">危险</Button>
                <Button size="sm" className="rx-grad gap-1.5" style={{ color: 'var(--rx-accent-fg)' }}>
                  <Send className="h-3.5 w-3.5" /> 渐变 CTA
                </Button>
                <Button size="icon" variant="outline"><Plus className="h-4 w-4" /></Button>
                {/* 胶囊按钮（rx-pill）：hover 铃铛旋转 */}
                <button className="rx-pill" type="button">
                  <span className="rx-pill-icon"><Bell className="h-3.5 w-3.5" /></span>
                  通知
                </button>
                <button className="rx-pill rx-pill--soft" type="button">
                  <span className="rx-pill-icon"><Bell className="h-3.5 w-3.5" /></span>
                  通知
                </button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="badges">
            <Card>
              <CardContent className="flex flex-wrap items-center gap-3 p-6">
                <Badge>默认</Badge>
                <Badge variant="secondary">次要</Badge>
                <Badge variant="outline">描边</Badge>
                <Badge variant="destructive">危险</Badge>
                <Badge className="gap-1" style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--rx-accent)' }} /> plan 模式
                </Badge>
                <Badge className="gap-1" style={{ background: 'color-mix(in srgb, var(--rx-ok) 18%, transparent)', color: 'var(--rx-ok)' }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--rx-ok)' }} /> 运行中
                </Badge>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="inputs">
            <Card>
              <CardContent className="space-y-3 p-6">
                <div className="flex items-center gap-2 rounded-md border px-3" style={{ borderColor: 'var(--rx-border)' }}>
                  <Search className="h-3.5 w-3.5" style={{ color: 'var(--rx-fg-faint)' }} />
                  <Input className="border-none shadow-none focus-visible:ring-0" placeholder="搜索…" />
                </div>
                <Input placeholder="普通输入框" />
                <div className="flex items-center gap-2">
                  <Input placeholder="model 选择" className="flex-1" />
                  <Button variant="outline" size="icon"><ChevronDown className="h-3.5 w-3.5" /></Button>
                </div>
                {/* InputGroup：前缀 + 输入 + 后缀 */}
                <div>
                  <div className="mb-1 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>InputGroup · 前缀/后缀</div>
                  <InputGroup>
                    <InputGroupAddon>🔗</InputGroupAddon>
                    <Input placeholder="github.com/user/repo" />
                    <InputGroupButton><Button variant="outline" size="icon" className="h-8 w-8"><Copy className="h-3 w-3" /></Button></InputGroupButton>
                  </InputGroup>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="cards">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: '会话状态', desc: '上下文窗口 · 读取命中', icon: '📊' },
                { title: '远程主机', desc: 'deploy@10.0.0.8', icon: '🖥' },
                { title: '事件流', desc: 'agent:event · 实时', icon: '⚡' },
                { title: '成本统计', desc: '¥128.50 · 本次', icon: '💰' },
              ].map((c) => (
                <Card key={c.title}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <span>{c.icon}</span> {c.title}
                    </CardTitle>
                    <CardDescription className="text-xs">{c.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
                    <Button size="sm" variant="outline"><Settings className="h-3 w-3" /> 设置</Button>
                    <Button size="sm" variant="ghost"><Bell className="h-3 w-3" /> 通知</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent className="rx-anim-slideup" value="dialogs">
            <Card>
              <CardContent className="p-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">打开弹窗</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>确认操作</DialogTitle>
                      <DialogDescription>reasonix 弹窗：圆角 + 深阴影，聚焦单一决策。</DialogDescription>
                    </DialogHeader>
                    <div className="py-3 text-sm" style={{ color: 'var(--rx-fg-dim)' }}>
                      删除会话「石墨主题设计」？此操作不可撤销。
                    </div>
                    <DialogFooter>
                      <Button variant="ghost">取消</Button>
                      <Button variant="destructive">删除</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                {/* 分隔 */}
                <div className="my-4 h-px" style={{ background: 'var(--rx-border-soft)' }} />
                {/* ConfirmDialog：danger 确认语义（源码 ConfirmDialog tone=danger） */}
                <div className="mb-1.5 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>ConfirmDialog · 危险确认</div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive" size="sm">危险操作确认</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[var(--rx-err)]">⚠ 确认危险操作</DialogTitle>
                      <DialogDescription>此操作不可撤销（tone=danger）。</DialogDescription>
                    </DialogHeader>
                    <div className="py-3 text-sm" style={{ color: 'var(--rx-fg-dim)' }}>
                      永久删除工作区「shadcn」及其全部历史？请确认。
                    </div>
                    <DialogFooter>
                      <Button variant="ghost">取消</Button>
                      <Button variant="destructive">删除</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                {/* 分隔 */}
                <div className="my-4 h-px" style={{ background: 'var(--rx-border-soft)' }} />
                {/* CopyButton：复制按钮（源码 clipboard + execCommand 回退） */}
                <div className="mb-1.5 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>CopyButton · 复制按钮</div>
                <div className="flex items-center gap-2">
                  <code className="mono rounded border px-2 py-1 text-[11px]" style={{ borderColor: 'var(--rx-border-soft)', color: 'var(--rx-fg-dim)' }}>const theme = "graphite"</code>
                  <CopyButtonExample />
                </div>
                {/* ModalCloseButton：关闭按钮 */}
                <div className="mb-1.5 mt-4 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>ModalCloseButton · 弹窗关闭按钮</div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-lg border px-3 py-2" style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-elev)' }}>
                    <span className="text-xs" style={{ color: 'var(--rx-fg)' }}>弹窗标题</span>
                    <button className="flex h-6 w-6 items-center justify-center rounded transition-colors hover:bg-[var(--rx-bg-soft)] hover:text-[var(--rx-fg)]" style={{ color: 'var(--rx-fg-faint)' }} aria-label="关闭">✕</button>
                  </span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="selects">
            <Card>
              <CardContent className="space-y-3 p-6">
                <Select defaultValue="deepseek-chat">
                  <SelectTrigger className="w-[240px]">
                    <SelectValue placeholder="选择模型" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deepseek-chat">deepseek-chat</SelectItem>
                    <SelectItem value="deepseek-reasoner">deepseek-reasoner</SelectItem>
                    <SelectItem value="gpt-4o">gpt-4o</SelectItem>
                    <SelectItem value="claude-sonnet">claude-sonnet</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-2">
                  <Select defaultValue="plan">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="协作模式" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chat">chat</SelectItem>
                      <SelectItem value="plan">plan</SelectItem>
                      <SelectItem value="goal">goal</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="auto">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="审批模式" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ask">ask</SelectItem>
                      <SelectItem value="auto">auto</SelectItem>
                      <SelectItem value="yolo">yolo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="switches">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3">
                    <Switch variant="pill" aria-label="pill 开" />
                    <span className="text-xs" style={{ color: 'var(--rx-fg-faint)' }}>pill（太阳/月亮）</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Switch variant="pill" defaultChecked aria-label="pill 关" />
                    <span className="text-xs" style={{ color: 'var(--rx-fg-faint)' }}>pill 选中</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Switch defaultChecked aria-label="默认开" />
                    <span className="text-xs" style={{ color: 'var(--rx-fg-faint)' }}>默认</span>
                  </div>
                </div>
                {[
                  { label: '自动滚动', desc: '新消息到达时自动滚动到底部' },
                  { label: '跟随系统主题', desc: '明暗随操作系统切换' },
                  { label: 'vibrant 高亮', desc: '挖空词显示 accent 高亮' },
                ].map((s2) => (
                  <div key={s2.label} className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm" style={{ color: 'var(--rx-fg)' }}>{s2.label}</div>
                      <div className="text-xs" style={{ color: 'var(--rx-fg-faint)' }}>{s2.desc}</div>
                    </div>
                    <Switch defaultChecked={s2.label !== '自动滚动'} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="progress">
            <Card>
              <CardContent className="space-y-5 p-6">
                {[
                  { label: '上下文窗口', val: 33, show: '42.1k / 128k' },
                  { label: '读取命中率', val: 87, show: '87.00%' },
                  { label: '本次成本', val: 12, show: '¥128.50' },
                ].map((p) => (
                  <div key={p.label} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span style={{ color: 'var(--rx-fg-dim)' }}>{p.label}</span>
                      <span className="mono" style={{ color: 'var(--rx-fg)' }}>{p.show}</span>
                    </div>
                    <Progress value={p.val} className="h-1.5" style={{ background: 'var(--rx-bg-elev-2)' }} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="command">
            <Card>
              <CardContent className="space-y-4 p-6">
                <CommandDialogDemo />
                <Command className="rounded-lg border" style={{ borderColor: 'var(--rx-border-soft)' }}>
                  <CommandInput placeholder="搜索命令…" />
                  <CommandList>
                    <CommandEmpty>无结果</CommandEmpty>
                    <CommandGroup heading="会话">
                      <CommandItem><MessageSquare className="mr-2 h-3.5 w-3.5" /> 新建会话</CommandItem>
                      <CommandItem><FileText className="mr-2 h-3.5 w-3.5" /> 打开文件</CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="工具">
                      <CommandItem><Sparkles className="mr-2 h-3.5 w-3.5" /> 切换模型</CommandItem>
                      <CommandItem><Settings className="mr-2 h-3.5 w-3.5" /> 打开设置</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent className="rx-anim-slideup" value="alerts">
            <Card>
              <CardContent className="space-y-3 p-6">
                <Alert>
                  <Sparkles className="h-4 w-4" style={{ color: 'var(--rx-accent)' }} />
                  <AlertTitle>新会话已创建</AlertTitle>
                  <AlertDescription>石墨主题 · plan 模式 · deepseek-chat</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>删除失败</AlertTitle>
                  <AlertDescription>目标会话不存在或已被移除。</AlertDescription>
                </Alert>
                <Alert variant="default" className="border-l-2" style={{ borderLeftColor: 'var(--rx-ok)' }}>
                  <AlertTitle>同步完成</AlertTitle>
                  <AlertDescription>上下文窗口 42.1k / 128k · 已同步到远端</AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="tables">
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableCaption>会话成本统计 · reasonix 表格</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>会话</TableHead>
                      <TableHead>tokens</TableHead>
                      <TableHead>成本</TableHead>
                      <TableHead className="text-right">状态</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: '石墨主题设计', tokens: '128.4k', cost: '¥12.40', st: '完成' },
                      { name: '组件库规划', tokens: '96.2k', cost: '¥8.15', st: '进行中' },
                      { name: '工作台复刻', tokens: '214.9k', cost: '¥22.80', st: '完成' },
                      { name: 'Token 转译', tokens: '45.6k', cost: '¥3.92', st: '完成' },
                    ].map((r) => (
                      <TableRow key={r.name}>
                        <TableCell className="font-medium">{r.name}</TableCell>
                        <TableCell className="mono">{r.tokens}</TableCell>
                        <TableCell className="mono">{r.cost}</TableCell>
                        <TableCell className="text-right">
                          <span className="inline-flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full" style={{ background: r.st === '完成' ? 'var(--rx-ok)' : 'var(--rx-warn)' }} />
                            {r.st}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="skeletons">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-3.5 w-36" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
                <div className="space-y-2">
                  {[0, 1, 2].map((i) => (
                    <Skeleton key={i} className="h-9 w-full" />
                  ))}
                </div>
                <div className="flex gap-3">
                  <Skeleton className="h-8 w-24 rounded-md" style={{ background: 'var(--rx-accent-soft)' }} />
                  <Skeleton className="h-8 w-24 rounded-md" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="textareas">
            <Card>
              <CardContent className="space-y-3 p-6">
                <TextareaDemo />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent className="rx-anim-slideup" value="accordions">
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    { t: '什么是 reasonix 单焦点色纪律？', c: '全界面只有 accent 一种强调色；灰阶打底、单色点睛。Graphite 用暖橙 #ff6a3d。' },
                    { t: '圆角为什么是主题性格第一语言？', c: '方向切换时 accent + 圆角一起变；Graphite 5/8/11px、Aurora 10/15/22px。' },
                    { t: '动效 token 有哪些？', c: '120ms hover / 180ms 局部 / 340ms 结构 / 420ms 环境级淡入。' },
                  ].map((a) => (
                    <AccordionItem key={a.t} value={a.t}>
                      <AccordionTrigger className="text-sm">{a.t}</AccordionTrigger>
                      <AccordionContent className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>{a.c}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="forms">
            <Card>
              <CardContent className="space-y-5 p-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs">会话名称</Label>
                  <Input id="name" placeholder="石墨主题设计" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">模型</Label>
                  <div className="flex items-center gap-4">
                    {['chat', 'plan', 'goal'].map((m) => (
                      <label key={m} className="flex items-center gap-2 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
                        <Checkbox defaultChecked={m === 'plan'} /> {m}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">审批模式</Label>
                  <RadioGroup defaultValue="auto" className="flex gap-4">
                    {['ask', 'auto', 'yolo'].map((m) => (
                      <label key={m} className="flex items-center gap-2 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
                        <RadioGroupItem value={m} /> {m}
                      </label>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="overlays">
            <Card>
              <CardContent className="flex flex-wrap items-center gap-3 p-6">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild><Button variant="outline">Tooltip</Button></TooltipTrigger>
                    <TooltipContent className="rx-anim-tooltip">这是 tooltip 动效 120ms</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Popover>
                  <PopoverTrigger asChild><Button variant="outline">Popover</Button></PopoverTrigger>
                  <PopoverContent className="rx-anim-popover w-56">
                    <div className="space-y-2">
                      <div className="text-xs font-semibold" style={{ color: 'var(--rx-fg)' }}>模型设置</div>
                      <div className="text-[10px]" style={{ color: 'var(--rx-fg-dim)' }}>reasonix 弹出层 180ms · rise 4px + scale .985</div>
                    </div>
                  </PopoverContent>
                </Popover>
                <Sheet>
                  <SheetTrigger asChild><Button variant="outline">Sheet 抽屉</Button></SheetTrigger>
                  <SheetContent className="w-72">
                    <SheetHeader>
                      <SheetTitle>右侧抽屉</SheetTitle>
                      <SheetDescription>drawer-in 340ms · translateX 24px</SheetDescription>
                    </SheetHeader>
                    <div className="py-4 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>reasonix 抽屉动效 demo</div>
                  </SheetContent>
                </Sheet>
                <Button variant="outline" className="rx-anim-press">按压动效</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="navigation">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <Avatar className="rx-anim-popover h-8 w-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="rx-grad text-[10px]" style={{ color: 'var(--rx-accent-fg)' }}>R</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: 'var(--rx-fg)' }}>Reasonix</div>
                    <div className="text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>在线 · graphite</div>
                  </div>
                </div>
                <div className="text-xs" style={{ color: 'var(--rx-fg-faint)' }}>Breadcrumb / Pagination 见完整组件库（{Object.values(TAB_GROUPS).reduce((a, g) => a + g.length, 0)} 个组件已装）</div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="misc">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
                  <span>Toggle · Slider · Separator 等组件在各自分类 tab 中有完整演示：</span>
                  <span className="rounded-full px-2 py-0.5" style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}>切换（表单）</span>
                  <span className="rounded-full px-2 py-0.5" style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}>滑动条（表单）</span>
                  <span className="rounded-full px-2 py-0.5" style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}>分隔线（杂项）</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="calendar">
            <Card>
              <CardContent className="p-6">
                <CalendarDemo />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="carousel">
            <Card>
              <CardContent className="p-6">
                <Carousel className="mx-auto w-full max-w-md">
                  <CarouselContent>
                    {['石墨', '暖橙', '圆角', '灰阶', '单焦点'].map((item) => (
                      <CarouselItem key={item} className="md:basis-1/2">
                        <div className="flex h-32 items-center justify-center rounded-md border" style={{ borderColor: 'var(--rx-border-soft)' }}>
                          <span className="text-sm" style={{ color: 'var(--rx-fg-dim)' }}>{item}</span>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="rx-anim-press" />
                  <CarouselNext className="rx-anim-press" />
                </Carousel>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="breadcrumb">
            <Card>
              <CardContent className="p-6">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">首页</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator><ChevronRight className="h-3.5 w-3.5" /></BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">组件</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator><ChevronRight className="h-3.5 w-3.5" /></BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage>面包屑</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="pagination">
            <Card>
              <CardContent className="p-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious text="上一页" href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext text="下一页" href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="drawer">
            <Card>
              <CardContent className="p-6">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline">打开抽屉</Button>
                  </DrawerTrigger>
                  <DrawerContent className="">
                    <DrawerHeader>
                      <DrawerTitle>确认操作</DrawerTitle>
                      <DrawerDescription>reasonix 底部抽屉 · 支持手势拖拽关闭</DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4 text-sm" style={{ color: 'var(--rx-fg-dim)' }}>
                      删除会话「石墨主题设计」？此操作不可撤销。
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">取消</Button>
                      </DrawerClose>
                      <Button>确认删除</Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="hovercard">
            <Card>
              <CardContent className="p-6">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="outline">悬停查看模型</Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="rx-anim-popover w-64">
                    <div className="space-y-1.5">
                      <div className="text-sm font-semibold" style={{ color: 'var(--rx-fg)' }}>deepseek-chat</div>
                      <div className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>上下文 128k · ¥0.001/1k tokens</div>
                      <div className="text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>hover 触发 · 180ms 弹出动效</div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="resizable">
            <Card>
              <CardContent className="p-6">
                <ResizablePanelGroup orientation="horizontal" className="h-40 w-full rounded-md border" style={{ borderColor: 'var(--rx-border-soft)' }}>
                  <ResizablePanel defaultSize={35} className="flex items-center justify-center">
                    <span className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>会话列表</span>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={65} className="flex items-center justify-center">
                    <span className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>主面板</span>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="sonner">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="outline" onClick={() => toast('会话已保存')}>基础通知</Button>
                  <Button variant="outline" onClick={() => toast.success('同步完成')}>成功</Button>
                  <Button variant="outline" onClick={() => toast.error('删除失败')}>错误</Button>
                  <Button variant="outline" onClick={() => toast.info('新事件到达')}>信息</Button>
                </div>
                <div className="text-xs" style={{ color: 'var(--rx-fg-faint)' }}>
                  sonner · 右下角弹出 · 主题跟随系统
                </div>
                <Toaster position="bottom-right" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="togglegroup">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <div className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>多选 · 文字排版</div>
                  <ToggleGroup type="multiple" variant="outline">
                    <ToggleGroupItem value="bold" aria-label="粗体"><Bold className="h-3.5 w-3.5" /></ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="斜体"><Italic className="h-3.5 w-3.5" /></ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="下划线"><Underline className="h-3.5 w-3.5" /></ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <div className="space-y-2">
                  <div className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>单选 · 协作模式</div>
                  <ToggleGroup type="single" variant="outline" defaultValue="plan">
                    <ToggleGroupItem value="chat">chat</ToggleGroupItem>
                    <ToggleGroupItem value="plan">plan</ToggleGroupItem>
                    <ToggleGroupItem value="goal">goal</ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="collapsible">
            <Card>
              <CardContent className="p-6">
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <ChevronsUpDown className="h-3.5 w-3.5" /> 展开详情
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-3">
                    <div className="rounded-md border p-4 text-sm" style={{ borderColor: 'var(--rx-border-soft)', color: 'var(--rx-fg-dim)' }}>
                      collapsible 折叠面板：内容按需展开收起，用于收纳次要信息。
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="avatar">
            <Card>
              <CardContent className="flex flex-wrap items-center gap-8 p-6">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="" alt="RX" />
                    <AvatarFallback className="rx-grad text-sm font-semibold" style={{ color: 'var(--rx-accent-fg)' }}>RX</AvatarFallback>
                  </Avatar>
                  <span className="text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>渐变 fallback</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="" alt="DJ" />
                    <AvatarFallback className="text-sm font-semibold" style={{ background: 'var(--rx-bg-elev-2)', color: 'var(--rx-fg-dim)' }}>DJ</AvatarFallback>
                    <AvatarBadge style={{ background: 'var(--rx-ok)' }} />
                  </Avatar>
                  <span className="text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>在线状态点</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="" alt="YY" />
                    <AvatarFallback className="text-sm font-semibold" style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}>YY</AvatarFallback>
                  </Avatar>
                  <span className="text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>柔光 fallback</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="checkbox">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-2">
                  <Checkbox id="ck-terms" defaultChecked />
                  <Label htmlFor="ck-terms" className="text-sm">接受使用条款</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="ck-notify" />
                  <Label htmlFor="ck-notify" className="text-sm">接收事件通知</Label>
                </div>
                <div className="flex items-center gap-2 opacity-60">
                  <Checkbox id="ck-disabled" disabled />
                  <Label htmlFor="ck-disabled" className="text-sm">已禁用（只读）</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="radio">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>审批模式 · 单选三选一</div>
                <RadioGroup defaultValue="auto" className="space-y-3">
                  {[
                    { v: 'ask', t: 'ask', d: '每个操作前都询问，最稳妥' },
                    { v: 'auto', t: 'auto', d: '自动执行常规步骤（推荐）' },
                    { v: 'yolo', t: 'yolo', d: '全速执行，仅关键处拦截' },
                  ].map((o) => (
                    <div key={o.v} className="flex items-center gap-3">
                      <RadioGroupItem value={o.v} id={`r-${o.v}`} />
                      <Label htmlFor={`r-${o.v}`} className="flex-1">
                        <span className="block text-sm">{o.t}</span>
                        <span className="block text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{o.d}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="label">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <Label htmlFor="lb-model" className="text-xs">模型名称</Label>
                  <Input id="lb-model" placeholder="deepseek-chat" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lb-budget" className="text-xs">预算上限（¥）</Label>
                  <Input id="lb-budget" type="number" placeholder="128" />
                </div>
                <div className="text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>
                  Label 通过 htmlFor 绑定 input 的 id，点击文字即可聚焦输入框。
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="dropdown">
            <Card>
              <CardContent className="p-6">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <MoreHorizontal className="h-4 w-4" /> 会话操作
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>我的会话</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><User className="mr-2 h-3.5 w-3.5" /> 个人资料 <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut></DropdownMenuItem>
                    <DropdownMenuItem><Settings className="mr-2 h-3.5 w-3.5" /> 设置 <DropdownMenuShortcut>⌘,</DropdownMenuShortcut></DropdownMenuItem>
                    <DropdownMenuItem><Send className="mr-2 h-3.5 w-3.5" /> 导出记录 <DropdownMenuShortcut>⌘E</DropdownMenuShortcut></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive"><LogOut className="mr-2 h-3.5 w-3.5" /> 退出登录 <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="slider">
            <Card>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--rx-fg-dim)' }}>上下文窗口 · 单值</span>
                    <span className="mono" style={{ color: 'var(--rx-fg)' }}>33%</span>
                  </div>
                  <Slider defaultValue={[33]} max={100} className="w-full" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span style={{ color: 'var(--rx-fg-dim)' }}>双端点范围</span>
                    <span className="mono" style={{ color: 'var(--rx-fg)' }}>25% – 75%</span>
                  </div>
                  <Slider defaultValue={[25, 75]} max={100} step={5} className="w-full" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="toggle">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-2">
                  <div className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>单图标</div>
                  <Toggle aria-label="粗体" defaultPressed><Bold className="h-4 w-4" /></Toggle>
                </div>
                <div className="space-y-2">
                  <div className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>带文本 · outline 变体</div>
                  <Toggle variant="outline" aria-label="斜体"><Italic className="h-4 w-4" /> 斜体</Toggle>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="tooltips">
            <Card>
              <CardContent className="p-6">
                <TooltipProvider delayDuration={150}>
                  <div className="flex flex-wrap items-center gap-3">
                    <Tooltip>
                      <TooltipTrigger asChild><Button variant="outline">上方提示</Button></TooltipTrigger>
                      <TooltipContent className="rx-anim-tooltip">默认上方 · 120ms</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild><Button variant="outline">右侧提示</Button></TooltipTrigger>
                      <TooltipContent side="right" className="rx-anim-tooltip">side=right 朝向</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button type="button" disabled className="cursor-not-allowed rounded-md border px-3 py-1.5 text-xs opacity-60" style={{ borderColor: 'var(--rx-border-soft)', color: 'var(--rx-fg-dim)' }}>禁用态</button>
                      </TooltipTrigger>
                      <TooltipContent className="rx-anim-tooltip">禁用按钮也可提示</TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="scrollarea">
            <Card>
              <CardContent className="p-6">
                <ScrollArea className="h-40 w-full rounded-md border" style={{ borderColor: 'var(--rx-border-soft)' }}>
                  <div className="space-y-1.5 p-3">
                    {[
                      "import { Button } from '@/components/ui/button'",
                      "import { Card, CardContent } from '@/components/ui/card'",
                      "import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'",
                      "import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '@/components/ui/avatar'",
                      "import { Checkbox } from '@/components/ui/checkbox'",
                      "import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'",
                      "import { Label } from '@/components/ui/label'",
                      "import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'",
                      "import { Slider } from '@/components/ui/slider'",
                      "import { Toggle } from '@/components/ui/toggle'",
                      "import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'",
                      "import { ScrollArea } from '@/components/ui/scroll-area'",
                      "import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'",
                      "import { Separator } from '@/components/ui/separator'",
                    ].map((line) => (
                      <div key={line} className="mono text-[11px] leading-relaxed" style={{ color: 'var(--rx-fg-dim)' }}>
                        {line}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="sheet">
            <Card>
              <CardContent className="flex flex-wrap items-center gap-3 p-6">
                <Sheet>
                  <SheetTrigger asChild><Button variant="outline">左侧抽屉</Button></SheetTrigger>
                  <SheetContent side="left" className="w-72">
                    <SheetHeader>
                      <SheetTitle>会话列表</SheetTitle>
                      <SheetDescription>从屏幕左侧滑入 · 340ms</SheetDescription>
                    </SheetHeader>
                    <div className="py-4 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>导航 / 列表内容占位</div>
                  </SheetContent>
                </Sheet>
                <Sheet>
                  <SheetTrigger asChild><Button variant="outline">右侧抽屉</Button></SheetTrigger>
                  <SheetContent side="right" className="w-72">
                    <SheetHeader>
                      <SheetTitle>操作面板</SheetTitle>
                      <SheetDescription>从屏幕右侧滑入 · 340ms</SheetDescription>
                    </SheetHeader>
                    <div className="py-4 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>设置 / 详情内容占位</div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent className="rx-anim-slideup" value="separator">
            <Card>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-2">
                  <div className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>水平分隔线</div>
                  <Separator />
                </div>
                <div className="space-y-2">
                  <div className="text-xs" style={{ color: 'var(--rx-fg-dim)' }}>垂直分隔 · 工具栏</div>
                  <div className="flex items-center gap-3 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>
                    <span>statusbar</span>
                    <Separator orientation="vertical" className="h-3" />
                    <span>dock</span>
                    <Separator orientation="vertical" className="h-3" />
                    <span>transcript</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* ===== 圆角对比 ===== */}
      <section className="mt-10">
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>圆角 · 主题性格第一语言</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { name: 's', val: 'var(--rx-r-s)', d: '按钮 / chip' },
            { name: 'm', val: 'var(--rx-r-m)', d: '输入框 / 卡片' },
            { name: 'l', val: 'var(--rx-r-l)', d: '弹窗 / 面板' },
          ].map((r) => (
            <Card key={r.name}>
              <CardContent className="p-4">
                <div className="h-14 rx-grad" style={{ borderRadius: r.val }} />
                <div className="mono mt-2 text-[11px]" style={{ color: 'var(--rx-fg)' }}>--rx-r-{r.name} = {r.val}</div>
                <div className="text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{r.d}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  return (
    <div className="space-y-2">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-fit rounded-md border"
        style={{ borderColor: 'var(--rx-border-soft)' }}
      />
      <div className="text-xs" style={{ color: 'var(--rx-fg-faint)' }}>
        {date ? `已选日期：${date.toLocaleDateString('zh-CN')}` : '点击选择一个日期'}
      </div>
    </div>
  )
}

function TextareaDemo() {
  const [v, setV] = useState('')
  return (
    <div className="space-y-3">
      <div>
        <div className="mb-1.5 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>指令输入 · Shift+Enter 换行</div>
        <textarea
          value={v}
          onChange={(e) => setV(e.target.value)}
          placeholder="输入指令，Shift+Enter 换行…"
          className="min-h-[110px] w-full resize-none rounded-md border bg-transparent px-3 py-2 text-sm outline-none transition-colors placeholder:text-[var(--rx-fg-faint)] focus-visible:ring-2"
          style={{ borderColor: 'var(--rx-border)', caretColor: 'var(--rx-accent)' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); setV('') }
          }}
        />
        <div className="mono mt-1 text-right text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>
          {v.length} 字符
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="sm" className="rx-grad gap-1.5" style={{ color: 'var(--rx-accent-fg)' }}>
          <Send className="h-3.5 w-3.5" /> 发送
        </Button>
        <Button size="sm" variant="outline">预览</Button>
      </div>
    </div>
  )
}

function CommandDialogDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="outline" className="gap-2" onClick={() => setOpen(true)}>
        <Keyboard className="h-3.5 w-3.5" /> 打开命令面板 <span className="mono text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>Ctrl+K</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="输入命令…" />
        <CommandList>
          <CommandEmpty>无结果</CommandEmpty>
          <CommandGroup heading="会话">
            <CommandItem onSelect={() => setOpen(false)}><MessageSquare className="mr-2 h-3.5 w-3.5" /> 新建会话</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}><FileText className="mr-2 h-3.5 w-3.5" /> 打开文件</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="工具">
            <CommandItem onSelect={() => setOpen(false)}><Sparkles className="mr-2 h-3.5 w-3.5" /> 切换模型</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}><Settings className="mr-2 h-3.5 w-3.5" /> 打开设置</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

/** CopyButton 示例：clipboard API + execCommand 回退（源码 CopyButton.tsx 语义） */
function CopyButtonExample() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    const text = 'const theme = "graphite"'
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }
  return (
    <Button size="sm" variant="outline" className="gap-1.5 text-[11px]" onClick={copy}>
      {copied ? <Check className="h-3 w-3" style={{ color: 'var(--rx-ok)' }} /> : <Copy className="h-3 w-3" />}
      {copied ? '已复制' : '复制'}
    </Button>
  )
}
