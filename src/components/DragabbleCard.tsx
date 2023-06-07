import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

export const DragabbleCard = memo(({ toDo, index }: IDragabbleCardProps) => {
  return (
    <Draggable draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
});

// React memo를 사용해 성능 최적화
