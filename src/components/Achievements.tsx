// components/OurAchievements.tsx
import React from 'react';

const OurAchievements: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '20px',
            width: '580px',
            height: '130px',
            backgroundColor: '#1a1a1a',
            borderRadius: 30,
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'left'
        }}>
            {/* Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#00e0c6', fontSize: '24px' }}>⚡</span>
                <h2 style={{ fontSize: '18px', margin: 0 }}>Our Achievements</h2>
            </div>

            {/* Description */}
            <p style={{
                fontSize: '14px',
                color: '#cccccc',
                marginTop: '10px',
                lineHeight: '1.5'
            }}>
                We take pride in our journey of growth and impact in the innovation and technology sector.
            </p>

            {/* Background Icons */}
            <div style={{
                position: 'absolute',
                right: '10px',
                top: '20px',
                opacity: 0.1,
                display: 'flex',
                gap: '5px',
                flexWrap: 'wrap',
                width: '100px',
            }}>
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '5px',
                        backgroundColor: '#333333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <span style={{ fontSize: '16px', color: ['#00e0c6', '#ffcc00', '#ff00ff', '#ff0000', '#00ff00', '#00bfff'][index] }}>🏅</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurAchievements;
