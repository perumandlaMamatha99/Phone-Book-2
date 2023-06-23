import React from 'react';
import { Provider, createStoreHook } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import allReducers from './reducers';
import Counter from './components/Counter';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Restore as RestoreIcon, FavoriteOutlined as FavoriteIcon } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Recents from './components/Recents';
import Favourites from './components/Favourites';
import Contacts from './components/Contacts';
import AddContacts from './components/AddContacts';
import UseMemoEx from './components/UseMemoEx';
function App() {
  const [value, setValue] = React.useState(0);
  const styles = {
    navigationButton: {
      fontSize: "2rem"
    }
  }
  return (
    <div className='App'>
      <div className='phonebook' >
        <Box sx={{backgroundColor:"rgb(241,241,241)", padding:"10px",borderRadius:"20px"}}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon style={styles.navigationButton} />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon style={styles.navigationButton} />} />
            <BottomNavigationAction label="Contacts" icon={<AccountCircleIcon style={styles.navigationButton} />} />
          </BottomNavigation>
        </Box>
        <div>
          <div style={{ paddingLeft: "40px" }}>{value == 0 && <Recents />}</div>
          <div style={{ paddingLeft: "40px" }}> {value == 1 && <Favourites />}</div>
          <div style={{ paddingLeft: "40px" }}>{value == 2 && <Contacts />}</div>
        </div>

        <AddContacts />
      </div>
    </div>

  );
}

export default App;
