// components/EmpoweringTeams.tsx
import { motion } from 'framer-motion';
import React from 'react';

const EmpoweringTeams: React.FC = () => {
    return (
        <div style={{
            padding: '20px',
            width: '400px',
            borderRadius: 30,
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            textAlign: 'left'
        }}>
            <h3>Empowering Remote Teams</h3>
            <p style={{ color: '#cccccc', marginBottom: '20px' }}>
                Enhance productivity and collaboration no matter where you are
            </p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'space-evenly' }}>
                <motion.div animate={{ scale: [1, 2, 1.5, 1] }} transition={{ duration: 4 }} style={{ flexDirection: 'column' }}>
                    <img src="/images/tcava4.png" alt="Lead" style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%'
                    }} />
                    <p style={{ color: '#cccccc' }}>Lead</p>
                </motion.div>

                <div style={{ flexDirection: 'column' }}>
                    <img src="/images/tcava3.png" alt="PM" style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%'
                    }} />
                    <p style={{ color: '#cccccc' }}>PM</p>
                </div>

                <div style={{ flexDirection: 'column' }}>
                    <img src="/images/tcava2.png" alt="Dev" style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%'
                    }} />
                    <p style={{ color: '#cccccc' }}>Dev</p>
                </div>

                <div style={{ flexDirection: 'column' }}>
                    <img src="/images/tcava1.png" alt="Design" style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%'
                    }} />
                    <p style={{ color: '#cccccc' }}>Design</p>
                </div>
            </div>
            <button style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: 30,
                backgroundColor: '#252525FF',
                color: '#ffffff',
                cursor: 'pointer',
                width: '100%',
                bottom: 0
            }}>
                Invite
            </button>
        </div>
    );
};

export default EmpoweringTeams;
