import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const CallToAction: React.FC = () => {

    const navigate = useNavigate()
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 text-center shadow-lg transition-transform transform py-[10rem]">
            <h2 className="text-4xl font-bold mb-4">Join Us Today!</h2>
            <p className="mb-4">Sign up now to get exclusive access to our features and updates.</p>
            <Button onClick={() => navigate('/signup')} variant={'secondary'}>Sign Up</Button>
        </div>
    );
};

export default CallToAction;
