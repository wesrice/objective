import { Box, Card as BaseCard, DragHandle } from '@contentful/f36-components'
import { css } from '@emotion/css'
import type { Identifier, XYCoord } from 'dnd-core'
import type { FC } from 'react'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

export const ItemTypes = {
  CARD: 'card'
}

const styles = {
  dragHandle: css({
    alignSelf: 'stretch'
  })
}

// const style = {
//   border: '1px dashed gray',
//   padding: '0.5rem 1rem',
//   marginBottom: '.5rem',
//   backgroundColor: 'white',
//   cursor: 'move',
// }

export interface CardProps {
  handlerId: string;
  id: string
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void
}

export const Card: FC<CardProps> = ({ children, id, index, handlerId }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    }),
    item: () => {
      return { id, index }
    },
    type: ItemTypes.CARD
  })

  const opacity = isDragging ? 0 : 1
  // drag(drop(ref))
  return (
    <BaseCard
      data-handler-id={handlerId}
      dragHandleRender={() => (
        <DragHandle
          as="button"
          className={styles.dragHandle}
          label="Move card"
          ref={drag}
        />
      )}
      padding="none"
      ref={preview}
      style={{
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateColumns: 'max-content 1fr',
        opacity
      }}
      withDragHandle
    >
      <Box
        padding="spacingM"
      >
        {children}
      </Box>
    </BaseCard>
  )
}
