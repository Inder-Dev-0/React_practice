import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const FetchItems = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        if(fetchStatus.fetchDone) return;
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://ominous-guide-x5vw466ppprwhpwpr-1227.app.github.dev/items', { signal })
            .then((res) => res.json())
            .then(({items}) => {
                console.log("Item fetched", items)
            })

        return () => {
        }
    }, [fetchStatus])

    return <>
        <div>
            Fetch Done: {fetchStatus.fetchDone}
            Currently fetching: {fetchStatus.currentlyFetching}
        </div>
    </>
}

export default FetchItems;