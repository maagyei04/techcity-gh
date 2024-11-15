import React from 'react';
import { Flex, Text, Avatar } from '@/once-ui/components';
import styles from './contact/Gallery.module.scss';

interface SectionProps {
    title: string;
    description: string;
    image?: string;
}

const Section2: React.FC<SectionProps> = ({ title, description, image }) => {
    return (
        <Flex direction="column" className={styles.section2} fillWidth>
            <Flex direction='column' maxWidth={250}>
                <Text variant="body-default-s">#TechCityGH</Text>
                <Text variant="body-strong-l">Creating<Text style={{ color: '#9A0083FF', fontWeight: 'bolder' }}> Collaborative</Text><br></br>Workspaces</Text>
                <Text variant="body-default-s">{description}</Text>
            </Flex>

            <Flex direction="row" gap="s" justifyContent='center' alignItems='center' marginTop='20'>
                <Avatar src={image} />
                <Text variant='body-default-s'>Skilled <Text variant='body-strong-s'>Software Engineers</Text></Text>
            </Flex>


        </Flex >
    );
};

export default Section2;