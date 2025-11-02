'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePhotoStore } from '@/store/usePhotoStore';
import Image from 'next/image';
import { useDebounce } from '@/hooks/useDebounce';
import { Button } from '@openplan/ui/src/button/Button';
import { Skeleton } from '@openplan/ui/src/skeleton/Skeleton';

export default function ResultPage() {
  const router = useRouter();
  const { photo, hasViewed, setHasViewed } = usePhotoStore();
  const [clicked, setClicked] = useState(false);
  const debouncedClicked = useDebounce(clicked, 500);
  const [buttonSize, setButtonSize] = useState<'medium' | 'large'>('medium');

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

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 768) {
        setButtonSize('medium');
      } else {
        setButtonSize('large');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-gray-300/30 text-[15px]"
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

      <div className="w-full flex flex-col desktop:flex-row desktop:gap-10 flex-1 items-center">
        <div className="w-full desktop:w-1/2 px-5 flex justify-center items-center tab:pt-10 mobile:pt-10">
          {displayData ? (
            <div className="relative w-full aspect-[3/2]">
              <Image
                fill
                src={displayData?.download_url ?? ''}
                alt={displayData?.author ?? 'photo'}
                className="object-contain rounded-2xl shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 50vw"
              />
            </div>
          ) : (
            <Skeleton
              height="100%"
              width="100%"
              className="w-full aspect-[3/2]"
              rounded
            />
          )}
        </div>

        <div className="w-full desktop:w-1/2 flex flex-col gap-4 text-md h-full mt-16 px-5">
          {displayData ? (
            <div className="bg-white rounded-2xl shadow-xl w-full p-5 h-[140px] tab:h-[82px]">
              <div className="flex flex-col tab:flex-row tab:justify-between items-start tab:items-center gap-2 tab:gap-0">
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
              height="82px"
              className="rounded-2xl shadow-xl w-full h-full"
              rounded
            />
          )}

          {displayData ? (
            <div className="bg-white rounded-2xl shadow-xl w-full p-5 h-[140px] tab:h-[82px]">
              <div className="flex flex-col tab:flex-row tab:justify-between items-start tab:items-center gap-2 tab:gap-0">
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
              height="82px"
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
              height="140px"
              className="rounded-2xl shadow-xl"
              rounded
            />
          )}

          <div className="w-full flex justify-center items-center">
            <Button
              variant="default"
              size={buttonSize}
              onClick={onClickBackButton}
            >
              이전
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
