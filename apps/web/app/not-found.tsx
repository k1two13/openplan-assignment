import Link from 'next/link';
import { Button } from '@openplan/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 md:p-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold mb-4 text-gray-900">404</h1>
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          요청하신 페이지가 존재하지 않습니다.
          <br />
          URL을 확인해주세요.
        </p>
        <Link href="/">
          <Button variant="default" size="large">
            홈으로 돌아가기
          </Button>
        </Link>
      </div>
    </div>
  );
}
