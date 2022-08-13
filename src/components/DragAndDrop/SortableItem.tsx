import { UniqueIdentifier } from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React from 'react'

import Item from './Item'

type SortableItemProps = {
  id: UniqueIdentifier;
}

export const SortableItem: React.FC<SortableItemProps> = ({
  children,
  id
}) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id })

  return (
    <Item
      dragHandleProps={{
        ...attributes,
        ...listeners
      }}
      id={id}
      ref={setNodeRef}
      style={{
        opacity: isDragging ? 0 : 1,
        transform: CSS.Transform.toString(transform),
        transition
      }}
    >
      {children}
    </Item>
  )
}
