import { LoadMoreButton } from "./Loading.styled";

export default function Button({ loadMore }) {
    return (
        <LoadMoreButton
            type="button"
            onClick={loadMore}>
            Load more
        </LoadMoreButton>
    );
}