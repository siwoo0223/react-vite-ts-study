import { useQuery, UseQueryOptions, QueryKey, MutationFunction, UseMutationOptions, useMutation } from "@tanstack/react-query";

export function useQueryFn<TData = unknown, TError = unknown>(
  queryKey: QueryKey,
  queryFn: () => Promise<TData>,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) {
  return useQuery<TData, TError>({
    queryKey,
    queryFn,
    ...options, // 사용자가 전달한 옵션만 적용
  });
    // retry: false, // 실패 시 재시도 안 함
    // refetchOnWindowFocus: false, // 창 포커스 시 재요청 안 함
    // staleTime: 5000, // 5초 동안 데이터를 신선하게 유지
    // cacheTime: 300000, // 5분 동안 캐시 유지
    // onSuccess: (data) => console.log("데이터 로드 성공:", data),
    // onError: (error) => console.error("에러 발생:", error),
}

export function useMutationFn<TData = unknown, TError = unknown>(
  mutationFn: MutationFunction<TData>,
  options?: Omit<UseMutationOptions<TData, TError>, "mutationFn">
) {
  return useMutation<TData, TError>({
    mutationFn,
    ...options, // 사용자가 전달한 옵션만 적용
  });
}