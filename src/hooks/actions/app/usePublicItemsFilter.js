import { publicAxios } from "../../../utils/Auth";

export const usePublicItemsFilter = (
    collection,
    queryString,
    enabled,
    cacheTime = 300000
) => {
    return useQuery(
        [collection, queryString],
        () =>
            publicAxios
                .get(`/${collection}${queryString ? `${queryString}` : ``}`)
                .then((res) => {
                    return res?.data;
                }),
        {
            enabled: enabled,
            cacheTime: cacheTime,
        }
    );
};
