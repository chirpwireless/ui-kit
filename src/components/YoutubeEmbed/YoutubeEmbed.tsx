import { FC } from 'react';

interface Props {
    videoId: string;
    width?: number;
    height?: number;
    title?: string;
    autoplay?: boolean;
}

export const YoutubeEmbed: FC<Props> = ({
    videoId,
    width = 340,
    height = 191,
    title = 'YouTube Video',
    autoplay = false,
}) => (
    <iframe
        title={title}
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        style={{ borderRadius: '8px' }}
    />
);
