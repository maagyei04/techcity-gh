import React from 'react';
import { Flex, Text, Tag } from '@/once-ui/components';
import Image from 'next/image';

interface ArticleCardProps {
    category: string;
    title: string;
    author: string;
    imageUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ category, title, author, imageUrl }) => {
    return (
        <Flex direction="column" style={{ width: '300px', margin: '16px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', border: 'solid', borderWidth: 0.5, borderColor: '#B3B3B3FF' }}>
            <Image src={imageUrl} alt={title} width={300} height={200} />
            <Flex direction="column" padding="16" style={{ backgroundColor: 'white' }}>
                <Tag variant="neutral" size="s">{category}</Tag>
                <Text variant="body-strong-m" marginTop="8">{title}</Text>
                <Text variant="body-default-s" marginTop="4">{author}</Text>
            </Flex>
        </Flex>
    );
};

export default ArticleCard;