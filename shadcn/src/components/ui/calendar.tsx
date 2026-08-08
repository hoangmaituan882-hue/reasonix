"use client"

import * as React from "react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Locale,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  locale,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      locale={locale}
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      className={cn("p-3", className)}
      classNames={{
        months: cn("flex flex-col gap-2", defaultClassNames.months),
        month: cn("flex flex-col gap-2", defaultClassNames.month),
        month_caption: cn("flex h-7 items-center justify-center", defaultClassNames.month_caption),
        weekdays: cn("flex h-6 items-center", defaultClassNames.weekdays),
        weekday: cn("flex size-7 items-center justify-center text-muted-foreground text-[0.8rem] font-normal", defaultClassNames.weekday),
        month_grid: cn("border-collapse w-full border-spacing-0", defaultClassNames.month_grid),
        week: cn("flex w-full", defaultClassNames.week),
        day: cn("relative size-7 text-center text-sm", defaultClassNames.day),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "relative z-10 flex size-7 items-center justify-center rounded-md p-0 text-sm font-normal opacity-100 hover:bg-accent hover:text-accent-foreground aria-selected:bg-primary aria-selected:text-primary-foreground",
          defaultClassNames.day_button
        ),
        selected: cn("bg-primary text-primary-foreground", defaultClassNames.selected),
        today: cn("bg-muted text-foreground", defaultClassNames.today),
        outside: cn("text-muted-foreground opacity-50", defaultClassNames.outside),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        range_start: cn("bg-primary text-primary-foreground rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none bg-muted", defaultClassNames.range_middle),
        range_end: cn("bg-primary text-primary-foreground rounded-r-md", defaultClassNames.range_end),
        ...classNames,
      }}
      components={{
        Chevron: ({ className, orientation, ...props }) => {
          const Icon =
            orientation === "left"
              ? ChevronLeftIcon
              : orientation === "right"
                ? ChevronRightIcon
                : ChevronDownIcon
          return (
            <Icon
              className={cn(
                orientation === "left" || orientation === "right" ? "size-4" : "size-4",
                className
              )}
              {...props}
            />
          )
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <Button
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "relative z-10 flex aspect-square size-auto w-full flex-col gap-1 border-0 leading-none font-normal",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
