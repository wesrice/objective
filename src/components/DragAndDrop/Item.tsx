import {
  Box,
  Card,
  CardProps,
  DragHandle
} from '@contentful/f36-components'
import { UniqueIdentifier } from '@dnd-kit/core'
import React, { forwardRef } from 'react'

type ItemProps = Omit<CardProps, 'id'> & {
  dragHandleProps?: any;
  id: UniqueIdentifier;
}

const Item: React.ForwardRefRenderFunction<any, ItemProps> = (
  { id, children, dragHandleProps = {}, ...props },
  ref
) => {
  return (
    <Card
      {...props}
      data-item-id={id}
      dragHandleRender={() => (
        <DragHandle
          {...dragHandleProps}
          as="button"
          label="Move card"
          style={{
            alignSelf: 'stretch'
          }}
        />
      )}
      padding="none"
      ref={ref}
      withDragHandle
    >
      <Box
        padding="spacingM"
        styles={{
          marginBottom: 'spacingM'
        }}
      >
        {children}
      </Box>
    </Card>
  )
}

export default forwardRef(Item)
