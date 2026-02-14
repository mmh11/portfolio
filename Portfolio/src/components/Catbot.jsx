import { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import catbot from '../assets/catbot.png'

export default function Catbot() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [messageIndex, setMessageIndex] = useState(0)
  const [bubbleBump, setBubbleBump] = useState(false)
  const [bumpKey, setBumpKey] = useState(0)

  const messages = [
    'Hi! How are you today? This is my protfolio page, have fun playing around! (Click for tips!)',
    'You can explore my space station by using WASD, Space and Arrows keys to control me and the camera. (1/3)',
    'You can also scroll down to read my resume detailedly! (2/3)',
    'My contact info is located below, feel free to contact my direcly for any opportunity! (3/3)'
  ]

  const handleEnter = (event) => {
    setAnchorEl(event.currentTarget)
    setMessageIndex(0)
  }

  const handleLeave = () => {
    setAnchorEl(null)
    setMessageIndex(0)
  }

  const handleClick = () => {
    setMessageIndex((prev) => (prev + 1) % messages.length)
  }

  const handleBubbleClick = () => {
    setBubbleBump(true)
    setBumpKey((prev) => prev + 1)
    setTimeout(() => setBubbleBump(false), 300)
  }

  const open = Boolean(anchorEl)

  return (
    <Box className="catbot-wrap" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <img
        className="catbot-fixed"
        src={catbot}
        alt="Chat bot cat"
        onClick={handleClick}
      />
      {open ? (
        <div className='paper-div'>
            <Paper
              key={bumpKey}
              className="catbot-bubble"
              elevation={6}
              onClick={handleBubbleClick}
              sx={{ animation: bubbleBump ? 'catbot-bump 300ms ease-out' : 'none' }}
            >
            <Typography variant="body2">
                <p className="sour-gummy-text">{messages[messageIndex]}</p>
            </Typography>
            </Paper>
        </div>
      ) : null}
    </Box>
  )
}
