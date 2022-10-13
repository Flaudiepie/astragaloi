import { createSlice } from '@reduxjs/toolkit';
import generateDiceOutput from '../../utils/rollDice';
import { SetRolledValueAction, SetValueAction } from '../actions';

interface GridState {
    grid: number[][] | null[][];
    diceValue: number | null;
}

const initialState = {
    grid: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    diceValue: null
};

const gridSlice = createSlice({
    name: 'gridSlice',
    initialState: initialState,
    reducers: {
        setField(state: GridState, action: SetValueAction) {
            const { x, y } = action.payload;
            state.grid[y][x] = state.diceValue;
            const grid = state.grid.slice();
            state.grid = grid.map((value) => value.sort((a, b) => (!a ? 1 : 0)) as number[])
            state.diceValue = null;
        },
        rollDice(state: GridState) {
            state.diceValue = generateDiceOutput();
        },
        setRolledValue(state: GridState, action: SetRolledValueAction) {
            state.diceValue = action.payload;
        }
    },
});

export const { setField, rollDice, setRolledValue } = gridSlice.actions;
export default gridSlice.reducer;
