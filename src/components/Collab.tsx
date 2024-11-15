// components/CollaborativeEnvironment.tsx
import React from 'react';

const CollaborativeEnvironment: React.FC = () => {
    return (
        <div style={{
            position: 'relative',
            width: '420px',
            height: '286px',
            borderRadius: 30,
            overflow: 'hidden',
            borderWidth: 5,
            borderColor: 'black',
            border: 'solid'
        }}>
            <img
                src="/images/tc11.png"
                alt="Collaborative Environment"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                }}
            />
            <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                color: '#ffffff',
                fontSize: '16px',
                width: '90%',
                textAlign: 'left',
                fontWeight: '400'
            }}>
                We foster a dynamic and collaborative working environment that promotes innovation and creativity.
            </div>
        </div>
    );
};

export default CollaborativeEnvironment;
