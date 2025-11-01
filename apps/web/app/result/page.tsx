'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePhotoStore } from '@/store/usePhotoStore';
import { Button, Skeleton } from '@openplan/ui';
import Image from 'next/image';
import { useDebounce } from '@/hooks/useDebounce';

export default function ResultPage() {
  const router = useRouter();
  const { photo, hasViewed, setHasViewed } = usePhotoStore();
  const [clicked, setClicked] = useState(false);
  const debouncedClicked = useDebounce(clicked, 500);

  const displayData = photo;
  const backgroundImage = displayData?.download_url;

  const onClickBackButton = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (!hasViewed) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasViewed, photo, router]);

  useEffect(() => {
    if (debouncedClicked) {
      setHasViewed(false);
      setClicked(false);
      router.push('/');
    }
  }, [debouncedClicked, router, setHasViewed]);

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-gray-300/30"
      style={
        displayData && backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : undefined
      }
    >
      <div className="flex justify-center items-center text-white h-[52px] w-full">
        고희주
      </div>

      <div className="p-5 w-full flex flex-col md:flex-row gap-10 justify-center items-center flex-1">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            {displayData ? (
              <Image
                width={660}
                height={440}
                src={displayData?.download_url ?? ''}
                alt={displayData?.author ?? 'photo'}
                className="w-full h-full object-contain"
              />
            ) : (
              <Skeleton width="100%" height={440} className="w-full" rounded />
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4 text-md h-full mt-16">
          {displayData ? (
            <div className="bg-white rounded-2xl shadow-xl w-full p-5 h-[82px]">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <span className="text-black">id</span>
                  <p className="text-black/50">{displayData?.id}</p>
                </div>
                <div className="flex-1">
                  <span className="text-black">author</span>
                  <p className="text-black/50">{displayData?.author}</p>
                </div>
              </div>
            </div>
          ) : (
            <Skeleton
              width="100%"
              height={82}
              className="rounded-2xl shadow-xl"
              rounded
            />
          )}

          {displayData ? (
            <div className="bg-white rounded-2xl shadow-xl w-full p-5 h-[82px]">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <span className="text-black">width</span>
                  <p className="text-black/50">
                    {displayData?.width.toLocaleString()}
                  </p>
                </div>
                <div className="flex-1">
                  <span className="text-black">height</span>
                  <p className="text-black/50">
                    {displayData?.height.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <Skeleton
              width="100%"
              height={82}
              className="rounded-2xl shadow-xl"
              rounded
            />
          )}

          {displayData ? (
            <div className="bg-white rounded-2xl p-5 shadow-xl h-[140px]">
              <div>
                <div>
                  <span className="text-black">url</span>
                  <a
                    href={displayData?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/50 underline break-all block"
                  >
                    {displayData?.url}
                  </a>
                </div>
                {displayData?.download_url && (
                  <div>
                    <span className="text-black">download_url</span>
                    <a
                      href={displayData?.download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/50 underline break-all block"
                    >
                      {displayData?.download_url}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Skeleton
              width="100%"
              height={140}
              className="rounded-2xl shadow-xl"
              rounded
            />
          )}

          <div className="w-full flex justify-center items-center">
            {displayData ? (
              <Button
                variant="default"
                size="medium"
                onClick={onClickBackButton}
              >
                이전
              </Button>
            ) : (
              <Skeleton width={154} height={48} rounded />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
