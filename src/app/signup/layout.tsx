import React from 'react'

interface Props {
    children: React.ReactNode
}

const SignupLayout: React.FC<
    Props
> = ({
    children
}) => {
    return (
        <div className='signup-layout'>
            <main>
                {
                    children
                }
            </main>
        </div>
    )
}

export default SignupLayout
