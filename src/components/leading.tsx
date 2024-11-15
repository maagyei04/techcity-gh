// components/LeadingTechCompanies.tsx
import React from 'react';

const LeadingTechCompanies: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '250px',
            height: '130px',
            borderRadius: 30,
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            padding: '15px'
        }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                    <span style={{ fontSize: '40px', fontWeight: 'bold' }}>15</span>
                    <span style={{ fontSize: '20px', color: '#a64ac9', fontWeight: 'bold' }}>+</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#00ff00',
                    fontSize: '14px'
                }}>
                    <span>↑</span>
                    <span style={{ marginLeft: '5px' }}>(+25%)</span>
                </div>
            </div>


            <p style={{
                fontSize: '16px',
                color: '#cccccc',
                margin: '5px 0 10px 0'
            }}>Leading tech companies</p>

        </div>
    );
};

export default LeadingTechCompanies;
