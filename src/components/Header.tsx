"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { Flex, ToggleButton } from "@/once-ui/components"
import styles from '@/components/Header.module.scss'

import { routes, display } from '@/app/resources'

import { routing } from '@/i18n/routing';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { renderContent } from "@/app/resources";
import { useTranslations } from "next-intl";
import { i18n } from "@/app/resources/config";

type TimeDisplayProps = {
    timeZone: string;
    locale?: string;  // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            };
            const timeString = new Intl.DateTimeFormat(locale, options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone, locale]);

    return (
        <>
            {currentTime}
        </>
    );
};

export default TimeDisplay;

export const Header = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname() ?? '';
    const params = useParams();

    function handleLanguageChange(locale: string) {
        const nextLocale = locale as Locale;
        startTransition(() => {
            router.replace(
                pathname,
                { locale: nextLocale }
            )
        })
    }

    const t = useTranslations();
    const { person, home, about, blog, services, contact } = renderContent(t);

    return (
        <Flex style={{ height: 'fit-content' }}
            className={styles.position}
            as="header"
            zIndex={9}
            fillWidth padding="8"
            justifyContent="center">
            <Flex
                paddingLeft="12" fillWidth
                alignItems="center"
                textVariant="body-default-m">
                {display.location && (
                    <Flex hide="s">
                        {person.name}
                    </Flex>
                )}
            </Flex>
            <Flex fillWidth justifyContent='flex-start'>
                <Flex
                    background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                    paddingY="12"
                    paddingX="12"
                    justifyContent="center">
                    <Flex
                        gap="8"
                        textVariant="body-default-s">
                        {routes['/'] && (
                            <ToggleButton
                                prefixIcon="home"
                                href={`/${params?.locale}`}
                                selected={pathname === "/"}>
                                <Flex paddingX="8" hide="s">{home.label}</Flex>
                            </ToggleButton>
                        )}
                        {routes['/about'] && (
                            <ToggleButton
                                prefixIcon="person"
                                href={`/${params?.locale}/about`}
                                selected={pathname === "/about"}>
                                <Flex paddingX="8" hide="s">{about.label}</Flex>
                            </ToggleButton>
                        )}
                        {routes['/services'] && (
                            <ToggleButton
                                prefixIcon="grid"
                                href={`/${params?.locale}/services`}
                                selected={pathname.startsWith('/services')}>
                                <Flex paddingX="8" hide="s">{services.label}</Flex>
                            </ToggleButton>
                        )}
                        {routes['/blog'] && (
                            <ToggleButton
                                prefixIcon="book"
                                href={`/${params?.locale}/blog`}
                                selected={pathname.startsWith('/blog')}>
                                <Flex paddingX="8" hide="s">{blog.label}</Flex>
                            </ToggleButton>
                        )}
                        {routes['/contact'] && (
                            <ToggleButton
                                prefixIcon="phone"
                                href={`/${params?.locale}/contact`}
                                selected={pathname.startsWith('/contact')}>
                                <Flex paddingX="8" hide="s">{contact.label}</Flex>
                            </ToggleButton>
                        )}
                    </Flex>
                </Flex>
            </Flex>
            <Flex fillWidth justifyContent="flex-end" alignItems="center">
                <Flex
                    paddingRight="12"
                    justifyContent="flex-end" alignItems="center"
                    textVariant="body-default-s"
                    gap="20">
                    {routing.locales.length > 1 &&
                        <Flex
                            background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                            padding="4" gap="2"
                            justifyContent="center">
                            {i18n && routing.locales.map((locale, index) => (
                                <ToggleButton
                                    key={index}
                                    selected={params?.locale === locale}
                                    onClick={() => handleLanguageChange(locale)}
                                    className={isPending && 'pointer-events-none opacity-60' || ''}
                                >
                                    {locale.toUpperCase()}
                                </ToggleButton>
                            ))}
                        </Flex>
                    }
                    <Flex hide="s">
                        {display.time && (
                            <TimeDisplay timeZone={person.location} />
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}