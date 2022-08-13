import { Box, Note } from '@contentful/f36-components'
import { ErrorListProps } from '@rjsf/core'

export const ErrorListTemplate: React.FC<ErrorListProps> = (props) => {
  const { errors } = props
  return (
    <Box>
      <Note
        variant="negative"
      >
        There
        {' '}
        {errors.length > 1 ? 'are' : 'is'}
        {' '}
        {errors.length}
        {' '}
        error
        {errors.length > 1 && 's'}
        .
      </Note>
    </Box>
  )
}
