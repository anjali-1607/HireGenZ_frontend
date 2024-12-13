import { useMutation } from "@tanstack/react-query";
import { publicAxios } from "../../../utils/Auth";
import { queryClient } from "../query";

export const usePublicCreateItem = (
    collection,
    extra_invalidate = null,
    isInvalidate = true
) => {
    return useMutation(
        (newItem) => {
            return publicAxios
                .post(`${collection}`, newItem)
                .then((res) => res);
        },
        {
            onSuccess: () => {
                if (isInvalidate) {
                    queryClient.invalidateQueries([collection]);
                }

                if (extra_invalidate) {
                    queryClient.invalidateQueries([extra_invalidate]);
                }
            },
        }
    );
};
