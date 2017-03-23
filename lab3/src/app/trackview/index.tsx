import { asyncComponent } from 'react-async-component';

// Create async component 👇
export default asyncComponent({
  resolve: () => System.import('./track-view.component')
                 // That resolves to 👆
});