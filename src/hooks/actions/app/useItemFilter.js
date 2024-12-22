import { useQuery } from "react-query";
import { secureAxios } from "../../../utils/Auth";

export const useItemsFilter = (
    collection,
    queryString,
    enabled,

    cacheTime = 300000
) => {
    return useQuery(
        [collection, queryString],
        () =>
            secureAxios
                .get(`/${collection}${queryString ? `${queryString}` : ``}`)
                .then((res) => {
                    return res;
                }),
        {
            enabled: enabled,
            cacheTime: cacheTime,
        }
    );
};
