import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, width: 310,border:'1px solid black',backgroundColor:'white' }}>
      
      <Grid container spacing={2}>
        <Grid item xs={18} md={8}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            Text only
          </Typography>
          <Demo>
            <List dense={dense} >
              {generate(
                <ListItem variant="h4" > 
                  <ListItemText
                    primary="Single-line item knnkjn"
                    secondary='Secondary text'
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
        
      </Grid>
    
    </Box>
  );
}