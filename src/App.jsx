import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';

function App() {

  return (
    <>
      <Button variant="contained" onClick={() => alert("hi!")}>Contained</Button>
      <Button variant="text">Contained</Button>
      <Button variant="outlined">Contained</Button>
      <Button size="large" color="success" variant="contained" onClick={() => alert("hi!")}>Contained</Button>
      <Button color="error" variant="contained" onClick={() => alert("hi!")}>Contained</Button>

      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
    </>
  )
}

export default App
