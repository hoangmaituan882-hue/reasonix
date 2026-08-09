// 组件设计使用建议 —— 38 个组件手写（引用 DESIGN.md 令牌/动效/可访问性规则）
// 由多代理协作撰写，生成器 gen-stories.mjs 读取本数据生成 docs 描述
export interface Guidance {
  /** 何时使用（一段话） */
  whenUse: string
  /** 设计要点（3-5 条） */
  points: string[]
  /** 避免误用（可选 1-2 条） */
  avoid?: string[]
}

export const COMPONENT_GUIDANCE: Record<string, Guidance> = {
  button: {
    whenUse: '触发操作的主要入口。优先用 Button 承载页面级动作，避免链接式跳转用按钮、按钮式提交用链接。',
    points: [
      '层级靠色彩而非尺寸：primary=accent 实底、secondary 灰底、outline 描边、ghost 幽灵（DESIGN.md §4）',
      '危险操作用 destructive 变体（`--err` 语义色），禁用的按钮不触发也不可聚焦',
      'hover 反馈 120ms（`--rx-dur-fast`），按下 `active:scale(0.97)` 微缩放',
      '图标按钮必须带 aria-label；纯图标时用 icon size 保证点击热区 32px+',
    ],
    avoid: ['不要在 primary 上叠加渐变（CTA 渐变是独立场景，见 rx-grad）'],
  },
  badge: {
    whenUse: '标记状态、分类或计数的短文本徽章，是"只读标签"不是交互入口。',
    points: [
      '26px 高 / 999px 圆角（DESIGN.md §4 pill 规则），text-xs 不换行',
      '状态色优先语义：success/警告/错误用 `--ok`/`--warn`/`--err` 体系而非自定义',
      '徽章文字需对比度达标：亮色底配深字，暗色底配浅字',
    ],
  },
  card: {
    whenUse: '内容分组的容器，承载一组相关信息与操作；适合仪表盘、列表项、设置面板。',
    points: [
      '卡片内边距用 `--rx-r-m`（8px）圆角，边框 `--rx-border-soft` 发丝描边（DESIGN.md §3）',
      '卡片可作为可点击容器，但内部交互按钮要避免嵌套点击冲突',
      '一组卡片对齐：同高、同圆角、同内边距，视觉节奏一致',
    ],
  },
  input: {
    whenUse: '单行文本输入，用于短数据（名称/邮箱/搜索词）。多行长文本用 Textarea。',
    points: [
      '输入框高度 32px，边框 `--input`，聚焦 ring 用 accent 色（focus-visible:ring）',
      '错误态用 aria-invalid + destructive 边框，配文字说明（不只靠颜色）',
      'placeholder 不是标签替代：必填项仍需 Label（DESIGN.md §2.4）',
    ],
  },
  label: {
    whenUse: '表单控件的可访问标签，点击可聚焦关联控件（htmlFor）。',
    points: [
      '与 Input/Select/Checkbox 搭配使用，`htmlFor` 指向控件 id',
      'label 文字用 `--rx-fg-dim` 次级色，与正文区分',
      '纯装饰性文字不要用 Label（用 span），避免误导辅助技术',
    ],
  },
  separator: {
    whenUse: '分隔内容区块的细线；视觉分组而非语义分组时使用。',
    points: [
      '默认 horizontal；垂直布局用 orientation="vertical"',
      '颜色 `--rx-border-soft` 发丝级别，不喧宾夺主',
      'decorative 默认隐藏于可访问性树，纯装饰无需读屏',
    ],
  },
  skeleton: {
    whenUse: '内容加载中的占位骨架，减少布局跳动（CLS）。',
    points: [
      '形状尽量贴近真实内容（文字条/图片块），宽度用百分比模拟',
      'shimmer 流光 5s 循环（`--rx-shimmer`），reduced-motion 下自动静止',
      '加载完成后移除，不要与真实内容同时渲染',
    ],
  },
  avatar: {
    whenUse: '用户/实体的头像展示，可含图片或文字回退。',
    points: [
      '尺寸档 sm/default/lg 对应 24/32/40px，保持圆形',
      '图片加载失败用 AvatarFallback 回退（首字母/图标），离线也可用',
      '头像在列表中的对齐：与首行文字基线对齐',
    ],
  },
  tooltip: {
    whenUse: '悬停/聚焦时补充简短说明；不适合承载关键操作或长文本。',
    points: [
      '120ms 延迟展开（`--rx-dur-fast`），进出自如不粘滞',
      '内容 1-3 词最佳；超过 20 字改用 Popover 或帮助文本',
      '键盘聚焦也要能触发（TooltipTrigger 可聚焦）',
    ],
    avoid: ['不要把按钮的完整说明塞进 tooltip，用户看不到时功能不可用'],
  },
  checkbox: {
    whenUse: '多选或"是/否"开关场景；一组相关选项用 Checkbox 组。',
    points: [
      '选中态用 accent 实底 + 勾；半选 `checked="indeterminate"` 表示部分子项选中',
      '点击区域：`after:-inset-*` 扩大热区到 32px+（触屏友好）',
      '选项组用 Fieldset+Legend 或 aria-label 分组（可访问性）',
    ],
  },
  'radio-group': {
    whenUse: '互斥单选（2-7 个选项）；多于 7 个用 Select。',
    points: [
      '垂直排列最易扫读；水平排列仅限 2-3 个短选项',
      '选中态 accent 圆点 + 环，禁用项整体降透明度',
      '必选时组内默认选中一项，避免"空选择"歧义',
    ],
  },
  switch: {
    whenUse: '即时生效的设置开关（如明暗切换、通知开关），与表单提交无关。',
    points: [
      '开关即时生效，不要"保存后生效"——那是 Checkbox 的语义',
      'pill 变体：unchecked 太阳渐变 / checked 月牙（`--rx-accent` 底）',
      '用 aria-label 描述开关含义（如"暗色模式"），不只靠视觉',
    ],
  },
  select: {
    whenUse: '从预设列表选一个值；选项多/可搜索时用 Command，选项少（≤5）用 Radio。',
    points: [
      '触发按钮显示当前值 + 占位符（data-placeholder 弱色）',
      '选项列表 origin 对齐触发元素（popper），z-index 按 §5.1 刻度',
      '受控场景传 value + onValueChange；禁用的选项用 disabled',
    ],
  },
  slider: {
    whenUse: '连续值/大范围调整（音量、透明度、缩放）；精确输入用 Input number。',
    points: [
      '显示当前值（右侧或 tooltip），让调整有反馈',
      '离散档位（如 1-5 星）用 step 对齐，避免中间值',
      '键盘方向键可调是基本要求（radix 自带）',
    ],
  },
  toggle: {
    whenUse: '一对互斥视图切换（如"列表/网格"、"编辑/预览"）；状态即时可见。',
    points: [
      '按下态 `aria-pressed` + muted 底，与 Switch 不同（Switch 是二值开关）',
      '多组 toggle 用 ToggleGroup 保持键盘导航一致',
      '图标+文字并存时图标 16px 对齐',
    ],
  },
  'toggle-group': {
    whenUse: '一组互斥/多选的工具条（富文本工具栏、视图切换）。',
    points: [
      'type="single" 互斥 / type="multiple" 多选，按键导航一致',
      '工具栏内组件紧凑（gap-1），聚焦 ring 清晰可见',
      '选中的项要有明显状态（muted 底 + aria-pressed）',
    ],
  },
  textarea: {
    whenUse: '多行文本输入（描述、评论、代码）；高度可随内容 field-sizing 自适应。',
    points: [
      'min-h 保证可见输入区，max-h + 滚动防过度拉伸',
      '错误态 aria-invalid + 说明文字，placeholder 不替代标签',
      '长表单中 Textarea 用等宽字体场景（代码）时切换 font-mono',
    ],
  },
  'input-group': {
    whenUse: '输入框与前缀/后缀组合（单位、按钮、图标）；如搜索框+按钮、金额+货币符号。',
    points: [
      'Addon 用 `--rx-bg-soft` 底区分输入区；Button 位用 InputGroupButton',
      '组合整体一个圆角轮廓（rounded-lg），内部无重复描边',
      '内部控件尺寸统一（h-8），避免错位',
    ],
  },
  table: {
    whenUse: '结构化数据展示，支持列对齐与扫描；数据量大时配合虚拟滚动。',
    points: [
      '表头 `--rx-fg-dim` 次级色 + 底部 border；单元格 `--rx-fg`',
      '数字列右对齐 + tabular-nums，文本列左对齐',
      '行 hover 用 muted 底提示可交互；可排序列加箭头指示',
      '响应式：窄屏时允许横向滚动而非挤压列',
    ],
  },
  progress: {
    whenUse: '任务进度反馈（上传、处理、加载百分比）。',
    points: [
      '进度变化过渡 `transition-[width]` 180ms，不跳变',
      '不确定时（未知总量）用循环动效而非卡在 50%',
      '给进度条加 aria-label + aria-valuenow（可访问性）',
    ],
  },
  calendar: {
    whenUse: '日期选择（单日/区间/多选）；表单内日期输入用 Calendar + Popover 组合。',
    points: [
      'mode 决定 selected 类型：single=Date / range=DateRange / multiple=Date[]',
      '今天/选中/区间用 accent 语义区分，外部日期弱化',
      '键盘导航（方向键+回车）radix 自带；移动端考虑原生 input[type=date]',
    ],
  },
  carousel: {
    whenUse: '横向内容轮播（图片、卡片）；内容少（≤4）直接网格排列更好。',
    points: [
      'Previous/Next 用 static 定位避免溢出；可加 dots 指示当前项',
      '自动播放慎重：用户悬停/聚焦时暂停，reduced-motion 下不播',
      '首尾循环需明确语义（loop），否则用边界禁用',
    ],
  },
  tabs: {
    whenUse: '同级内容分页查看，切换不丢失状态；导航层级不同用路由/侧边栏。',
    points: [
      '激活 tab 用 accent 文字 + 下划线/底（variant=default 或 line）',
      '键盘左右切换（radix 自带），激活 tab 进入 tab 序',
      '内容切换动画 `rx-anim-slideup` 180ms，仅 transform/opacity',
      'tab 内容若需保持状态（表单），用 forceMount 或受控 value',
    ],
  },
  'scroll-area': {
    whenUse: '自定义滚动区域（保留圆角、隐藏系统滚动条）；全局页面滚动不需要。',
    points: [
      '滚动条 10px、thumb 半透明 `--fg-faint` 42%，hover 加深（DESIGN.md §4）',
      '配合 max-h 让内容真正溢出，否则无滚动意义',
      '虚拟列表场景可配合 useScroll 定位',
    ],
  },
  resizable: {
    whenUse: '可拖拽调整尺寸的面板（IDE、预览+编辑分栏）。',
    points: [
      'defaultSize 百分比 + minSize 防面板塌陷',
      '拖拽手柄视觉：`--rx-border` 细线 + hover 高亮，拖拽中加指示',
      '窄屏时降级为堆叠（面板组 responsive）',
    ],
  },
  alert: {
    whenUse: '页面级重要信息（成功/警告/错误），需用户注意但不打断流程。',
    points: [
      'destructive 变体配 `--err` 语义色；图标 + 标题 + 描述结构',
      'Alert 是静态说明；需要用户确认/操作时用 Dialog',
      '错误信息要可行动：说明发生了什么 + 下一步',
    ],
  },
  dialog: {
    whenUse: '需要用户聚焦的模态操作（确认、表单、详情）；非阻断信息用 Popover/Alert。',
    points: [
      '入场 220ms（`--rx-dur-mid`）zoom-in-95 + fade，遮罩 420ms 淡入',
      '标题必填（DialogTitle），描述可选；ESC 关闭 + 点击遮罩关闭',
      '内容过长时 DialogContent 内滚动，不撑满视口',
      '表单型 Dialog 关闭前校验，避免误关丢数据',
    ],
    avoid: ['嵌套 Dialog 体验差，改用独立页面或 Drawer'],
  },
  drawer: {
    whenUse: '侧滑面板展示详情/编辑，保留上下文（列表→详情）；移动端尤其合适。',
    points: [
      '从屏幕边缘滑入 340ms（`--rx-dur-slow`），方向与内容语义一致',
      'shouldScaleBackground 可选：背景缩放制造层级感',
      '内部滚动区 max-h 控制，避免溢出视口',
      'DrawerTitle 必填（可访问性）；ESC 关闭',
    ],
  },
  sheet: {
    whenUse: '与 Drawer 同族的侧滑面板，但面向桌面端设置/筛选场景。',
    points: [
      '左右抽屉满宽 340ms 滑入（slide-in-from-*-full），对称滑出',
      'content 宽度 3/4（sm:max-w-sm），内容区可滚动',
      '与 Dialog 二选一：需要保留上下文用 Sheet，需要聚焦用 Dialog',
    ],
  },
  sonner: {
    whenUse: '全局轻提示（操作成功/失败），自动消失，不打断流程。',
    points: [
      'Toaster 挂载在应用根部一次；toast() 调用即触发',
      '位置 bottom-right 默认；主题跟随 .dark class 自动切换',
      'toast 文案：动词开头 + 结果（"已保存"），配图标',
      '批量操作合并提示，避免每项一条 toast 刷屏',
    ],
  },
  command: {
    whenUse: '命令面板/搜索（Cmd+K 呼出），快速导航或执行动作。',
    points: [
      'CommandDialog 组合为模态搜索；输入即过滤（cmdk）',
      '分组 + 空态提示（CommandEmpty）必须有，无结果时引导',
      '键盘：方向键导航 + 回车执行 + ESC 关闭（cmdk 内置）',
      '命令项用图标+文字+快捷键提示右对齐',
    ],
  },
  popover: {
    whenUse: '轻量浮层（筛选、日期、操作菜单），点击外部关闭，非阻断。',
    points: [
      '180ms 弹出（`--rx-dur-base`）scale .985 + rise 4px（§5.0.2 规则）',
      '内容≤6 项/短表单；复杂内容用 Dialog',
      'Trigger aria-expanded 表达展开状态；ESC 关闭',
    ],
  },
  'hover-card': {
    whenUse: '悬停展示预览（用户卡片、链接摘要、数据详情），补充信息非关键。',
    points: [
      '延迟触发（默认 700ms 可调 delayDuration），避免误触',
      '内容只读预览；需要交互（点击按钮）改用 Popover',
      '移动端无 hover，需提供替代入口（点击触发）',
    ],
  },
  'dropdown-menu': {
    whenUse: '触发按钮后的操作列表（更多操作、用户菜单）；动作数量 3-8 个。',
    points: [
      '120ms 弹出（`--rx-dur-fast`），origin 对齐触发元素',
      '危险操作（删除）放列表底部，配 destructive 样式',
      '分组用 Label + Separator；长列表滚动（max-h）',
      '键盘上下导航 + 回车执行（radix 内置）',
    ],
  },
  breadcrumb: {
    whenUse: '展示页面层级路径（首页 > 分类 > 当前），辅助导航与回退。',
    points: [
      '当前页用 BreadcrumbPage（非链接），祖先用 Link',
      '分隔符 `>` 默认；层级浅（≤3）时面包屑可省略',
      '移动端折叠为"返回上一级"单链',
    ],
  },
  pagination: {
    whenUse: '长列表分页导航（页数多时）；数据少/无限滚动场景不用。',
    points: [
      'Previous/Next 语义链接 + 页码链接（aria-current 标记当前页）',
      '总页数大时用省略号（Ellipsis）压缩中间页码',
      '页码变化需有内容反馈（滚动到列表顶部）',
    ],
  },
  accordion: {
    whenUse: '垂直折叠的内容分组（FAQ、设置分区）；每次展开一项时用 type="single"。',
    points: [
      '触发器 hover 下划线提示可交互；展开箭头 180° 旋转（120ms）',
      'type="single" collapsible 允许全部收起；multiple 独立展开',
      '内容动画只动 height（radix 内置），reduced-motion 下瞬时展开',
    ],
  },
  collapsible: {
    whenUse: '局部内容展开/收起（筛选区、高级选项）；与 Accordion 的区别是单个独立折叠。',
    points: [
      'Trigger 用 aria-expanded 表达状态；内容区动画高度过渡',
      '默认收起隐藏次要信息，展开项保持用户选择（受控）',
      '内容复杂时收起状态只留摘要，避免"隐藏关键操作"',
    ],
  },
}
