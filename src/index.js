import dva from 'dva';
import './index.css';

import App from './App';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/user').default);
app.model(require('./models/teacher').default);
app.model(require('./models/student').default);
app.model(require('./models/course').default);
app.model(require('./models/comment').default);


// 4. Router
app.router(({history})=>{
    return <App history={history}  />
});


// 5. Start
app.start('#root');
