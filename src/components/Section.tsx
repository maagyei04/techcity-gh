import React from 'react';
import { Flex, Text, Avatar } from '@/once-ui/components';
import styles from './contact/Gallery.module.scss';

interface SectionProps {
    title: string;
    description: string;
    images?: string[];
    images2?: string[];
}

const Section: React.FC<SectionProps> = ({ title, description, images, images2 }) => {
    return (
        <Flex direction="row" className={styles.section} fillWidth mobileDirection='column'>
            <Flex direction='column' maxWidth={250} paddingRight='40'>
                <Text variant="body-default-s">#TechCityGH</Text>
                <Text variant="body-strong-l"><Text style={{ color: '#9A0083FF' }}>Empowering</Text>{title}</Text>
                <Text variant="body-default-s" style={{ fontFamily: 'sans-serif' }}>{description}</Text>
            </Flex>

            <Flex direction='row' gap='s'>
                {images && (
                    <Flex direction="row" gap="s" wrap marginBottom='20'>
                        {images.map((src, index) => (
                            <img key={index} src={src} alt={`Image ${index + 1}`} className={styles.image} />
                        ))}
                    </Flex>
                )}
                {images2 && (
                    <Flex direction="row" gap="s" wrap marginTop='20'>
                        {images2.map((src, index) => (
                            <img key={index} src={src} alt={`Image ${index + 1}`} className={styles.image} />
                        ))}
                    </Flex>
                )}
            </Flex>


        </Flex >
    );
};

export default Section;