import { Image, LinkBox, LinkBoxProps, LinkOverlay, Text } from '@chakra-ui/react';
import { Link, LinkProps } from 'react-router-dom';

export interface ImageCardProps {
  imgSrc: string;
  title: string;
  linkTo: LinkProps['to'];
  subTitle: string;
}

export function ImageCard({ imgSrc, linkTo, subTitle, title, ...linkBoxProps }: ImageCardProps & LinkBoxProps) {
  return (
    <LinkBox d="flex" flexDirection="column" {...linkBoxProps}>
      <Image
        src={imgSrc}
        alt={title}
        rounded="2xl"
        objectFit="cover"
        height="full"
        mb="2"
        fallbackSrc="https://via.placeholder.com/150"
      />

      <Text isTruncated fontSize="lg" mb="1">
        <LinkOverlay as={Link} to={linkTo} fontWeight="semibold" title={title}>
          {title}
        </LinkOverlay>
      </Text>

      <Text isTruncated d="block" as="span" fontSize="medium" color="gray.500" title={subTitle}>
        {subTitle}
      </Text>
    </LinkBox>
  );
}

export default ImageCard;
