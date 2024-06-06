import { gql } from "apollo-angular"

export const GET_ALL_BOOKS =gql`
    query{
        allBooks{
            id
            title
            publishedDate
            price
            imgUrl
            author{
              firstName
              lastName
            }
        }
    }
`;