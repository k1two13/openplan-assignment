'use client';

import { Button } from '@openplan/ui';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/Loader';
import { useDebounce } from '@/hooks/useDebounce';
import { usePhotoQuery } from '@/hooks/usePhotoQuery';
import { usePhotoStore } from '@/store/usePhotoStore';

export default function Home() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { hasViewed } = usePhotoStore();
  const debouncedClicked = useDebounce(clicked, 500);
  const { fetchPhoto, isLoading } = usePhotoQuery();

  const onClickButton = async () => {
    setClicked(true);
  };

  useEffect(() => {
    if (hasViewed) {
      router.push('/result');
    }
  }, [hasViewed, router]);

  useEffect(() => {
    if (debouncedClicked) {
      fetchPhoto().then(() => {
        router.push('/result');
        setClicked(false);
      });
    }
  }, [debouncedClicked, fetchPhoto, router]);

  return (
    <>
      {isLoading && <Loader />}
      <main className="flex min-h-screen flex-col items-center bg-white">
        <div className="flex justify-center items-center text-gray h-[52px] w-full text-[15px]">
          고희주
        </div>
        <div className="flex flex-col items-center justify-center w-full flex-1 text-[28px] desktop:text-[32px] font-semibold text-black">
          <h1>안녕하세요</h1>
          <h1>고희주입니다.</h1>
        </div>
        <div className="w-full flex justify-center items-center desktop:h-[140px] h-32">
          <Button
            variant="default"
            size="large"
            onClick={onClickButton}
            isLoading={isLoading}
          >
            다음
          </Button>
        </div>
      </main>
    </>
  );
}
