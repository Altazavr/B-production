import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared';
import { Sidebar } from 'widgets/Sidebar';

describe('Button', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId("toggleBtn");
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
