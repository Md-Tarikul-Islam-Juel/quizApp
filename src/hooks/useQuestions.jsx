import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

function useSubjectsList(questionsID) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            // database related works
            const db = getDatabase();
            const quizRef = ref(db, `questions/${questionsID}/questions`); // (db,node name)
            const quizQuery = query(quizRef, orderByKey());

            try {
                setLoading(true);
                setError(false);
                // request firebase database
                const snapeshot = await get(quizQuery);
                setLoading(false);
                if (snapeshot.exists()) {
                    setQuestions((prevQuestions) => [
                        ...prevQuestions,
                        ...Object.values(snapeshot.val()),
                    ]);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchQuestions();
    }, [questionsID]);

    return {
        loading,
        error,
        questions,
    };
}

export default useSubjectsList;
