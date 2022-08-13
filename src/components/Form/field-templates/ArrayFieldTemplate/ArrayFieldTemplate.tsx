import { Button, FormControl, Grid } from '@contentful/f36-components'
import tokens from '@contentful/f36-tokens'
import { css } from '@emotion/css'
import { ArrayFieldTemplateProps } from '@rjsf/core'

import { DragAndDrop } from '~/components/DragAndDrop'

type Item = ArrayFieldTemplateProps['items'][number] & {
  id: Item['key'];
};

export const ArrayFieldTemplate: React.FC<
  ArrayFieldTemplateProps
> = (props) => {
  return (
    <FormControl
      className={css({
        background: 'white',
        border: `1px solid ${tokens.gray300}`,
        borderRadius: tokens.borderRadiusSmall,
        padding: tokens.spacingM
      })}
      isRequired={props.required}
    >
      <Grid
        rowGap="spacingM"
      >
        <DragAndDrop<Item>
          items={props.items.map(item => ({
            ...item,
            id: item.key
          }))}
          key={`items-${props.items.length}`}
        />
        {props.canAdd && (
          <Button
            isDisabled={props.disabled || props.readonly}
            onClick={props.onAddClick}
          >
            Add item
          </Button>
        )}
      </Grid>
    </FormControl>
  )
}
