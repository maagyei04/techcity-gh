import React from 'react';
import { Flex, Text, Avatar } from '@/once-ui/components';
import styles from './contact/Gallery.module.scss';

interface SectionProps {
    title: string;
    description: string;
    images?: string[];
    images2?: string[];
    sub?: sub[];
}

interface sub {
    head: string;
    tail: string;
}

const EmpowerSection: React.FC<SectionProps> = ({ title, description, images, images2, sub }) => {
    return (
        <Flex direction="row" className={styles.empowersection} fillWidth gap='xl' mobileDirection='column'>
            <Flex direction='row' gap='s'>
                {images && (
                    <Flex direction="row" gap="s" wrap>
                        {images.map((src, index) => (
                            <img key={index} src={src} alt={`Image ${index + 1}`} className={styles.image2} />
                        ))}
                    </Flex>
                )}
                {images2 && (
                    <Flex direction="row" gap="s" wrap >
                        {images2.map((src, index) => (
                            <img key={index} src={src} alt={`Image ${index + 1}`} className={styles.image2} />
                        ))}
                    </Flex>
                )}
            </Flex>

            <Flex direction='column' maxWidth={250} paddingRight='40'>
                <Text variant="body-strong-l">Empower your skills with<Text style={{ color: 'orange' }}> software training</Text></Text>
                <Text variant="body-default-s" style={{ fontFamily: 'sans-serif' }}>{description}</Text>
                {sub && (
                    <Flex direction="column" wrap marginTop='20'>
                        {sub.map((text, index) => (
                            <>
                                <Text key={text.head} variant="body-strong-s">🎇 {text.head}</Text>
                                <Text key={text.tail} variant="body-default-s" marginBottom='8' marginLeft='20'>{text.tail}</Text>
                            </>
                        ))
                        }
                    </Flex>
                )}
            </Flex>
        </Flex >
    );
};

export default EmpowerSection;