import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Typography from '@mui/material/Typography'
import Spline from "@splinetool/react-spline";

export default function SplineScene() {
    const [sceneEnabled, setSceneEnabled] = useState(false)
    const [loading, setLoading] = useState(true)
    const [showSpline, setShowSpline] = useState(false)
    const [splineLoaded, setSplineLoaded] = useState(false)
    const [minimumDelayPassed, setMinimumDelayPassed] = useState(false)

    useEffect(() => {
        if (!sceneEnabled) return
        setLoading(true)
        setShowSpline(false)
        setSplineLoaded(false)
        setMinimumDelayPassed(false)
        let idleId
        let timeoutId
        const minimumDelayId = setTimeout(() => setMinimumDelayPassed(true), 20000)
        if ('requestIdleCallback' in window) {
            idleId = requestIdleCallback(() => setShowSpline(true), { timeout: 1000 })
        } else {
            timeoutId = setTimeout(() => setShowSpline(true), 300)
        }
        return () => {
            clearTimeout(minimumDelayId)
            if (idleId) cancelIdleCallback(idleId)
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [sceneEnabled])

    useEffect(() => {
        if (splineLoaded && minimumDelayPassed) {
            setLoading(false)
        }
    }, [splineLoaded, minimumDelayPassed])

    const handleLoad = () => {
        setSplineLoaded(true)
    }

    const handleLaunchScene = () => {
        setSceneEnabled(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return(
        <>
            {!sceneEnabled ? (
                <button className="scene-toggle-button sour-gummy-text" onClick={handleLaunchScene}>
                    <RocketLaunchIcon className="scene-toggle-icon" fontSize="small" />
                    Visit My Space Station
                </button>
            ) : null}
            {sceneEnabled ? (
                <div className="spline-wrap">
                    {loading ? (
                        <Box className="spline-loader">
                            <CircularProgress size={32} thickness={4} sx={{ color: 'rgb(204, 158, 105)' }} />
                            <Typography variant="body2" className="spline-loader-text">
                                <p className="sour-gummy-loading">Loading scene...</p>
                                <p className="sour-gummy-loading">Scroll down for resume & come back later</p>
                            </Typography>
                        </Box>
                    ) : null}
                    {showSpline ? (
                        <Spline
                            scene="https://prod.spline.design/Cj1M7RyhDa0mGr2K/scene.splinecode"
                            onLoad={handleLoad}
                        />
                    ) : null}
                </div>
            ) : null}
        </>
    );
}
