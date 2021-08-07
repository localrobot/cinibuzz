import { Button } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export interface ToggleButtonProps {
  selected: boolean;
  onClick: () => void;
}

export function ToggleButton(props: PropsWithChildren<ToggleButtonProps>) {
  return (
    <Button variant={props.selected ? 'solid' : 'ghost'} flexGrow={0} flexShrink={0} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

export default ToggleButton;
