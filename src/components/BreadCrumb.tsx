import { Link } from 'react-router-dom';

 const Breadcrumb = ({ paths }: {paths: any}) => {
    return (
        <nav aria-label="breadcrumb" className='mb-4'>
            <ol className="flex space-x-2 text-sm text-gray-500">
                {paths.map((path: any, index: number) => (
                    <li key={index} className="flex items-center">
                        {index !== paths.length - 1 ? (
                            <Link to={path.href} className="text-green-400 hover:text-green-500">
                                {path.name}
                            </Link>
                        ) : (
                            <span>{path.name}</span>
                        )}

                        {/* Add a separator (except for the last item) */}
                        {index !== paths.length - 1 && (
                            <span className="mx-2">/</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb

