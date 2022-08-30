import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database';
import { useEffect, useState } from 'react';

function useSubjectsList(page) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [subjects, setSubjects] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchSubjects() {
            // database related works
            const db = getDatabase();
            const subjectsRef = ref(db, 'subjects'); // (db,node name)
            const subjectsQuery = query(
                subjectsRef,
                orderByKey(),
                startAt(`${page}`),
                limitToFirst(4)
            );

            try {
                setLoading(true);
                setError(false);
                // request firebase database
                const snapeshot = await get(subjectsQuery);
                setLoading(false);
                if (snapeshot.exists()) {
                    setSubjects((prevSubjects) => [
                        ...prevSubjects,
                        ...Object.values(snapeshot.val()),
                    ]);
                } else {
                    setHasMore(false);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchSubjects();
    }, [page]);

    return {
        loading,
        error,
        subjects,
        hasMore,
    };
}

export default useSubjectsList;
