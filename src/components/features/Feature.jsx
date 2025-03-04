import PropTypes from 'prop-types';

function Feature({ icon, title, description }) {
    return (
        <div className='flex items-center gap-3 sm:gap-4'>
            <div className='text-primary-600'>
                {icon}
            </div>
            <div className="flex flex-col">
                <div className="text-sm sm:text-base font-medium">{title}</div>
                <div className='text-xs sm:text-sm text-gray-600'>{description}</div>
            </div>
        </div>
    );
}

Feature.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Feature;