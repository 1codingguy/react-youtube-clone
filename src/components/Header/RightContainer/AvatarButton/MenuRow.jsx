import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from 'styled-components';
import ListItemText from '@material-ui/core/ListItemText';
import { StyledMenuItem, StyledListItemIcon } from '../../../utils/utils';
import { useGlobalContext } from '../../../../context';


export const MenuRow = ({ Icon, text, arrow }) => {
  const { handleRightContainerMenusClose } = useGlobalContext();

  return (
    <MenuItem onClick={handleRightContainerMenusClose}>
      <StyledListItemIcon>
        <Icon fontSize="small" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
      {arrow && <ChevronRightIcon style={{ fontSize: '20px' }} />}
    </MenuItem>
  );
};
const MenuItem = styled(StyledMenuItem)`
  && {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
