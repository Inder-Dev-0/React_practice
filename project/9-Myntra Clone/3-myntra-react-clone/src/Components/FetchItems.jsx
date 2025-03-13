import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const FetchItems = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     if (fetchStatus?.fetchDone) return;

    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     fetch('https://super-duper-succotash-4jw7r44vv6wp276vw-1227.app.github.dev', { signal })
    //         .then((res) => res.json())
    //         .then(({ items }) => {
    //             dispatch(itemsAction.addInitialItems(items[0]))
    //         });

    //     return () => {
    //         controller.abort();
    //     };
    // }, [fetchStatus]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://super-duper-succotash-4jw7r44vv6wp276vw-1227.app.github.dev', { mode: 'no-cors' })
          

        // fetch('https://super-duper-succotash-4jw7r44vv6wp276vw-1227.app.github.dev', { signal })
            .then(response => response.json())
            .then(({ items }) => {
                dispatch(itemsAction.addInitialItems(items[0]))
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    console.error('Fetch error:', error);
                }
            });

        return () => controller.abort(); // Cleanup on unmount
    }, [fetchStatus]);



    return <>
        <div>
            Fetch Done: {fetchStatus.fetchDone}
            Currently fetching: {fetchStatus.currentlyFetching}
        </div>
    </>
}

export default FetchItems;