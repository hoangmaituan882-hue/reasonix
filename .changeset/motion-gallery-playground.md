---
"@reasonix/ui": minor
---

### 动效画廊（showcase）

- 33 个动效场景每卡新增 playground 属性控制：
  - 倍速选择（0.5×/1×/1.5×/2×）已有
  - **时长滑块**（10%–300%，实时覆盖默认时长，标签显示实际 ms 与百分比）
  - **缓动覆盖下拉**（默认/标准/overshoot 弹跳/decelerate 减速/linear，显示实际 cubic-bezier）
- 时长/缓动标注改为实时值（`effectiveDur` + 实际 easing），与舞台动画一致
