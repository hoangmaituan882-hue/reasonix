// 过渡画廊 19-27 号过渡的真实可动画 demo HTML（与 transition-catalog.ts / transition-global.ts 的 CSS 选择器严格对齐）
// trigger 契约：
//   hover        → 纯 CSS :hover（pointer 事件由 demo JS 编排，HTML 无需状态标记）
//   data-open    → 播放时设置元素 data-open="true"（初始 false 即未触发态）
//   is-open      → 播放时给元素添加/移除 is-open 类（初始带 is-open 保证舞台可见，重放时先 remove 再 add）
//   data-liked   → 播放时设置 data-liked="true" 并添加 is-bursting 类触发粒子爆裂
//   data-on      → 播放时设置 data-on="true" 并添加 is-init 类触发滑块 overshoot 动画
//   is-animating → 无状态重放：播放时移除后再添加 is-animating 类（25/26 自带内联 <style> 定义该触发下的动画）
export interface TransitionDemo3 {
  html: string
  trigger: 'hover' | 'data-open' | 'is-open' | 'data-liked' | 'data-on' | 'is-animating'
}

export const TRANSITION_DEMOS_3: Record<string, TransitionDemo3> = {
  // 19 卡片倾斜 — t-tilt：外层 .t-tilt 是平面命中区，内层 .t-tilt-card 随指针 rotateX/rotateY，.t-tilt-glare 跟随光标的高光
  '19-card-tilt': {
    trigger: 'hover',
    html: `
<div class="t-tilt" style="width:224px;height:132px;--tilt-perspective:1000px;--tilt-return:1000ms;--tilt-return-ease:cubic-bezier(0.22,1,0.36,1);--tilt-follow:400ms;--tilt-follow-ease:linear;--tilt-glare-opacity:0.32;--tilt-glare-fade:300ms;--tilt-glare-ease:cubic-bezier(0.22,1,0.36,1)">
  <div class="t-tilt-card" style="width:100%;height:100%;box-sizing:border-box;background:linear-gradient(135deg,#6366f1 0%,#a855f7 55%,#ec4899 120%);display:flex;flex-direction:column;justify-content:space-between;padding:16px;color:#fff">
    <div>
      <div style="font-size:15px;font-weight:700;letter-spacing:.2px">Reasonix Pro</div>
      <div style="font-size:11px;opacity:.85;margin-top:2px">过渡动画设计系统</div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between">
      <span style="font-size:11px;opacity:.9">&#10022; 3D hover tilt</span>
      <span style="font-size:12px;font-weight:700">悬停倾斜</span>
    </div>
    <div class="t-tilt-glare"></div>
  </div>
</div>`,
  },

  // 20 加号变形菜单 — t-morph：40px 圆形按钮 morph 成 183x172 面板，加号淡出滑走并旋转成 ×
  '20-plus-menu-morph': {
    trigger: 'data-open',
    html: `
<div class="t-morph" data-open="false" style="background:#6366f1;box-shadow:0 10px 24px rgba(99,102,241,.4);--morph-open-dur:350ms;--morph-close-dur:250ms;--morph-ease:cubic-bezier(0.22,1,0.36,1);--morph-close-ease:cubic-bezier(0.4,0,1,1);--morph-r-closed:40px;--morph-r-open:20px;--morph-fade-dur:200ms;--morph-slide:40px;--morph-blur:2px;--morph-scale:0.85;--morph-rotate:-90deg">
  <div class="t-morph-menu" style="display:flex;flex-direction:column;justify-content:center;gap:4px;padding:14px 12px 52px;box-sizing:border-box">
    <span style="display:flex;align-items:center;gap:9px;color:#fff;font-size:12.5px;font-weight:600;padding:7px 10px;border-radius:8px;transition:background .15s">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
      <span style="white-space:nowrap">新建笔记</span>
    </span>
    <span style="display:flex;align-items:center;gap:9px;color:rgba(255,255,255,.85);font-size:12.5px;font-weight:500;padding:7px 10px;border-radius:8px;transition:background .15s">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/></svg>
      <span style="white-space:nowrap">上传文件</span>
    </span>
    <span style="display:flex;align-items:center;gap:9px;color:rgba(255,255,255,.85);font-size:12.5px;font-weight:500;padding:7px 10px;border-radius:8px;transition:background .15s">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/></svg>
      <span style="white-space:nowrap">录音备忘</span>
    </span>
  </div>
  <button class="t-morph-plus" aria-expanded="false" aria-label="添加">
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path d="M8 2V14" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
      <path d="M2 8H14" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </button>
</div>`,
  },

  // 21 手风琴 — t-acc：0fr→1fr 网格高度动画，chevron 垂直翻转
  '21-accordion': {
    trigger: 'data-open',
    html: `
<div class="t-acc" data-open="false" style="width:248px;border:1px solid var(--rx-border-soft);border-radius:12px;background:var(--rx-bg-elev);overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,.06);--acc-expand:250ms;--acc-collapse:250ms;--acc-chevron:250ms;--acc-ease:cubic-bezier(0.22,1,0.36,1)">
  <button class="t-acc-head" aria-expanded="false" style="display:flex;width:100%;align-items:center;justify-content:space-between;gap:10px;padding:12px 14px;border:0;background:transparent;color:var(--rx-fg);cursor:pointer;text-align:left">
    <span style="font-size:13px;font-weight:600">手风琴过渡如何工作？</span>
    <span class="t-acc-chevron">
      <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 6.5L8 10.5L12 6.5" fill="none" stroke="var(--rx-fg-dim)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </span>
  </button>
  <div class="t-acc-panel">
    <div class="t-acc-panel-inner" style="padding:0 14px 14px;color:var(--rx-fg-dim);font-size:12px;line-height:1.65">
      面板高度用 grid-template-rows 从 0fr 过渡到 1fr，无需 JS 测量；内容同时淡入并消除模糊。
    </div>
  </div>
</div>`,
  },

  // 22 通知条 — t-toast：从底部滑入（translateY + fade + scale + blur）
  '22-toast': {
    trigger: 'is-open',
    html: `
<div class="t-toast is-open" style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:12px;background:#18181b;color:#fff;box-shadow:0 10px 28px rgba(0,0,0,.3);--toast-open:350ms;--toast-close:250ms;--toast-distance:16px;--toast-blur:2px;--toast-scale:0.97;--toast-ease:cubic-bezier(0.22,1,0.36,1)">
  <span style="display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#22c55e;color:#fff;font-size:12px;font-weight:700">&#10003;</span>
  <span style="font-size:13px;font-weight:600">已保存到草稿</span>
  <span style="margin-left:6px;font-size:11px;opacity:.55">撤销</span>
</div>`,
  },

  // 23 点赞心形 — t-like：空心 → 实心填色 + 弹跳 pop + 8 粒子爆裂
  '23-like-button': {
    trigger: 'data-liked',
    html: `
<button class="t-like" data-liked="false" style="position:relative;display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border:1px solid var(--rx-border);border-radius:999px;background:var(--rx-bg-elev);color:var(--rx-fg);cursor:pointer;font-size:13px;font-weight:600;--like-color:#f40051;--like-fill:150ms;--like-pop:350ms;--like-pop-ease:cubic-bezier(0.34,1.56,0.64,1);--like-particle-dur:600ms;--like-particle-size:2.5px;--like-ease:cubic-bezier(0.22,1,0.36,1)">
  <span class="t-like-icon" style="display:inline-flex">
    <svg class="t-like-heart" width="18" height="18" viewBox="0 0 24 24"><path d="M12 20.5C6.5 16 3 12.9 3 8.8 3 6 5.2 4 7.9 4c1.7 0 3.2.8 4.1 2.1C12.9 4.8 14.4 4 16.1 4c2.7 0 4.9 2 4.9 4.8 0 4.1-3.5 7.2-9 11.7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
  </span>
  <span>喜欢</span>
  <span class="t-like-particles">
    <i style="--px:0px;--py:-20px;--psize:1;--pdelay:0ms"></i>
    <i style="--px:14px;--py:-14px;--psize:1.2;--pdelay:8ms"></i>
    <i style="--px:20px;--py:0px;--psize:0.9;--pdelay:16ms"></i>
    <i style="--px:14px;--py:14px;--psize:1.1;--pdelay:24ms"></i>
    <i style="--px:0px;--py:20px;--psize:0.8;--pdelay:32ms"></i>
    <i style="--px:-14px;--py:14px;--psize:1.3;--pdelay:40ms"></i>
    <i style="--px:-20px;--py:0px;--psize:1;--pdelay:48ms"></i>
    <i style="--px:-14px;--py:-14px;--psize:1.2;--pdelay:56ms"></i>
  </span>
</button>`,
  },

  // 24 了解更多悬停 — t-learn：chevron 向右滑 + 两臂向外张开
  '24-learn-more-hover': {
    trigger: 'hover',
    html: `
<button class="t-learn" style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border:0;background:transparent;color:var(--rx-accent);cursor:pointer;font-size:14px;font-weight:600;--learn-shift:2px;--learn-spread:8deg;--learn-in:350ms;--learn-out:350ms;--learn-ease:cubic-bezier(0.22,1,0.36,1)">
  了解更多
  <span class="t-learn-chevron">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <path class="t-learn-arm t-learn-arm-top" d="M6 4L10 8"/>
      <path class="t-learn-arm t-learn-arm-bot" d="M10 8L6 12"/>
    </svg>
  </span>
</button>`,
  },

  // 25 复选框勾选 — t-check：path 描边 dashoffset 画出勾；内嵌真实 input + 勾选图形
  // 播放驱动：添加 is-animating 类（或同步设置 aria-checked="true"），勾选图形由下方内联样式触发
  '25-checkbox-check': {
    trigger: 'is-animating',
    html: `
<style>
  .t-check {
    display:inline-flex;align-items:center;justify-content:center;
    width:22px;height:22px;border-radius:6px;
    background:var(--rx-bg-elev);border:1.5px solid var(--rx-border);cursor:pointer;
  }
  .t-check[aria-checked="true"],
  .t-check.is-animating { background:var(--rx-accent);border-color:var(--rx-accent); }
  .t-check[aria-checked="true"] svg path,
  .t-check.is-animating svg path { stroke-dashoffset:0 !important; transition:stroke-dashoffset 350ms cubic-bezier(.22,1,.36,1) !important; }
</style>
<label style="display:inline-flex;align-items:center;gap:10px;cursor:pointer;color:var(--rx-fg);font-size:13px">
  <input type="checkbox" style="position:absolute;width:1px;height:1px;opacity:0" />
  <span class="t-check" role="checkbox" aria-checked="false" aria-label="订阅">
    <svg viewBox="0 0 10.1668 10.1668" width="12" height="12">
      <path d="M1 5.52L3.92 9.17L9.17 1" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
  订阅通知
</label>`,
  },

  // 26 数字滚动 — t-reel：每列 0-9 竖向 reel，初始定位到 12,480；is-animating 时从 0 滚到目标
  '26-spinning-counter': {
    trigger: 'is-animating',
    html: `
<style>
  @keyframes t-reel-spin {
    from { transform: translateY(0); }
    to   { transform: var(--reel-to); }
  }
  .t-reel.is-animating .t-reel-strip {
    animation: t-reel-spin var(--reel-dur, 1.4s) cubic-bezier(.16,1,.3,1) both;
  }
</style>
<div class="t-reel" style="gap:2px;font-size:22px;font-weight:700;color:var(--rx-fg);--reel-cell:30px;--reel-to:6;--reel-dur:800ms;--reel-ease:cubic-bezier(0.22,1,0.36,1)">
  <div class="t-reel-col"><div class="t-reel-strip" style="transform:translateY(-30px);--reel-to:translateY(-30px)">
    <span class="t-reel-digit">0</span><span class="t-reel-digit">1</span><span class="t-reel-digit">2</span><span class="t-reel-digit">3</span><span class="t-reel-digit">4</span><span class="t-reel-digit">5</span><span class="t-reel-digit">6</span><span class="t-reel-digit">7</span><span class="t-reel-digit">8</span><span class="t-reel-digit">9</span>
  </div></div>
  <div class="t-reel-col"><div class="t-reel-strip" style="transform:translateY(-60px);--reel-to:translateY(-60px)">
    <span class="t-reel-digit">0</span><span class="t-reel-digit">1</span><span class="t-reel-digit">2</span><span class="t-reel-digit">3</span><span class="t-reel-digit">4</span><span class="t-reel-digit">5</span><span class="t-reel-digit">6</span><span class="t-reel-digit">7</span><span class="t-reel-digit">8</span><span class="t-reel-digit">9</span>
  </div></div>
  <div class="t-reel-col"><div class="t-reel-strip" style="--reel-to:translateY(0)">
    <span class="t-reel-digit">,</span>
  </div></div>
  <div class="t-reel-col"><div class="t-reel-strip" style="transform:translateY(-120px);--reel-to:translateY(-120px)">
    <span class="t-reel-digit">0</span><span class="t-reel-digit">1</span><span class="t-reel-digit">2</span><span class="t-reel-digit">3</span><span class="t-reel-digit">4</span><span class="t-reel-digit">5</span><span class="t-reel-digit">6</span><span class="t-reel-digit">7</span><span class="t-reel-digit">8</span><span class="t-reel-digit">9</span>
  </div></div>
  <div class="t-reel-col"><div class="t-reel-strip" style="transform:translateY(-240px);--reel-to:translateY(-240px)">
    <span class="t-reel-digit">0</span><span class="t-reel-digit">1</span><span class="t-reel-digit">2</span><span class="t-reel-digit">3</span><span class="t-reel-digit">4</span><span class="t-reel-digit">5</span><span class="t-reel-digit">6</span><span class="t-reel-digit">7</span><span class="t-reel-digit">8</span><span class="t-reel-digit">9</span>
  </div></div>
  <div class="t-reel-col"><div class="t-reel-strip" style="--reel-to:translateY(0)">
    <span class="t-reel-digit">0</span><span class="t-reel-digit">1</span><span class="t-reel-digit">2</span><span class="t-reel-digit">3</span><span class="t-reel-digit">4</span><span class="t-reel-digit">5</span><span class="t-reel-digit">6</span><span class="t-reel-digit">7</span><span class="t-reel-digit">8</span><span class="t-reel-digit">9</span>
  </div></div>
</div>`,
  },

  // 27 开关 — t-toggle：thumb 沿轨道两段 overshoot 滑动，track 背景过渡
  '27-toggle': {
    trigger: 'data-on',
    html: `
<style>
  .t-toggle[data-on="true"] { background: var(--rx-accent); }
  .t-toggle[data-on="false"] { background: #d4d4d8; }
</style>
<button class="t-toggle" role="switch" data-on="false" aria-label="切换开关" style="position:relative;width:38px;height:22px;border-radius:999px;border:0;cursor:pointer;--toggle-travel:16px;--toggle-track:250ms;--toggle-dur:350ms;--toggle-ov1:1px;--toggle-ov2:0px;--toggle-ease:cubic-bezier(0.34,1.56,0.64,1)">
  <span class="t-toggle-thumb" style="position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.3)"></span>
</button>`,
  },
}
