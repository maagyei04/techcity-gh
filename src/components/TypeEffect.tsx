'use client';
import { Text } from "@/once-ui/components";
import React, { useEffect, useState } from "react";

export const TypeEffect = ({ words }: { words: string[] }) => {

    const [typed, setTyped] = useState<React.ReactNode>('');

    useEffect(() => {
        const frames = words.map((w, idx) => {
            const color = ['#525252FF', '#9A0083FF', 'orange'][idx % 3];
            return Array(w.length + 1).fill('').map((item, idx) => (
                <Text key={idx} style={{ color }}>{w.slice(0, idx)}</Text>
            ));
        }).flat();

        let frameIdx = 0;
        let timer = setInterval(() => {
            setTyped(frames[frameIdx]);
            frameIdx++;
            if (frameIdx === frames.length) { frameIdx = 0; }
        }, 250)

        return () => clearInterval(timer);

    }, []);

    return (
        <Text>{typed}</Text>
    )
}