import {defineConfig, loadEnv} from 'vite';
import pick from 'lodash/pick';

import react from '@vitejs/plugin-react-swc';
import {resolve} from 'path';

const envVariablesToInclude = [
    'NODE_ENV'
];
export default ({mode}: { mode: 'development' | 'production' }) =>
{
    const allEnvVariables = {...process.env, ...loadEnv(mode, process.cwd())};
    process.env = pick(allEnvVariables, envVariablesToInclude);

    return defineConfig({
        resolve: {
            alias: {
                '@src': resolve('src'),
                '@components': resolve('src', 'components'),
                '@hooks': resolve('src', 'hooks'),
                '@utils': resolve('src', 'utils')
            }
        },
        define: {
            'process.env': {
                ...process.env
            }
        },
        plugins: [react()]
    });
}

