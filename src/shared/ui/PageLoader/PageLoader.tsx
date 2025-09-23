import { classNames } from 'shared';
import './PageLoader.scss';
import { Loader } from '../Loader/Loader';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames('page__loader', {}, [className])}>
        <Loader />
    </div>
);
