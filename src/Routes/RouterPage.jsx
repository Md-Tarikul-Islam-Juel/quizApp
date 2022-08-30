import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { AuthProvider } from '../contexts/AuthContext';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Quiz from '../pages/Quiz/Quiz';
import Result from '../pages/Result/Result';
import Signup from '../pages/Signup/Signup';

import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function RouterPage() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/quiz/:id"
                            element={
                                <ProtectedRoute>
                                    <Quiz />
                                </ProtectedRoute>
                            }
                        />

                        <Route path="/result" element={<Result />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Layout>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default RouterPage;
