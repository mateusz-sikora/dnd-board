import { MOVE_HOVER_CARD } from './const';

export const moveHoverCard = (columnId, positionIndex) => {
    return {
        type: MOVE_HOVER_CARD,
        columnId,
        positionIndex,
    };
}
