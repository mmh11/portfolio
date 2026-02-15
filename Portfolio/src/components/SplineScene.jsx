import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Spline from "@splinetool/react-spline";

export default function SplineScene() {
    const [loading, setLoading] = useState(true)
    const [showSpline, setShowSpline] = useState(false)
    const [splineLoaded, setSplineLoaded] = useState(false)
    const [minimumDelayPassed, setMinimumDelayPassed] = useState(false)

    useEffect(() => {
        setLoading(true)
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
    }, [])

    useEffect(() => {
        if (splineLoaded && minimumDelayPassed) {
            setLoading(false)
        }
    }, [splineLoaded, minimumDelayPassed])

    const handleLoad = () => {
        setSplineLoaded(true)
    }

    return(
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
    );
}
