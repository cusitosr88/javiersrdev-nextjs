'use client'; // This is a client component
import Image from 'next/image';
import { useState } from 'react';

interface Props {
    image: string,
}

export default function BlurImage({ image } : Props) {
    const [isLoading, setLoading] = useState<boolean>(true);
  
    return (
      <div className="group">
        <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-5 xl:aspect-h-3">
          <Image
            alt=""
            src={image}
            width={200}
            height={200}
            className={`
                duration-700 ease-in-out group-hover:opacity-75
                ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
            onLoadingComplete={() => setLoading(false)}
            loading='lazy'
          />
        </div>
      </div>
    );
  }
