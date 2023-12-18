// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: "todoRTK",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getAllTodos: builder.query<{ description: string; id: number }[], void>({
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        console.log(response);
        return response.todos;
      },
      providesTags: ["todos"],
    }),
    postTodo: builder.mutation<void, string>({
      query: (description) => ({
        url: "/todo",
        method: "POST",
        body: { description },
      }),
      invalidatesTags: ["todos"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTodosQuery, usePostTodoMutation } = todoApi;
