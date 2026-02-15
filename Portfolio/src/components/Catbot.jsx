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
  const [catbotClickBump, setCatbotClickBump] = useState(false)

  const messages = [
    'Hi! How are you today? This is my protfolio page, have fun playing around! (Click for tips!)',
    'You can visit my 3D space station by clicking the button in the upper right corner, it may took a few seconds to be loaded! (1/4)',
    'You can explore my space station by using WASD, Space and Arrows keys to control me and the camera. (2/4)',
    'You can also scroll down to read my resume detailedly! (3/4)',
    'Feel free to get in touch using the contact info direcly for any opportunity! (4/4)'
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
    setCatbotClickBump(true)
    setTimeout(() => setCatbotClickBump(false), 260)
    setMessageIndex((prev) => (prev + 1) % messages.length)
  }

  const handleBubbleClick = () => {
    setBubbleBump(true)
    setBumpKey((prev) => prev + 1)
    setTimeout(() => setBubbleBump(false), 300)
    setMessageIndex((prev) => (prev + 1) % messages.length)
  }

  const open = Boolean(anchorEl)

  return (
    <Box className="catbot-wrap" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div className={`catbot-click-feedback ${catbotClickBump ? 'is-clicked' : ''}`}>
        <img
          className="catbot-fixed"
          src={catbot}
          alt="Chat bot cat"
          onClick={handleClick}
        />
      </div>
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
