'use client';

import { Flex, Heading, Icon, RevealFx, Text } from '@/once-ui/components';
import { Projects } from '@/components/services/Projects';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import styles from '@/components/about/about.module.scss'
import { useTranslations } from 'next-intl';
import { TypeEffect } from '@/components/TypeEffect';
import Image from 'next/image';
import { motion } from 'framer-motion';


{/*
export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {

    const t = await getTranslations();
    const { services } = renderContent(t);

    const title = services.title;
    const description = services.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/services/`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}
    */}

export default function Work(
    { params: { locale } }: { params: { locale: string } }
) {
    //unstable_setRequestLocale(locale);

    const t = useTranslations();
    const { person, services } = renderContent(t);

    const words = ["Vision", "Idea", "Business"];

    const servicess = [
        {
            icon: 'software',
            title: 'Software Training',
            description: 'Equip yourself or your team with the latest industry skills through our practical and interactive software training programs',
        },
        {
            icon: 'coworking',
            title: 'Coworking Spaces',
            description: 'Whether you need a quiet workspace or a place to brainstorm with like-minded professionals, our spaces are designed to inspire and support your work.',
        },
        {
            icon: 'programming',
            title: 'Programming & Database Development',
            description: 'From designing robust databases to developing customized software solutions, our programming and database development services',
        },
        {
            icon: 'outsourcing',
            title: 'Outsourcing Services',
            description: 'We provide skilled professionals and resources to help you meet project deadlines, manage workflows, and enhance operational efficiency without compromising on quality.',
        },
    ];

    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column" className={styles.up} overflowX='scroll'>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        headline: services.title,
                        description: services.description,
                        url: `https://${baseURL}/projects`,
                        image: `${baseURL}/og?title=Design%20Projects`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                    }),
                }}
            />

            <Flex
                justifyContent="center"
                alignItems='center'
                align='center'
                fillWidth
                direction="column"
                paddingY="s" gap="l">
                <Flex
                    direction="column"
                    fillWidth maxWidth="xl" gap="m"
                    justifyContent="center"
                    alignItems='center'
                >
                    <RevealFx translateY="4">
                        <Heading
                            wrap="initial"
                            variant="display-strong-m"
                            color='blue'
                            style={{ height: "80px" }}
                        >
                            <Text>Empowering your </Text><TypeEffect words={words} />
                        </Heading>
                        <Text variant='body-strong-m'> with Innovative Tech Solutions</Text>
                    </RevealFx>
                    <RevealFx translateY="8" delay={0.2}>
                        <Text
                            wrap="balance"
                            onBackground="neutral-weak"
                            variant="body-default-l">
                            Our commitment to excellence is demonstrated through our range of innovative services, tailored to support businesses and individuals in the tech landscape
                        </Text>
                    </RevealFx>
                </Flex>

            </Flex>


            <Flex direction="row" gap="32" padding="32" alignItems="center" mobileDirection='column'>
                <Flex direction="column">
                    <Text variant="body-strong-l">
                        <span style={{ color: 'orange' }}>Unlocking</span> Potential Through <span style={{ color: 'blue' }}>Technology</span> and Expertise
                    </Text>
                    <Text variant="body-strong-l" marginTop="8">
                        Explore how TechCity GH can help you achieve your goals:
                    </Text>
                    {servicess.map((service, index) => (
                        <Flex key={index} direction="row" alignItems="center" marginTop="16">
                            <Icon name={service.icon} size="m" />
                            <Flex direction="column" marginLeft="8">
                                <Text variant="body-strong-m">{service.title}</Text>
                                <Text variant="body-default-s">{service.description}</Text>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
                <motion.div
                    animate={{
                        rotate: [50, 0, 50, 0]
                    }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    <Image src="/images/service1.png" alt="Person" width={400} height={300} style={{ borderRadius: '16px' }} />
                </motion.div>
            </Flex>


        </Flex>
    );
}