import { createApi } from "@reduxjs/toolkit/query";
// @ts-ignore
import { request, gql, ClientError } from "graphql-request";

const api_url = process.env.REACT_APP_GET_POSTS_URL;

const graphqlBaseQuery =
    ({ baseUrl }: { baseUrl: string }) =>
    async ({ body }: { body: string }) => {
        try {
            const result = await request(baseUrl, body);
            return { data: result };
        } catch (error) {
            if (error instanceof ClientError) {
                return {
                    //@ts-ignore
                    error: { status: error.response.status, data: error },
                };
            }
            return { error: { status: 500, data: error } };
        }
    };

export const api = createApi({
    baseQuery: graphqlBaseQuery({
        baseUrl: api_url!,
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => ({
                body: gql`
                    query MyQuery {
                        posts {
                            id_post
                            comments {
                                id
                                message
                                user {
                                    id
                                    avatar_url
                                    display_name
                                }
                            }
                            hastags
                            image_url
                            subtitle
                        }
                    }
                `,
            }),
            transformResponse: (response) => response.posts.data,
        }),
    }),
});
