import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
const headss=['dvd','dfvd','dfvd','dfvd','fef','f4t','f4t','f4t','f4t','f4t','f4t','f4t','f4t','f4t'];
export default function PinnedSubheaderList() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 210,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 200,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      <li key={`section-`}>
          <ul>
            
            {headss.map((item) => (
              <ListItem key={`item-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
    </List>
  );
}
