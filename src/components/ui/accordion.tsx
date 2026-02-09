'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  id: string
  trigger: React.ReactNode
  content: React.ReactNode
  className?: string
}

interface AccordionProps {
  items: AccordionItemProps[]
  className?: string
  defaultOpen?: string
  allowMultiple?: boolean
}

export function Accordion({
  items,
  className,
  defaultOpen,
  allowMultiple = false,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(
    defaultOpen ? new Set([defaultOpen]) : new Set()
  )

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      if (!allowMultiple) {
        newOpenItems.clear()
      }
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            'border border-border/40 rounded-lg overflow-hidden transition-all hover:border-border/60',
            item.className
          )}
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/30 transition-colors text-left"
          >
            <span className="font-medium text-foreground">{item.trigger}</span>
            <ChevronDown
              className={cn(
                'h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0',
                openItems.has(item.id) && 'rotate-180'
              )}
            />
          </button>
          {openItems.has(item.id) && (
            <div className="border-t border-border/40 px-6 py-4 bg-secondary/10 text-muted-foreground">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
