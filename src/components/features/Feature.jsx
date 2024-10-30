import PropTypes from 'prop-types';

function Feature({ icon, title, description }) {
    return (
        <div className='flex justify-center items-center gap-5 text-xl'>
            <div className=''>
                {icon}
            </div>
            <div className="flex flex-col justify-center items-start">
                <div>{title}</div>
                <div className='font-light text-lg'>{description}</div>
            </div>
            
            {title !== "Payment" && (
                <div className="h-16 w-[1px] bg-gray-200 ml-16" />
            )}
        </div>
    );
}

Feature.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Feature;