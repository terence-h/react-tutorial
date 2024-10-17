import Image, { StaticImageData } from "next/image";

interface ImageContainerProps {
    src: StaticImageData | string;
    alt: string;
    className?: string;
    imgClassName?: string
}

export default function ImageContainer({ src, alt, className, imgClassName }: ImageContainerProps) {
    return (
        <div className={`${className}`}>
            <Image src={src} className={`object-contain ${imgClassName}`} alt={alt} />
        </div>
    );
}