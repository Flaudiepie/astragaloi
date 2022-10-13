import {Box, Grid, Stack, Typography} from '@mui/material';
import Dice from 'react-dice-roll';
import {connect, useDispatch} from 'react-redux';
import {setRolledValue} from '../state';
import {StoreState} from '../state/store';
import Board from './Grid/Board';

interface AppProps {
    grid: number[][] | null[][];
    diceValue: number | null;
}

const App: React.FC<AppProps> = ({grid, diceValue}) => {
    const dispatch = useDispatch();

    return <Box width='100%'>
        <Box display='flex' justifyContent='center'>
            <Box>
                <Board grid={grid}/>
            </Box>
        </Box>
        <Box display='flex' justifyContent='start' marginLeft={10}>
            <Box>
                <Dice size={100} disabled={diceValue !== null}
                    onRoll={(value) => dispatch(setRolledValue(value))}/>
            </Box>
        </Box>
        <Box display='flex' justifyContent='center'>
            <Box>
                <Board grid={grid}/>
            </Box>
        </Box>
    </Box>
};

const mapStateToProps = (state: StoreState) => {
    return {grid: state.gridSlice.grid, diceValue: state.gridSlice.diceValue};
};

export default connect(mapStateToProps)(App);