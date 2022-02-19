import React, { useState } from "react";
import ImageNext from "next/image";
import Spinner from "app/spinner/Spinner";
type Props = {
  src: StaticImageData;
  alt: string;
  className?: string;
};

export default function Image({ alt, src, className = "" }: Props) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && (
        <div className=" d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
      )}

      <ImageNext
        src={src}
        layout="responsive"
        alt={alt}
        objectFit="contain"
        onLoadingComplete={() => setLoading(false)}
        className={className}
      />
    </>
  );
}
