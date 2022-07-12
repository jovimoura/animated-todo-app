import React, { useCallback, useState } from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import {
  Box,
  useColorModeValue,
  HStack,
  useToken,
  Icon,
  Input
} from 'native-base'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import AnimatedTaskLabel from './animated-task-label'
import SwipeView from './swipable-view'
import { Feather } from '@expo/vector-icons'
import { PanGestureHandlerProps } from 'react-native-gesture-handler'

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  onPress?: (isChecked: boolean) => void
  isChecked?: boolean
  onToggleCheckbox?: () => void
  onPressLabel?: () => void
  onRemove?: () => void
  subject: string
  isEditing?: boolean
  onChangeSubject?: (subject: string) => void
  onFinishEditing?: () => void
}

const TaskItem = (props: Props) => {
  const {
    subject,
    onRemove,
    onPressLabel,
    simultaneousHandlers,
    isEditing,
    onChangeSubject,
    onFinishEditing
  } = props
  const [check, setCheck] = useState<boolean>(false)

  const isDone = check

  const activeTextColor = useToken(
    'colors',
    useColorModeValue('darkText', 'lightText')
  )
  const doneTextColor = useToken(
    'colors',
    useColorModeValue('muted.400', 'muted.600')
  )

  const handleChangeSubject = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onChangeSubject && onChangeSubject(e.nativeEvent.text)
    },
    [onChangeSubject]
  )

  return (
    <SwipeView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          bg="red.500"
          alignItems="flex-end"
          justifyContent="center"
          pr={4}
          w="full"
          h="full">
          <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }>
      <HStack
        alignItems="center"
        w="full"
        px={4}
        py={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}>
        <BouncyCheckbox
          fillColor="#5578AA"
          isChecked={check}
          onPress={(isChecked: boolean) => {
            setCheck(isChecked)
          }}
        />
        {isEditing ? (
          <Input
            placeholder="Write your task"
            value={subject}
            variant="unstyled"
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            blurOnSubmit
            onChange={handleChangeSubject}
            onBlur={onFinishEditing}
          />
        ) : (
          <AnimatedTaskLabel
            textColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            onPress={onPressLabel}
            strikethrough={isDone}>
            {subject}
          </AnimatedTaskLabel>
        )}
      </HStack>
    </SwipeView>
  )
}

export default TaskItem
