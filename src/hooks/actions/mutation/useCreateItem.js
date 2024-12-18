import { useMutation } from "react-query";
import { secureAxios } from "../../../utils/Auth";
import { queryClient } from "../query";

export const useCreateItem = (
    collection,
    extra_invalidate = null,
    isInvalidate = true
) => {
    return useMutation(
        (newItem) => {
            return secureAxios
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
