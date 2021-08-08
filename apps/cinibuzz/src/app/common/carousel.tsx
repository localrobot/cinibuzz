import { Box, BoxProps, Flex, FlexProps, IconButton, IconButtonProps } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function CarouselContainer(props: FlexProps) {
  return <Flex align="center" justify="space-between" position="relative" height="320px" width="full" {...props} />;
}

function CarouselIconButton(props: IconButtonProps) {
  return <IconButton fontWeight="bold" size="lg" colorScheme="blackAlpha" zIndex="modal" {...props} />;
}

function CarouselSlideContainer(props: BoxProps) {
  return <Box position="absolute" height="inherit" width="full" {...props} />;
}

export interface CarouselProps {
  itemsCount: number;
  children: ({ currentIndex }: { currentIndex: number }) => ReactElement;
}

export function Carousel(props: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex(idx => (idx === props.itemsCount ? 0 : idx + 1));
  const prevSlide = () => setCurrentIndex(idx => (idx === 0 ? props.itemsCount - 1 : idx - 1));

  return (
    <CarouselContainer>
      <CarouselIconButton aria-label="Previous" icon={<BsChevronLeft />} onClick={prevSlide} />
      <CarouselSlideContainer>{props.children({ currentIndex })}</CarouselSlideContainer>
      <CarouselIconButton aria-label="Next" icon={<BsChevronRight />} onClick={nextSlide} />
    </CarouselContainer>
  );
}

export default Carousel;
