import React from 'react';
import { Flex, Text } from '@/once-ui/components';
import Image from 'next/image';

interface TeamCardProps {
    name: string;
    role: string;
    imageUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, imageUrl }) => {
    return (
        <Flex direction="column" alignItems="center" style={{ width: '250px', margin: '16px' }}>
            <Image src={imageUrl} alt={name} width={250} height={250} style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            <Flex shadow='xl' direction="column" padding="8" style={{ backgroundColor: 'white', borderRadius: '8px', marginTop: '-40px' }}>
                <Text variant="body-strong-m">{name}</Text>
                <Text variant="body-default-s">{role}</Text>
            </Flex>
        </Flex>
    );
};

export default TeamCard;