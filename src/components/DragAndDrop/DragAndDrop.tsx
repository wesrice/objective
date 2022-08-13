import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  restrictToVerticalAxis,
  restrictToWindowEdges
} from '@dnd-kit/modifiers'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import React, { useState } from 'react'

import Item from './Item'
import { SortableItem } from './SortableItem'

type DragAndDropProps<T> = {
  items: T[]
}

export const DragAndDrop = <T extends {
  children: React.ReactNode;
  id: UniqueIdentifier;
}, >({
    items: itemsProp
  }: DragAndDropProps<T>) => {
  const [activeItem, setActiveItem] = useState<T | null>(null)
  const [items, setItems] = useState<T[]>(itemsProp)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event

    setActiveItem(
      items.find(item => item.id === active.id) || null
    )
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) {
      return setActiveItem(null)
    }

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }

    setActiveItem(null)
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      sensors={sensors}
    >
      <SortableContext
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {items.map(item => (
          <SortableItem
            id={item.id}
            key={item.id}
          >
            {item.children}
          </SortableItem>
        ))}
      </SortableContext>
      <DragOverlay
        modifiers={[restrictToWindowEdges]}
      >
        {activeItem
          ? (
            <Item
              {...activeItem}
              itemId={activeItem.id}
            />
          )
          : null}
      </DragOverlay>
    </DndContext>
  )
}
