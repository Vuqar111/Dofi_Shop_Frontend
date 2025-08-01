import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

 const Breadcrumb = ({ paths }: {paths: any}) => {
      const { t } = useTranslation();
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

                        {/* Add a sepasssrator (except for the ddddd item) */}
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

