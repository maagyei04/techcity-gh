import { Avatar, Button, Flex, RevealFx, Text } from '@/once-ui/components';
import React from 'react';

const TechCityGHOverview: React.FC<{ locale: string }> = ({ locale }) => {
    return (
        <Flex gap='40' padding='40' mobileDirection='column' style={{
            backgroundColor: '#1b0b31',
            color: '#FFFFFF',
            borderRadius: '20px',
            alignItems: 'flex-start',
            fontFamily: 'Arial, sans-serif'
        }}>
            {/* Left Section: Why Choose TechCity GH */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    borderRadius: '30px',
                    padding: '8px 20px',
                    fontSize: '8px',
                    fontWeight: '500',
                    width: 'fit-content'
                }}>
                    <Avatar src="/images/gallery/img-11.jpg" />
                    <Text variant='body-default-s'>You can count on our service everytime</Text>
                </div>

                <h2 style={{
                    fontSize: '30px',
                    fontWeight: '600',
                    lineHeight: '1.2',
                    color: '#FFFFFF',
                }}>Why Choose TechCity GH?</h2>

                <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#CCCCCC' }}>
                    {[
                        "TechCity GH is a leading choice for businesses in West Africa and beyond, providing exceptional value through innovative technology solutions and deep industry expertise.",
                        "Our commitment to empowering clients with tailored software training, robust programming and database solutions, and flexible outsourcing options sets us apart.",
                        "Choosing TechCity GH means choosing a partner dedicated to your growth, operational efficiency, and strategic success in an increasingly digital world."
                    ].map((text, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                            <span style={{
                                display: 'inline-block',
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#FFFFFFFF',
                                borderRadius: '50%',
                                marginRight: '10px'
                            }}>⚡</span>
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>

                <RevealFx translateY="12" delay={0.4}>
                    <Button
                        data-border="rounded"
                        variant="primary"
                        suffixIcon="chevronRight"
                        href={`/${locale}/contact`}
                        size="l">
                        <Flex
                            gap="12"
                            alignItems="center">
                            Contact Us
                        </Flex>
                    </Button>
                </RevealFx>
            </div>

            {/* Right Section: Chat and Solutions */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px',
                    padding: '20px',
                    borderRadius: '15px',
                    position: 'relative'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}>
                        <div>
                            <strong style={{ color: '#CCCCCC' }}>TechCityGH</strong>
                            <p style={{ color: '#353535FF', backgroundColor: '#FFFFFFFF', padding: '4px 10px', borderRadius: '0px 10px 10px 10px' }}>Hello Arnold, Welcome to TechCityGH. We deliver the best Software solutions</p>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        paddingLeft: '20px',
                        textAlign: 'right',
                        justifyContent: 'right'
                    }}>
                        <div>
                            <strong style={{ color: '#CCCCCC' }}>Sir Arnold</strong>
                            <p style={{ color: '#FFFFFFFF', backgroundColor: '#C68B00FF', padding: '8px 10px', borderRadius: '10px 0px 10px 10px' }}>Absolutely! Sending project scope document now.</p>
                        </div>
                    </div>
                </div>

                {/* Our Innovative Solutions */}
                <div style={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    padding: '20px',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    width: '75%',
                    justifyContent: 'right',
                    alignContent: 'right',
                    alignItems: 'center'
                }}>
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#000000',
                        marginBottom: '10px'
                    }}>Our Innovative Solutions</h3>

                    {[
                        {
                            title: 'Custom Software Development',
                            users: '5.2k Users',
                            clients: '12 Clients',
                            icon: '🖥️',
                            name: 'Tyler Lawrence'
                        },
                        {
                            title: 'Advanced Programming & Database Services',
                            users: '5.2k Users',
                            clients: '10 Clients',
                            icon: '📂',
                            name: 'Tyler Lawrence'
                        }
                    ].map((solution, idx) => (
                        <div key={idx} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 0',
                            borderBottom: idx === 0 ? '1px solid #CCCCCC' : 'none'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '24px' }}>{solution.icon}</span>
                                <div>
                                    <strong>{solution.title}</strong>
                                    <p style={{ color: '#7D7D7D', fontSize: '14px' }}>
                                        {solution.users} | {solution.clients} <br />
                                        <small style={{ color: '#007bff' }}>{solution.name}</small>
                                    </p>
                                </div>
                            </div>
                            <button style={{
                                width: '30px',
                                height: '30px',
                                backgroundColor: '#f5f5f5',
                                border: 'none',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '18px',
                                cursor: 'pointer'
                            }}>+</button>
                        </div>
                    ))}
                </div>
            </div>
        </Flex>
    );
};

export default TechCityGHOverview;
