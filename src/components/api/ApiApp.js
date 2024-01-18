import Users from './Users';
import { UsersProvider } from './UsersContext';

function ApiApp() {
    return (
        <UsersProvider>
            <Users />
        </UsersProvider>
    );
}
export default ApiApp;
