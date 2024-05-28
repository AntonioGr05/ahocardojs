// Timer.tsx
import { useState, useEffect } from 'react';

interface TimerProps {
    startTime: Date | null;
}

const Timer = ({ startTime }: TimerProps) => {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const elapsedTime = startTime && currentTime ? Math.floor((currentTime.getTime() - startTime.getTime()) / 1000) : 0;

    return <p>Time elapsed: {elapsedTime} seconds</p>;
};

export default Timer;