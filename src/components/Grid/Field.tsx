import { Box, Paper } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import { setField } from '../../state';
import { StoreState } from '../../state/store';

interface FieldProps {
    value: number | null;
    diceValue: number | null;
    position: { x: number; y: number };
}

const Field: React.FC<FieldProps> = ({ value, position, diceValue }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        if (diceValue && !value)
            dispatch(setField(position));
    };

    return <Box onClick={handleClick}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    textAlign: 'center',
                    '& > :not(style)': {
                        m: 1,
                        width: 96,
                        height: 96,
                    },
                }}>
        <Paper sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            verticalAlign: 'middle'
        }}>
            {value || 'X'}
        </Paper>
    </Box>;
};

const mapStateToProps = (state: StoreState, ownProps: Omit<FieldProps, 'diceValue'>) => {
    return { diceValue: state.gridSlice.diceValue, ...ownProps };
};

export default connect(mapStateToProps)(Field);
