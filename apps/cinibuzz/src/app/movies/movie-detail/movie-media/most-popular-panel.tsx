import { Image } from '@chakra-ui/react';
import { useGETConfiguration } from '@cinibuzz/tmdb';

export interface MostPopularPanelProps {
  imageSrc: string;
}

export function MostPopularPanel(props: MostPopularPanelProps) {
  const { data: config } = useGETConfiguration();

  return (
    <Image
      src={`${config?.images?.secure_base_url}${config?.images?.backdrop_sizes?.[2]}${props.imageSrc}`}
      objectFit="cover"
      height="auto"
      width="100%"
      rounded="2xl"
    />
  );
}

export default MostPopularPanel;
