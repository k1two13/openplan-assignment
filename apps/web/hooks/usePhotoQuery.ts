import { useMutation, useQuery } from '@tanstack/react-query';
import { usePhotoStore } from '@/store/usePhotoStore';
import { Photo } from '@/types/photo';

async function fetchPhoto(): Promise<Photo> {
  const response = await fetch('/api/photo');

  return response.json();
}

export function usePhotoQuery() {
  const { photo, setPhoto } = usePhotoStore();

  const query = useQuery({
    queryKey: ['photo'],
    queryFn: fetchPhoto,
    enabled: false,
    staleTime: Infinity,
  });

  const mutation = useMutation({
    mutationFn: fetchPhoto,
    onSuccess: (data) => {
      setPhoto(data);
    },
  });

  return {
    data: photo || query.data,
    isLoading: query.isLoading || mutation.isPending,
    fetchPhoto: mutation.mutateAsync,
  };
}
