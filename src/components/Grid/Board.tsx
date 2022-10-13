import { Box, Grid } from '@mui/material';
import Dice from 'react-dice-roll';
import { connect, useDispatch } from 'react-redux';
import { setRolledValue } from '../../state';
import { StoreState } from '../../state/store';
import Field from './Field';

interface BoardProps {
    grid: number[][] | null[][];
    diceValue: number | null;
}

const Board: React.FC<BoardProps> = ({ grid, diceValue }) => {
    const dispatch = useDispatch();
    const board = grid.map((row, y) => {
        const rows = row.map((value, x) => {
            return <Field value={value}
                          position={{ x, y }}
                          key={x}/>;
        });
        return <Grid item
                     key={y}>{rows}</Grid>;
    });
    return <Box>
        <Grid container
              spacing={1}
              alignItems="center"
              justifyContent="center">
            {board}
        </Grid>
        <Box padding={10}>
            <Dice disabled={diceValue !== null}
                  onRoll={(value) => dispatch(setRolledValue(value))}/>
        </Box>
    </Box>;
};

const mapStateToProps = (state: StoreState) => {
    return { grid: state.gridSlice.grid, diceValue: state.gridSlice.diceValue };
};

export default connect(mapStateToProps)(Board);
