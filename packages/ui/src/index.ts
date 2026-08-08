/* ============================================================
 * @reasonix/ui — 统一导出入口
 * 38 个组件 + cn 工具 + 主题令牌（styles.css）
 * ============================================================ */

/* ---------- 基础 ---------- */
export { Button, buttonVariants } from "./components/ui/button"
export { Badge, badgeVariants } from "./components/ui/badge"
export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
export { Skeleton } from "./components/ui/skeleton"
export { Separator } from "./components/ui/separator"
export { Label } from "./components/ui/label"
export { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "./components/ui/avatar"

/* ---------- 表单 ---------- */
export { Input } from "./components/ui/input"
export { Textarea } from "./components/ui/textarea"
export { Checkbox } from "./components/ui/checkbox"
export { RadioGroup, RadioGroupItem } from "./components/ui/radio-group"
export { Switch } from "./components/ui/switch"
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from "./components/ui/select"
export { Slider } from "./components/ui/slider"
export { Toggle, toggleVariants } from "./components/ui/toggle"
export { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group"
export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from "./components/ui/input-group"
export { Progress } from "./components/ui/progress"

/* ---------- 数据展示 ---------- */
export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./components/ui/table"
export { Calendar, CalendarDayButton } from "./components/ui/calendar"
export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel } from "./components/ui/carousel"
export type { CarouselApi } from "./components/ui/carousel"
export { ScrollArea, ScrollBar } from "./components/ui/scroll-area"
export { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./components/ui/resizable"
export { Toaster } from "./components/ui/sonner"

/* ---------- 反馈 ---------- */
export { Alert, AlertAction, AlertDescription, AlertTitle } from "./components/ui/alert"
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "./components/ui/dialog"
export { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger } from "./components/ui/drawer"
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./components/ui/sheet"
export { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "./components/ui/command"
export { Popover, PopoverAnchor, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "./components/ui/popover"
export { HoverCard, HoverCardContent, HoverCardTrigger } from "./components/ui/hover-card"
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./components/ui/tooltip"
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./components/ui/dropdown-menu"

/* ---------- 导航 ---------- */
export { Tabs, TabsContent, TabsList, TabsTrigger, tabsListVariants } from "./components/ui/tabs"
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion"
export { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./components/ui/collapsible"
export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./components/ui/breadcrumb"
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./components/ui/pagination"

/* ---------- 工具 ---------- */
export { cn } from "./lib/utils"
