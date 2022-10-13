import { Box } from '@mui/material';
import Dice from 'react-dice-roll';
import { connect, useDispatch } from 'react-redux';
import { setRolledValue } from '../state';
import { StoreState } from '../state/store';
import Board from './Grid/Board';

interface AppProps {
    grid: number[][] | null[][];
    diceValue: number | null;
}

const App: React.FC<AppProps> = ({ grid, diceValue }) => {
    const dispatch = useDispatch();
    
    return <Box>
        <Board grid={grid}/>
        <Box padding={10}>
            <Dice disabled={diceValue !== null}
                  onRoll={(value) => dispatch(setRolledValue(value))}/>
        </Box>
    </Box>
};

const mapStateToProps = (state: StoreState) => {
    return { grid: state.gridSlice.grid, diceValue: state.gridSlice.diceValue };
};

export default connect(mapStateToProps)(App);