// components/CoreServices.tsx
import React from 'react';

const CoreServices: React.FC = () => {
    const services = [
        { title: "Coworking Spaces", description: "Experience a dynamic workspace", color: "red" },
        { title: "Software Training", description: "Designed to empower beginners", color: "#2FFF00FF" },
        { title: "Database Development", description: "Leverage our expertise", color: "#00BFE9FF" },
        { title: "Outsourcing Solutions", description: "Scale your operations", color: "#9200BAFF" },
    ];

    return (
        <div style={{
            padding: '20px',
            width: '300px',
            borderRadius: 30,
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
            textAlign: 'left'
        }}>
            <h3>Our Core Services</h3>
            <p style={{ color: '#cccccc', marginBottom: '20px' }}>
                Explore the innovative services that drive success at Techcity GH
            </p>
            {services.map((service, index) => (
                <div key={index} style={{
                    padding: '10px',
                    marginBottom: '10px',
                    backgroundColor: '#333333',
                    borderRadius: '8px',
                    display: 'flex'
                }}>
                    <div style={{ width: 5, height: 50, backgroundColor: service.color, borderRadius: 10, marginRight: 10 }}>
                        <p></p>
                    </div>
                    <div style={{ flex: 1, flexDirection: 'column' }}>
                        <h4 style={{ margin: 0 }}>{service.title}</h4>
                        <p style={{ color: '#cccccc', margin: 0 }}>{service.description}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default CoreServices;
