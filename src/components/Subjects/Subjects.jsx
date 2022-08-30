import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Link } from 'react-router-dom';
import useSubjectsList from '../../hooks/useSubjectsList';
import IMAGES from '../../images';
import Subject from '../Subject/Subject';
import './Subjects.css';

function Subjects() {
    const [page, setPage] = useState(1);
    const { loading, error, subjects, hasMore } = useSubjectsList(page);

    return (
        <div className="parent">
            {console.log(subjects)}
            {subjects.length > 0 && (
                <InfiniteScroll
                    dataLength={subjects.length}
                    next={() => setPage(page + 4)}
                    loader="loading..."
                    hasMore={hasMore}
                >
                    {subjects.map((val, index) =>
                        val.noq > 0 ? (
                            <Link to={`/quiz/${val.id}`} className="subject-child" key={val.id}>
                                <Subject
                                    noq={val.noq}
                                    title={val.title}
                                    image={IMAGES[index].image}
                                />
                            </Link>
                        ) : (
                            <Subject noq={val.noq} title={val.title} image={IMAGES[index].image} />
                        )
                    )}
                </InfiniteScroll>
            )}
            {loading && <div>Loading...</div>}
            {!loading && subjects === 0 && <div>no data founds</div>}
            {error && <div>There was a error</div>}
        </div>
    );
}

export default Subjects;
